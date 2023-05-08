import { Link } from "react-router-dom";

export default function CategoryList({ data }) {
  return (
    <>
      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          {data?.id}
        </td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
          {data?.name}
        </td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
          <Link to={`/category/${data?.id}`}>Edit</Link>
        </td>
      </tr>
    </>
  );
}
