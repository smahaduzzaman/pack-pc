import RootLayout from "@/components/Layouts/RootLayout";
import FeaturedProduct from "@/pages/FeaturedProduct";
import FeaturedCategory from "@/pages/FeaturedCategory";
import Product from "@/components/UI/Product";

export default function Home({ products }) {
  return (
    <div>
      <FeaturedProduct />
      <Product products={products} />
      <FeaturedCategory />
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/products");
  const data = await res.json();
  console.log(data);

  return {
    props: {
      products: data,
    },
    // revalidate: 10,
  };
};

export { getStaticProps };
