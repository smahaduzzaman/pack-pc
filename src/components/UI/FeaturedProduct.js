import Image from "next/image";
import React from "react";


const FeaturedProduct = async ({ featuredProducts }) => {
  return (
    <section className="container mx-auto my-8 px-4">
      <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {featuredProducts?.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded shadow">
            <Image
              src={product?.image}
              alt={product?.productName}
              className="w-full h-40 object-cover mb-4"
              width={200}
              height={200}
              layout="fixed"
            />
            <h3 className="text-lg font-semibold">{product?.productName}</h3>
            <p className="text-sm text-gray-500 mb-2">{product?.category}</p>
            <p className="text-lg font-bold">${product?.price.toFixed(2)}</p>
            <p
              className={`text-sm ${
                product?.status === "In Stock"
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {product?.status}
            </p>
            <div className="flex items-center">
              <span className="text-yellow-500 mr-1">
                {"★".repeat(product?.rating)}
              </span>
              <span className="text-gray-500">
                {"★".repeat(5 - product?.rating)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProduct;
