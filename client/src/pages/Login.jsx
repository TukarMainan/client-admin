import { useState } from "react";
import { loginAdmin } from "../store/action/actionCreator";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

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

  const handleLogin = async e => {
    try {
      e.preventDefault();
      const res = await dispatch(loginAdmin(login));
      console.log("res :", res);

      if (!res) {
        toaster(`Wrong password`);
        setLogin({ username: "", password: "" });
      }

      if (res.access_token) {
        localStorage.access_token = res.access_token;
        localStorage.id = res.id;
        toaster(`Welcome again ${res.username}`);
        navigate("/");
      }
    } catch (err) {
      console.log(err); // log the error if login fails
    }
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setLogin(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt="Pattern"
            src="https://playfulnotes.com/wp-content/uploads/teaching-toddlers-to-share-2.png"
            className="absolute inset-0 h-full w-full object-cover rounded-3xl"
          />
        </aside>

        <main
          aria-label="Main"
          className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
        >
          <div className="max-w-xl lg:max-w-3xl">
            <a className="block text-blue-600" href="/">
              <span className="sr-only">Home</span>
              <img
                className="object-scale-down h-20 w-20"
                src="../src/assets/logo.png"
              />
            </a>

            <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Login to TukarMainan 🚗
            </h1>

            {/* <p className="mt-4 leading-relaxed text-gray-500">This</p> */}

            <form action="#" className="mt-8 grid grid-cols-6 gap-6">
              <div className="col-span-6">
                <label
                  for="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Username
                </label>

                <input
                  onChange={handleChange}
                  value={login.username}
                  required
                  type="username"
                  id="username"
                  name="username"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  for="Password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>

                <input
                  onChange={handleChange}
                  value={login.password}
                  required
                  type="password"
                  id="Password"
                  name="password"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button
                  onClick={e => handleLogin(e)}
                  className="inline-block shrink-0 rounded-md border border-purple-600 bg-purple-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
}
