import { useDispatch, useSelector } from "react-redux";
import { banUser } from "../store/action/actionCreator";
import toaster from "../store/action/toaster";
import { Link } from "react-router-dom";

export default function ArchPost({ data }) {
  const dispatch = useDispatch();

  const handleSuspend = (id, e) => {
    e.preventDefault();
    dispatch(banUser(id));
    toaster("User has been banned");
    navigate("/archieve");
  };

  const handleDetail = id => {
    console.log("detail id post:", id);
  };
  return (
    <>
      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          {data?.title}
        </td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
          {data?.description}
        </td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
          Username: {data?.User?.id}
        </td>
        <td className="grid grid-cols-2 whitespace-nowrap px-4 py-2 text-purple-900">
          <button>
            <Link
              to={`/detail/${data?.id}`} //mestinya data?.Post?.id
              href="#"
              className="inline-block mr-6 rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
            >
              View Detail
            </Link>
          </button>
          <button onClick={() => handleSuspend(data?.UserId)}>
            Suspend User
          </button>
        </td>
      </tr>
    </>
  );
}
