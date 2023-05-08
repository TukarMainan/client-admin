import { useState } from "react";
import { loginAdmin } from "../store/action/actionCreator";

export default function Login() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async e => {
    try {
      e.preventDefault();
      const res = await loginAdmin(login);
      console.log(res.message); // log the message if login is successful
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
                  for="Email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>

                <input
                  onChange={handleChange}
                  value={login.email}
                  required
                  type="email"
                  id="Email"
                  name="email"
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
