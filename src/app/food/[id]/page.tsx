import Image from "next/image";
import { notFound } from "next/navigation";
import { getFood } from "@/utils/services/api";
import Link from "next/link";

type PageProps = {
  params: { id: string };
};

export default async function ProductPage({ params }: PageProps) {
  const post = await getFood(params.id);
  if (!post) notFound();

  return (
    <article className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{post.Title}</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <Image
          src={post.PhotoLink}
          alt={post.Title}
          width={500}
          height={500}
          className="w-full max-w-[500px] h-auto object-contain rounded"
        />
        <div>
          <p className="text-lg mb-2">Likes: {post.NumLikes}</p>
          <p className="text-gray-700">{post.Description}</p>
          <Link
            href={post.ExternalLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            {post.ExternalLink}
          </Link>
        </div>
      </div>
    </article>
  );
}
