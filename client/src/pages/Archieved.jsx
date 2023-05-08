import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchArchieved } from "../store/action/actionCreator";
import ArchPost from "../components/ArchPost";

export default function Archieved() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArchieved());
  }, [dispatch]);

  const archieves = useSelector(state => {
    return state.archieveReducer.archieves;
  });

  //   console.log("archieves :", archieves);
  return (
    <div className=" bg-gradient-to-b from-purple-100 to-white-500 rounded-3xl m-6">
      <div className="overflow-x-auto">
        <h1 className="pt-12 pl-12 mb-12 text-2xl font-bold text-slate-700 sm:text-3xl md:text-4xl">
          Archived Post 🏷️
        </h1>
        <table className="m-12 w-5/6 divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Post Title
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Description
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Username Profile
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Action
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {/* {reportData.map(data => {
              return <ReportedTable key={data.id} data={data} />;
            })} */}
            {Array.isArray(archieves) &&
              archieves?.map(data => {
                return <ArchPost key={data.id} data={data} />;
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
