import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReportedTable from "../components/ReportedTable";

import { fetchReports } from "../store/action/actionCreator";

export default function Reported() {
  const dispatch = useDispatch();

  // trigger all post
  useEffect(() => {
    dispatch(fetchReports());
  }, [dispatch]);

  // fetch totalPosts
  const reportData = useSelector(state => {
    return state.reportReducer.reports;
  });
  console.log("reportData :", reportData);

  return (
    <div className=" bg-gradient-to-b from-purple-100 to-white-500 rounded-3xl m-6">
      <div className="overflow-x-auto">
        <h1 className="pt-12 pl-12 mb-12 text-2xl font-bold text-slate-700 sm:text-3xl md:text-4xl">
          Reported posts from users 📋
        </h1>
        <table className="m-12 w-5/6 divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Report Message
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Post Title
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                User Profile
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Posted on
              </th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {reportData.map(data => {
              return <ReportedTable key={data.id} data={data} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
