import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeaturedCategory = ({ featuredCategories }) => {
  console.log(featuredCategories);
  return (
    <section className="container mx-auto my-8 px-4">
      <h2 className="text-2xl font-bold mb-4">Featured Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {featuredCategories?.map((category) => (
          <div key={category.id} className="bg-white p-4 rounded shadow">
            <Image
              src={category.image}
              alt={category.name}
              className="w-full h-40 object-cover mb-4"
              width={200}
              height={200}
              layout="fixed"
            />
            <h3 className="text-lg font-semibold">{category.name}</h3>
            <Link href={`/category/${category.id}`}>
              <button className="btn btn-primary mt-2">View Products</button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCategory;