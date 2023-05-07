export default function ArchPost({ data }) {
  const handleSuspend = id => {
    console.log("id :", id);
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
          <button onClick={() => handleDetail(data?.id)}>View Detail</button>
          <button onClick={() => handleSuspend(data?.UserId)}>
            Suspend User
          </button>
        </td>
      </tr>
    </>
  );
}
