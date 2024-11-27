"use server";
import { createClient } from "@/utils/supabase/server";
import { Food } from "@/utils/types";
import { v4 as uuidv4 } from "uuid";

export async function getFoods(limit = 100): Promise<Food[]> {
  const { data, error } = await createClient()
    .from("Foods")
    .select("*")
    .limit(limit);
  
  if (error) throw error;
  return data;
}

export async function getFood(id: string): Promise<Food> {
  const { data, error } = await createClient()
    .from("Foods")
    .select("*")
    .eq("Id", id)
    .single();
  
  if (error) throw error;
  return data;
}

export async function uploadFood(formData: FormData) {
  try {
    const title = formData.get('title') as string;
    const image = formData.get('image') as Blob;
    const description = formData.get('description') as string;
    const externalLink = formData.get('recipeLink') as string;

    // Convert Blob to ArrayBuffer
    const buffer = await image.arrayBuffer();

    const supabase = createClient();
    
    // Upload using buffer
    const id: string = uuidv4();
    const fileName = `${id}.jpg`;
    const { error: uploadError } = await supabase.storage
      .from('product_pictures')
      .upload(fileName, buffer, {
        contentType: image.type,
        cacheControl: '3600',
        upsert: false
      });

    if (uploadError) throw uploadError;

    const photoLink = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/product_pictures/${fileName}`;


    // Create food entry
    const { error: dbError } = await supabase
      .from('Foods')
      .insert([{
        Id: id,
        Author: "Kai Tran",
        Title: title,
        PhotoLink: photoLink,
        Description: description,
        ExternalLink: externalLink
      }]);

    if (dbError) throw dbError;
  } catch (error) {
    throw error;
  }
}

export async function deleteFood(id: string) {
  try {
    const supabase = createClient();
    
    // Delete image from bucket
    const { error: deleteError } = await supabase.storage.from('product_pictures').remove([`${id}.jpg`]);
    if (deleteError) throw deleteError;

    // Delete food entry
    const { error: dbError } = await supabase
      .from('Foods')
      .delete()
      .eq('Id', id);

    if (dbError) throw dbError;
  } catch (error) {
    throw error;
  }
}
