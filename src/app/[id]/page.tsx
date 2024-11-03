import { createClient } from "@/utils/supabase/server";
import Image from "next/image";
import { notFound } from "next/navigation";

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const supabase = createClient();
  const { data: product } = await supabase
    .from("Products")
    .select("*")
    .eq("id", params.id)
    .single();

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Image
            src={product.image_url}
            alt={product.name}
            width={500}
            height={500}
            className="w-full max-w-[500px] h-auto object-contain rounded"
          />
        </div>
        <div>
          <p className="text-lg mb-2">Rating: {product.rating.toFixed(1)}</p>
          <p className="text-gray-700">{product.description}</p>
          {/* Add more product details here */}
        </div>
      </div>
    </div>
  );
}
