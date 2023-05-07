import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchDetail } from "../store/action/actionCreator";

export default function Detail() {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPostDetail = async () => {
      try {
        await dispatch(fetchDetail(id));
      } catch (error) {
        console.log("Error fetching post detail: ", error);
      }
    };
    fetchPostDetail();
  }, [dispatch, id]);

  const post = useSelector(state => {
    return state.detailReducer.detail;
  });

  console.log("post :", post);
  return (
    <>
      <section>
        <div className="bg-gradient-to-b from-purple-100 to-white-500 rounded-3xl relative mx-auto max-w-screen-xl px-4 py-8">
          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
              {post && post.images && (
                <>
                  <img
                    alt="Les Paul"
                    src={`${post?.images[0]}`}
                    className="aspect-square w-full rounded-xl object-cover"
                  />
                </>
              )}

              <div className="grid grid-cols-2 gap-4 lg:mt-4">
                {post?.images?.map((data, i) => {
                  if (i > 0) {
                    return (
                      <img
                        alt="Les Paul"
                        src={`${data}`}
                        className="aspect-square w-full rounded-xl object-cover"
                      />
                    );
                  }
                })}
              </div>
            </div>

            <div className="sticky top-0">
              <strong className="rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600">
                In report
              </strong>

              <div className="mt-8 flex justify-between">
                <div className="max-w-[35ch] space-y-2">
                  <h1 className="text-xl font-bold sm:text-2xl">
                    {post?.title}
                  </h1>

                  <p className="text-sm">Condition : {post?.condition}</p>
                </div>

                <p className="text-lg font-bold">
                  Estimated price: {post?.price}
                </p>
              </div>

              <div className="mt-4">
                <div className="prose max-w-none">
                  <p>{post?.description}</p>
                </div>
              </div>

              <form className="mt-8">
                <div className="mt-8 flex gap-4">
                  <button
                    type="submit"
                    className="block rounded bg-purple-700 px-5 py-3 text-xs font-medium text-white hover:bg-purple-900"
                  >
                    Archieve
                  </button>
                  <button
                    type="submit"
                    className="block rounded bg-purple-700 px-5 py-3 text-xs font-medium text-white hover:bg-purple-900"
                  >
                    Suspend
                  </button>
                  <button
                    type="submit"
                    className="block rounded bg-slate-400 px-5 py-3 text-xs font-medium text-white hover:bg-slate-800"
                  >
                    Back
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
