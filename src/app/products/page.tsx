import { createClient } from "@/utils/supabase/server";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  image_url: string;
  rating: number;
}

export default async function Products() {
  const supabase = createClient();
  const { data: products } = await supabase
    .from("Products")
    .select("id, name, image_url, rating");

  if (!products) {
    return <div className="text-center p-4">No products found.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product: Product) => (
          <Link 
            href={`/products/${product.id}`} 
            key={product.id} 
            className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
          >
            <div>
              <Image
                src={product.image_url}
                alt={product.name}
                width={300}
                height={300}
                className="w-full h-48 object-contain mb-2 rounded"
              />
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <div className="flex items-center mt-2">
                <span className="text-yellow-500 mr-1">★</span>
                <span>{product.rating.toFixed(1)}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
