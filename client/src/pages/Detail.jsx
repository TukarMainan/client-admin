import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchDetail } from "../store/action/actionCreator";
import { updateStatusPost, banUser } from "../store/action/actionCreator";
import toaster from "../store/action/toaster";

export default function Detail() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

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
  const handleArchive = (id, e) => {
    e.preventDefault();
    dispatch(updateStatusPost(id));
    toaster("Post has been archived");
    navigate("/reported");
  };

  const handleSuspend = async (id, e) => {
    try {
      e.preventDefault();
      const res = await dispatch(banUser(id));
      console.log("res :", res);
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
                Report open
              </strong>

              <div className="mt-8 flex justify-between">
                <div className="max-w-[35ch] space-y-2">
                  <h1 className="text-xl font-bold sm:text-2xl">
                    {post?.title}
                  </h1>

                  <p className="text-sm">Condition : {post?.condition}</p>
                </div>

                <p className="text-lg font-bold">
                  Estimated price: {post?.price} IDR
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
                    onClick={e => handleArchive(`${post?.id}`, e)}
                    type="submit"
                    className="block rounded bg-red-500 px-5 py-3 text-xs font-medium text-white hover:bg-red-600"
                  >
                    Archive Post
                  </button>
                  <button
                    onClick={e => handleSuspend(`${post?.UserId}`, e)} //mestinya post?.User?.id
                    type="submit"
                    className="block rounded bg-red-600 px-5 py-3 text-xs font-medium text-white hover:bg-red-800"
                  >
                    Suspend User
                  </button>
                  {/* <button
                    onClick={() => navigate("/reported")} //mestinya post?.User?.id
                    type="submit"
                    className="block rounded bg-slate-500 px-5 py-3 text-xs font-medium text-white hover:bg-red-800"
                  >
                    Back
                  </button> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
