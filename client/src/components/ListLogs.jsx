export default function ListLogs({ data }) {
  return (
    <tr>
      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
        {data?.name}
      </td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
        {data?.description}
      </td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
        {data?.adminId}
      </td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
        {data?.timelogs}
      </td>
    </tr>
  );
}
