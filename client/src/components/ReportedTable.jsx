import { Link } from "react-router-dom";

export default function ReportedTable({ data }) {
  return (
    <>
      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          {data?.message}
        </td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
          {data?.Post?.title}
        </td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
          {data?.User?.username}
        </td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
          {data?.Post?.createdAt}
        </td>
        <td className="whitespace-nowrap px-4 py-2 ">
          <Link
            to={`/detail/${data?.id}`}
            href="#"
            className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
          >
            View
          </Link>
          <a> </a>
          <a
            href="#"
            className="inline-block rounded bg-red-500 px-4 py-2 text-xs font-medium text-white hover:bg-red-700"
          >
            Block
          </a>
        </td>
      </tr>
    </>
  );
}
