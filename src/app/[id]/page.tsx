import { createClient } from "@/utils/supabase/server";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const supabase = createClient();
  const { data: post } = await supabase
    .from("Foods")
    .select("*")
    .eq("Id", params.id)
    .single();

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{post.Title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Image
            src={post.PhotoLink}
            alt={post.Title}
            width={500}
            height={500}
            className="w-full max-w-[500px] h-auto object-contain rounded"
          />
        </div>
        <div>
          <p className="text-lg mb-2">Likes: {post.NumLikes}</p>
          <p className="text-gray-700">{post.description}</p>
          {/* Add more product details here */}
        </div>
      </div>
    </div>
  );
}
