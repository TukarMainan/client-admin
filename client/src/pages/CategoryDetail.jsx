import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchOneCategory } from "../store/action/actionCreator";
import { useState } from "react";
import Toastify from "toastify-js";
import { updateCategory } from "../store/action/actionCreator";

export default function CategoryDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState();

  useEffect(() => {
    const fetchCategoryDetail = async () => {
      try {
        await dispatch(fetchOneCategory(id));
      } catch (err) {
        console.log("err :", err);
      }
    };
    fetchCategoryDetail();
  }, []);

  const category = useSelector(state => {
    return state.oneCategoryReducer.category;
  });

  if (!category) {
    return <div>Loading...</div>;
  }

  //   handle change
  const handleChange = e => {
    const { name, value } = e.target;
    // console.log("name, value :", name, value);
    setName({
      [name]: value,
    });
  };

  // toaster
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

  // handle submit
  const handleAdd = async e => {
    try {
      e.preventDefault();
      await dispatch(updateCategory(id, name));
      toaster(`Category name has changed into ${name.name}`);
      navigate("/category");
    } catch (err) {
      console.log("err :", err);
    }
  };

  return (
    <>
      <div className=" bg-gradient-to-b mr-4 from-purple-100 to-white-500 rounded-3xl ">
        <h1 className="pt-12 ml-12 pl-12 mb-12 text-2xl font-bold text-slate-700 sm:text-3xl md:text-4xl">
          Edit category name for : <i>{category.name}</i>
        </h1>
        <div>
          <label
            for="small-input"
            className="block ml-24 mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Enter new name
          </label>
          <input
            // value={category.name}
            onChange={handleChange}
            name="name"
            type="text"
            id="small-input"
            className=" p-2 w-1/6 ml-24 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <button
          onClick={handleAdd}
          className="ml-24 mt-4 text-white bg-purple-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Change
        </button>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#9333ea"
            fill-opacity="0.75"
            d="M0,64L80,101.3C160,139,320,213,480,202.7C640,192,800,96,960,101.3C1120,107,1280,213,1360,266.7L1440,320L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </>
  );
}
