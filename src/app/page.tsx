"use server";
import Image from "next/image";
import Link from "next/link";
import { getFoods } from "@/utils/services/api";
import { Food } from "@/utils/types";
import { DeleteConfirmButton } from "../DeleteConfirmButton";

export default async function Products() {
  const posts = await getFoods();

  if (!posts) {
    return <div className="text-center p-4">No foods found.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Food</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post: Food) => (
          <div key={post.Id} className="relative group">
            <Link
              href={`/food/${post.Id}`}
              className="block border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
            >
              <div>
                <Image
                  src={post.PhotoLink}
                  alt={post.Title}
                  width={300}
                  height={300}
                  className="w-full h-48 object-contain mb-2 rounded"
                />
                <h2 className="text-lg font-semibold">{post.Title}</h2>
                <div className="flex items-center mt-2">
                  <span className="text-orange-500 mr-1">♥</span>
                  <span>{post.NumLikes}</span>
                </div>
              </div>
            </Link>
            <DeleteConfirmButton id={post.Id} />
          </div>
        ))}
      </div>
    </div>
  );
}
