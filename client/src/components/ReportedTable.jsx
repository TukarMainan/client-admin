import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { banUser } from "../store/action/actionCreator";
import toaster from "../store/action/toaster";

export default function ReportedTable({ data }) {
  const dispatch = useDispatch();

  const handleSuspend = (id, e) => {
    e.preventDefault();
    dispatch(banUser(id));
    toaster("User has been banned");
    navigate("/reported");
  };

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
            to={`/detail/${data?.id}`} //mestinya data?.Post?.id
            href="#"
            className="inline-block mr-6 rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
          >
            View Detail
          </Link>
          <a
            onClick={e => handleSuspend(`${data?.id}`, e)} //mestinya user id
            href="#"
            className="inline-block rounded bg-red-500 px-4 py-2 text-xs font-medium text-white hover:bg-red-700"
          >
            Suspend User
          </a>
        </td>
      </tr>
    </>
  );
}
