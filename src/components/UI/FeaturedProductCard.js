import Image from "next/image";

const FeaturedProductCard = ({ product }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
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
          product?.status === "In Stock" ? "text-green-600" : "text-red-600"
        }`}
      >
        {product?.status}
      </p>
      <div className="flex items-center">
        <span className="text-yellow-500 mr-1">
          {"★".repeat(product?.rating)}
        </span>
        <span className="text-gray-500">{"★".repeat(5 - product?.rating)}</span>
      </div>
    </div>
  );
};

export default FeaturedProductCard;
