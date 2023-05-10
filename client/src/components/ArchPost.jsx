import { useDispatch, useSelector } from "react-redux";
import { banUser } from "../store/action/actionCreator";
import toaster from "../store/action/toaster";
import { Link } from "react-router-dom";

export default function ArchPost({ data }) {
  const dispatch = useDispatch();

  const toaster = msg => {
    return Toastify({
      text: msg,
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #9333EA, #9333EA)",
      },
      onClick: function () {}, // Callback after click
    }).showToast();
  };

  const handleSuspend = async (id, e) => {
    try {
      e.preventDefault();
      const res = await dispatch(banUser(id));
      if (!res) {
        toaster("Suspending error");
      }

      if (res.message) {
        toaster(res.message);
        navigate("/archieve");
      }
    } catch (err) {
      console.log("err :", err);
    }
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
        {/* <td className="whitespace-nowrap px-4 py-2 text-gray-700">
          {data?.description}
        </td> */}
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
          Username: {data?.User?.name}
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
          <button onClick={e => handleSuspend(data?.UserId, e)}>
            Suspend User
          </button>
        </td>
      </tr>
    </>
  );
}
