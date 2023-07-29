import React from "react";

const Dashboard = () => {
  return (
    <div className="container p-2 mx-auto sm:p-4 bg-gray-700 text-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">Pack PC</h2>
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
          <thead className="bg-gray-700">
            <tr className="text-left">
              <th className="p-3">Invoice #</th>
              <th className="p-3">Client</th>
              <th className="p-3">Issued</th>
              <th className="p-3">Due</th>
              <th className="p-3 text-right">Amount</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-opacity-20 border-gray-700 bg-gray-900">
              <td className="p-3">
                <p>97412378923</p>
              </td>
              <td className="p-3">
                <p>Microsoft Corporation</p>
              </td>
              <td className="p-3">
                <p>14 Jan 2022</p>
                <p className="text-gray-400">Friday</p>
              </td>
              <td className="p-3">
                <p>01 Feb 2022</p>
                <p className="text-gray-400">Tuesday</p>
              </td>
              <td className="p-3 text-right">
                <p>$15,792</p>
              </td>
              <td className="p-3">
                <span className="px-3 py-1 font-semibold rounded-md bg-violet-400 text-gray-900">
                  <span>Pending</span>
                </span>
              </td>
            </tr>
            <tr className="border-b border-opacity-20 border-gray-700 bg-gray-900">
              <td className="p-3">
                <p>97412378923</p>
              </td>
              <td className="p-3">
                <p>Tesla Inc.</p>
              </td>
              <td className="p-3">
                <p>14 Jan 2022</p>
                <p className="text-gray-400">Friday</p>
              </td>
              <td className="p-3">
                <p>01 Feb 2022</p>
                <p className="text-gray-400">Tuesday</p>
              </td>
              <td className="p-3 text-right">
                <p>$275</p>
              </td>
              <td className="p-3">
                <span className="px-3 py-1 font-semibold rounded-md bg-violet-400 text-gray-900">
                  <span>Pending</span>
                </span>
              </td>
            </tr>
            <tr className="border-b border-opacity-20 border-gray-700 bg-gray-900">
              <td className="p-3">
                <p>97412378923</p>
              </td>
              <td className="p-3">
                <p>Coca Cola co.</p>
              </td>
              <td className="p-3">
                <p>14 Jan 2022</p>
                <p className="text-gray-400">Friday</p>
              </td>
              <td className="p-3">
                <p>01 Feb 2022</p>
                <p className="text-gray-400">Tuesday</p>
              </td>
              <td className="p-3 text-right">
                <p>$8,950,500</p>
              </td>
              <td className="p-3">
                <span className="px-3 py-1 font-semibold rounded-md bg-violet-400 text-gray-900">
                  <span>Pending</span>
                </span>
              </td>
            </tr>
            <tr className="border-b border-opacity-20 border-gray-700 bg-gray-900">
              <td className="p-3">
                <p>97412378923</p>
              </td>
              <td className="p-3">
                <p>Nvidia Corporation</p>
              </td>
              <td className="p-3">
                <p>14 Jan 2022</p>
                <p className="text-gray-400">Friday</p>
              </td>
              <td className="p-3">
                <p>01 Feb 2022</p>
                <p className="text-gray-400">Tuesday</p>
              </td>
              <td className="p-3 text-right">
                <p>$98,218</p>
              </td>
              <td className="p-3">
                <span className="px-3 py-1 font-semibold rounded-md bg-violet-400 text-gray-900">
                  <span>Pending</span>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
