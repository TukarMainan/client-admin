import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchCategories, addCategory } from "../store/action/actionCreator";
import CategoryList from "../components/CategoryList";

export default function Category() {
  const dispatch = useDispatch();

  const [category, setCategory] = useState({
    name: "",
  });

  const toaster = () => {
    return Toastify({
      text: "New category has been added",
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

  // trigger all categories
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  // fetch category
  const categories = useSelector(state => {
    return state.categoryReducer.categories;
  });

  // handle add
  const handleAdd = async e => {
    try {
      e.preventDefault();
      await dispatch(addCategory(category));
      await dispatch(fetchCategories());
      setCategory({ name: "" });
      toaster();
    } catch (err) {
      console.log("err :", err);
    }
  };

  //   handle change
  function handleChange(e) {
    // handle here
    const { name, value } = e.target;
    // console.log("value :", value);
    setCategory({
      //   ...category,
      [name]: value,
    });
  }

  return (
    <>
      <div className="h-screen m-12 bg-gradient-to-b mr-4 from-purple-100 to-white-500 rounded-3xl ">
        <h1 className="pt-12 pl-12 mb-12 text-2xl font-bold text-slate-700 sm:text-3xl md:text-4xl">
          Category List 🦖
        </h1>
        <div>
          <label
            for="small-input"
            className="block ml-24 mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Add category
          </label>
          <input
            value={category.name}
            onChange={handleChange}
            name="name"
            type="text"
            id="small-input"
            className=" p-2 w-1/6 ml-24 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <button
          onClick={handleAdd}
          className="ml-24 mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Add
        </button>
        <table className="mx-24 mt-4 w-3/6 divide-y-2 divide-gray-200 rounded-xl bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Category ID
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Name
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Action
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {/* {postData.map(data => {
            return <ListHome key={data.id} data={data} />;
          })} */}
            {categories.map(data => {
              return <CategoryList key={data.id} data={data} />;
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
