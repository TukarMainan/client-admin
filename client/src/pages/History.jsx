import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchLogs } from "../store/action/actionCreator";
import ListLogs from "../components/ListLogs";

export default function History() {
  const dispatch = useDispatch();

  // trigger all logs
  useEffect(() => {
    dispatch(fetchLogs());
  }, []);

  // fetch total logs
  const logs = useSelector(state => {
    return state.logReducer.logs;
  });

  return (
    <>
      <div className="bg-gradient-to-b h-screen from-purple-100 to-white-500 rounded-3xl m-6">
        <h1 className="pt-12 pl-12 mb-12 text-2xl font-bold text-slate-700 sm:text-3xl md:text-4xl">
          Admin History Logs 📝
        </h1>
        <table className="m-12 w-5/6 divide-y-2 divide-gray-200 rounded-2xl bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Name
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Decription
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Username
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Timelog
              </th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {logs.map(data => {
              return <ListLogs key={data.id} data={data} />;
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
