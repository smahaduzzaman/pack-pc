import RootLayout from "@/components/Layouts/RootLayout";
import Image from "next/image";

const PcBuilder = ({ categories }) => {
  return (
    <div className="container p-2 mx-auto my-1 sm:p-4 bg-gray-700 text-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">Invoice</h2>
        <div className="flex items-center space-x-2">
          <button className="px-3 py-2 text-sm font-semibold text-white bg-gray-800 rounded-md">
            <span className="hidden md:inline-block">Create</span> Invoice
          </button>
          <button className="px-3 py-2 text-sm font-semibold text-white bg-gray-800 rounded-md">
            <span className="hidden md:inline-block">Create</span> Estimate
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-xs">
          <colgroup>
            <col />
            <col />
            <col />
            <col />
            <col />
            <col className="w-24" />
          </colgroup>
          {/* <thead className="bg-gray-700">
            <tr className="text-left">
              <th className="p-3">Invoice #</th>
              <th className="p-3">Client</th>
              <th className="p-3">Issued</th>
              <th className="p-3">Due</th>
              <th className="p-3 text-right">Amount</th>
              <th className="p-3">Status</th>
            </tr>
          </thead> */}
          <tbody>
            {categories?.map((item) => {
              return (
                <tr
                  key={item._id}
                  className="border-b border-opacity-20 border-gray-700 bg-gray-900"
                >
                  <td className="p-3">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={50}
                      height={50}
                    />
                  </td>
                  <td className="p-3">
                    <p>{item.name}</p>
                  </td>
                  <td className="p-3">
                    <span className="px-3 py-1 font-semibold rounded-md bg-violet-400 text-gray-900">
                      <span>Choice</span>
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PcBuilder;

PcBuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/categories");
  const data = await res.json();
  console.log(data);

  return {
    props: {
      categories: data,
    },
  };
};
