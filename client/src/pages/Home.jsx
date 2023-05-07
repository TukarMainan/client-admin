import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchPosts } from "../store/action/actionCreator";

export default function Home() {
  const dispatch = useDispatch();

  // trigger all post
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  // fetch totalPosts
  const postData = useSelector(state => {
    return state.postReducer.posts;
  });
  // fetch totalUser
  const userData = useSelector(state => {
    return state.userReducer.users;
  });

  // fetch blockedUser
  const blockedUser = userData.filter(user => user.status == "blocked");
  return (
    <>
      <div className="bg-gradient-to-b from-purple-100 to-white-500 rounded-3xl m-6">
        <h1 className="pt-12 pl-12 mb-12 text-2xl font-bold text-slate-700 sm:text-3xl md:text-4xl">
          Welcome to TukarMainan 🦖 CMS admin
        </h1>
        <div className="mr-12 ml-6 rounded-lg  grid grid-cols-3 gap-5 m-18 p-6">
          {/* first card */}
          <a
            href="#"
            class="group  flex flex-col justify-between rounded-sm bg-white p-4 shadow-xl transition-shadow hover:shadow-lg sm:p-6 lg:p-8"
          >
            <div>
              <h3 class="text-3xl font-bold text-purple-600 sm:text-5xl">
                {postData.length}
              </h3>

              <div class="mt-4 border-t-2 border-gray-100 pt-4">
                <p class="text-sm font-medium uppercase text-gray-600">
                  Total Posts
                </p>
              </div>
            </div>

            <div class="mt-8 inline-flex items-center gap-2 text-purple-600 sm:mt-12 lg:mt-16">
              <p class="font-medium sm:text-lg">See details</p>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 transition-all group-hover:ms-3 rtl:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </a>
          {/* second card */}

          <a
            href="#"
            class="group  flex flex-col justify-between rounded-sm bg-white p-4 shadow-xl transition-shadow hover:shadow-lg sm:p-6 lg:p-8"
          >
            <div>
              <h3 class="text-3xl font-bold text-purple-600 sm:text-5xl">
                {userData.length}
              </h3>

              <div class="mt-4 border-t-2 border-gray-100 pt-4">
                <p class="text-sm font-medium uppercase text-gray-600">user</p>
              </div>
            </div>

            <div class="mt-8 inline-flex items-center gap-2 text-purple-600 sm:mt-12 lg:mt-16">
              <p class="font-medium sm:text-lg">See details</p>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 transition-all group-hover:ms-3 rtl:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </a>

          {/* third card */}

          <a
            href="#"
            class="group flex flex-col justify-between rounded-sm bg-white p-4 shadow-xl transition-shadow hover:shadow-lg sm:p-6 lg:p-8"
          >
            <div>
              <h3 class="text-3xl font-bold text-purple-600 sm:text-5xl">
                {blockedUser.length}
              </h3>

              <div class="mt-4 border-t-2 border-gray-100 pt-4">
                <p class="text-sm font-medium uppercase text-gray-600">
                  blocked profiles
                </p>
              </div>
            </div>

            <div class="mt-8 inline-flex items-center gap-2 text-purple-600 sm:mt-12 lg:mt-16">
              <p class="font-medium sm:text-lg">See details</p>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 transition-all group-hover:ms-3 rtl:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
