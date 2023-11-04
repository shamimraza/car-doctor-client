const BookingRow = ({ booking, handleDelete, handleConform }) => {
  const { status, _id, customerName, email, date, service, price, img } =
    booking;
  console.log(booking);
  return (
    <tr>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-circle btn-outline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="avatar">
          <div className="w-24 mask mask-hexagon">
            <img src={img} />
          </div>
        </div>
      </td>
      <td>{service}</td>
      <td>{date}</td>
      <td>{email}</td>
      <td> {"$ " + price}</td>
      <th>price {price}</th>
      <th>
        {status === "confirm" ? (
          <span className="text-primary font-bold"> confirm</span>
        ) : (
          <button
            onClick={() => handleConform(_id)}
            className="btn btn-ghost btn-xs"
          >
            Please Conform
          </button>
        )}
      </th>
    </tr>
  );
};

export default BookingRow;
