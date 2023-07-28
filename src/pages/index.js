import RootLayout from "@/components/Layouts/RootLayout";
import FeaturedProduct from "@/pages/FeaturedProduct";
import FeaturedCategory from "@/pages/FeaturedCategory";
// import FeaturedProduct from "@/components/UI/FeaturedProduct";
// import FeaturedCategory from "@/components/UI/FeaturedCategory";
import Product from "@/components/UI/Product";

export default function Home({ data }) {
  const { featuredProducts, featuredCategories, products } = data;
  // const featuredProducts = data.featuredProducts;
  // const featuredCategories = data.featuredCategories;
  // const products = data.products;

  return (
    <div className="container">
      {/* <FeaturedProduct featuredProducts={featuredProducts} /> */}
      <Product products={products} />
      {/* <FeaturedCategory featuredCategories={featuredCategories} /> */}
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/data");
  const data = await res.json();
  console.log(data);

  return {
    props: {
      data: data,
    },
  };
};

export { getStaticProps };
