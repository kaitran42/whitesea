"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ImagePlus } from "lucide-react";
import { uploadFood } from "@/utils/services/api";
import { cn } from "@/lib/utils";

export default function CreateRecipeForm() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [description, setDescription] = useState("");
  const [recipeLink, setRecipeLink] = useState("");
  const [bounce, setBounce] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const validateForm = () => title && image;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      setBounce(true);
      setTimeout(() => setBounce(false), 820);
      return;
    }

    try {
      const formData = new FormData();
      formData.append("title", title);
      // Convert File to Blob if needed
      const imageBlob = new Blob([image!], { type: image!.type });
      formData.append("image", imageBlob);
      formData.append("description", description);
      formData.append("recipeLink", recipeLink);

      await uploadFood(formData);

      // Reset form
      setTitle("");
      setImage(null);
      setDescription("");
      setRecipeLink("");
    } catch (error) {
      console.error("Error uploading:", error);
    }
  };

  return (
    <main className="container mx-auto px-4 py-8 md:py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Create post</h1>
        <Card className="w-full">
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">
                  Title <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="title"
                  placeholder="Enter the recipe title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="image">
                  Add Image <span className="text-red-500">*</span>
                </Label>
                <div className="flex items-center justify-center w-full">
                  <label
                    htmlFor="image"
                    className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <ImagePlus className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" />
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        PNG or JPG (MAX. 800x400px)
                      </p>
                    </div>
                    <Input
                      id="image"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageChange}
                    />
                  </label>
                </div>
                {image && (
                  <p className="text-sm text-green-600 mt-2">
                    Image uploaded: {image.name}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your recipe..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="recipeLink">Recipe Link</Label>
                <Input
                  id="recipeLink"
                  type="url"
                  placeholder="https://example.com/recipe"
                  value={recipeLink}
                  onChange={(e) => setRecipeLink(e.target.value)}
                  required
                />
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                <span className="text-red-500">*</span> Required fields
              </p>
            </form>
          </CardContent>
          <CardFooter>
            <Button
              type="submit"
              className={cn(
                "w-full transition-all",
                bounce && "animate-bounce-horizontal",
                !validateForm() && "opacity-50",
              )}
              disabled={!validateForm()}
              onClick={handleSubmit}
            >
              Create Post
            </Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
