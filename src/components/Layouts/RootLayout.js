import Head from "next/head";
import Footer from "../UI/Footer";
import Navbar from "../UI/Navbar";

export default function RootLayout({ children }) {
  return (
    <div className="container">
      <Head>
        <title>PC Builder | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>{children}</main>

      <Footer />
    </div>
  );
}
