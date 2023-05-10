import { useDispatch } from "react-redux";
import { useState } from "react";
import { updateStatusPost } from "../store/action/actionCreator";
import { Link } from "react-router-dom";

export default function ListHome({ data }) {
  const dispatch = useDispatch();

  // handleChange
  const handleChange = id => {
    dispatch(updateStatusPost(id));
    toaster("Post has been archived");
  };

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

  return (
    <>
      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          <Link to={`/detail/${data?.id}`}>{data?.title}</Link>
        </td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
          {/* {data?.description} */}
        </td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
          {data?.User?.username}
        </td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
          {data?.createdAt}
        </td>
        <td className="whitespace-nowrap px-4 py-2 ">
          <select
            name="status"
            onChange={() => handleChange(data?.id)}
            id="status"
            defaultValue={data?.status}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            {/* <option selected>Choose a country</option> */}
            <option value="active" disabled>
              Active
            </option>
            <option value="inactive" disabled>
              Inactive
            </option>
            <option value="complete" disabled>
              Complete
            </option>
            <option value="archive">Archive</option>
          </select>
        </td>
      </tr>
    </>
  );
}
