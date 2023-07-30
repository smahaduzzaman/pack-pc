import RootLayout from "@/components/Layouts/RootLayout";
import { redirect } from "next/dist/server/api-utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Products = ({ products }) => {
  return (
    <section className="container mx-auto my-8 px-4">
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products?.slice(0, 4).map((product) => (
          <div key={product.id} className="bg-white p-4 rounded shadow">
            <p className="text-lg text-black mb-5">ID: {product?._id}</p>
            <Image
              src={product?.image}
              alt={product?.productName}
              className="w-full h-40 object-cover mb-4"
              width={200}
              height={200}
              layout="fixed"
            />
            <h3 className="text-lg text-black font-bold">
              {product?.productName}
            </h3>
            <p className="text-sm text-gray-500 mb-2">{product?.category}</p>
            <div className={`flex items-center mb-2 justify-between )`}>
              <div className="col-md-6">
                <p className="text-lg text-gray-500 font-bold">
                  ${product?.price.toFixed(2)}
                </p>
              </div>
              <div className="col-md-6">
                <p
                  className={`text-sm ${
                    product?.status === "In Stock"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {product?.status}
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-yellow-500 mr-1">
                {"★".repeat(product?.rating)}
              </span>
              <span className="text-gray-500">
                {"★".repeat(5 - product?.rating)}
              </span>
            </div>
            {/* create details and add to cart tailwind button in a div */}
            <div className="flex justify-between items-center mt-4">
              <Link
                href={`/products/${product._id}`}
                className="h-8 px-4 py-1.5 m-2 text-sm text-indigo-100 transition-colors duration-150 bg-indigo-600 rounded-lg focus:shadow-outline hover:bg-indigo-900"
                // onClick={() => redirect(`/products/${product._id}`)}
              >
                Details
              </Link>
              <Link
                href={`/products/${product._id}`}
                className="h-8 px-4 m-2 py-1 text-sm text-indigo-100 transition-colors duration-150 bg-indigo-600 rounded-lg focus:shadow-outline hover:bg-indigo-900"
                // onClick={() => redirect(`/products/${product._id}`)}
              >
                Add to Cart
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;

Products.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

const getStaticProps = async () => {
  const res = await fetch(`https://pack-pc-server.vercel.app/products`);
  const data = await res.json();

  return {
    props: {
      products: data,
    },
  };
};

export { getStaticProps };
