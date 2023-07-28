import Image from "next/image";
import Link from "next/link";

const FeaturedCategoryCard = ({ category }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
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
        <a className="btn btn-primary mt-2">View Products</a>
      </Link>
    </div>
  );
};

export default FeaturedCategoryCard;
