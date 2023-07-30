import RootLayout from "@/components/Layouts/RootLayout";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Banner from "@/components/UI/Banner";

export default function Home() {
  const { data: session } = useSession();
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  console.log(selectedCategory);

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch("http://localhost:5000/products");
      const data = await res.json();
      setProducts(data);
    };
    getProducts();
  }, []);

  useEffect(() => {
    const getCategories = async () => {
      const res = await fetch("http://localhost:5000/categories");
      const data = await res.json();
      setCategories(data);
    };
    getCategories();
  }, []);

  const filterProducts = (product) => {
    if (selectedCategory === product.category) {
      return product;
    }
  };

  return (
    <>
      <Banner />
      <section className="py-2">
        <div className="container mx-auto">
          <div className="p-4 mx-auto text-center md:px-10 lg:px-32 xl:max-w-3xl">
            <h2 className="mb-3 text-base text-gray-500 sm:mt-5 sm:text-5xl lg:text-lg xl:text-xl">
              Thanks to{" "}
              <span className="text-indigo-500 font-semibold">
                {session?.user?.name}
              </span>{" "}
              for signing in!
            </h2>
            <p className="text-md text-gray-500 mb-5">
              You are signed in as{" "}
              <span className="font-medium text-indigo-500">
                {session?.user?.email}
              </span>
            </p>
            <h2 className="text-2xl font-bold sm:text-4xl">Get Your Pack PC</h2>
          </div>
          <div className="grid grid-cols-5 p-4 md:p-8">
            <div className="flex justify-center px-4 col-span-full md:col-span-1 md:flex-col md:justify-start md:items-start">
              <h3 className="text-2xl font-bold">Categories</h3>
              {categories?.map((category) => {
                return (
                  <div
                    onClick={() => setSelectedCategory(category.name)}
                    key={category._id}
                    className="flex items-center justify-between w-full mt-2"
                  >
                    <button
                      className={`${
                        category.name === "CPU / Processor" && "bg-gray-200"
                      } w-full px-4 py-2 text-left rounded-md hover:bg-gray-200`}
                    >
                      {category.name}
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="grid gap-12 py-4 text-center sm:grid-cols-2 col-span-full md:col-span-4 md:text-left ">
              {products.filter(filterProducts).map((product) => (
                <div
                  key={product._id}
                  className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start bg-gray-50 p-10 rounded-s-lg"
                >
                  <p>ID: {product._id}</p>
                  <Image
                    src={product.image}
                    alt={product.productName}
                    className="w-32 h-32 rounded md:w-32 md:h-32"
                    width={128}
                    height={128}
                  />
                  <h5 className="text-xl font-semibold">
                    {product.productName}
                    <span className="ml-20">{product.category}</span>
                  </h5>
                  <p>{product.description}</p>
                  <div className="flex justify-between">
                    <p className="text-2xl font-bold">
                      Price: ${product.price}
                    </p>
                    <p className="ml-2 text-green-500">{product.status}</p>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Link
                      href={`/products/${product._id}`}
                      className="px-2 py-1 text-white bg-violet-400 rounded-full"
                    >
                      View
                    </Link>
                    <Link
                      href={`/products/${product._id}`}
                      className="px-2 py-1 text-white bg-violet-400 rounded-full"
                    >
                      Add to Cart
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

// const getStaticProps = async () => {
//   const res = await fetch("http://localhost:5000/products");
//   const data = await res.json();
//   console.log(data);

//   return {
//     props: {
//       products: data,
//     },
//   };
// };

// export { getStaticProps };
