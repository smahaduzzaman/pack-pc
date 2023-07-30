import Image from "next/image";
import React from "react";

const ProductDetails = ({ product }) => {
  return (
    <div className="max-w-md mx-auto my-10 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <Image
        src={product.image}
        alt={product.productName}
        width={500}
        height={500}
      />

      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{product.productName}</h2>
        <p className="text-gray-600 mb-4">{product.category}</p>

        <div className="flex items-center mb-4">
          <span className="text-yellow-500 mr-1">&#9733;</span>
          <span className="text-gray-600">{product.rating}</span>
        </div>

        <p className="text-gray-800">{product.description}</p>

        <h3 className="text-lg font-semibold mt-4 mb-2">Key Features:</h3>
        <ul className="list-disc list-inside pl-4 mb-4">
          <li>
            <span className="font-medium">Brand: </span>
            {product.keyFeatures.Brand}
          </li>
          <li>
            <span className="font-medium">Model: </span>
            {product.keyFeatures.Model}
          </li>
          <li>
            <span className="font-medium">Specification: </span>
            {product.keyFeatures.Specification}
          </li>
          <li>
            <span className="font-medium">Port: </span>
            {product.keyFeatures.Port}
          </li>
          <li>
            <span className="font-medium">Type: </span>
            {product.keyFeatures.Type}
          </li>
          <li>
            <span className="font-medium">Voltage: </span>
            {product.keyFeatures.Voltage}
          </li>
        </ul>

        <div className="flex justify-between items-center">
          <div className="text-lg font-semibold text-gray-800">
            ${product.price}
          </div>
          <div className="text-sm text-gray-600">{product.status}</div>
        </div>

        <div className="flex items-center mt-2">
          <span className="text-yellow-500 mr-1">&#9733;</span>
          <span className="text-gray-600">{product.individualRating}</span>
          <span className="text-gray-400 mx-2">|</span>
          <span className="text-gray-600">
            Average Rating: {product.averageRating}
          </span>
        </div>

        <p className="text-sm text-gray-500 mt-2">
          Created at: {product.created_at}
          <br />
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-3 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;

export const getStaticPaths = async () => {
  const res = await fetch("https://pack-pc-server.vercel.app/products");
  const products = await res.json();

  const paths = products.map((product) => ({
    params: { productId: product._id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.productId;
  const res = await fetch(`https://pack-pc-server.vercel.app/products/${id}`);
  const data = await res.json();

  return {
    props: {
      product: data,
    },
  };
};
