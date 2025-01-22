import { useContext, useEffect, useState } from "react";
import { AppContext } from "../contexts/AppContext";
import { Link } from "react-router-dom";

function Transaction() {
  const { booked } = useContext(AppContext);

  const [search, setSearch] = useState("");
  const [item, setItem] = useState(null);

  useEffect(() => {
    if (search === "") {
      setItem(null); // Clear item when search is empty
      return;
    }

    const filteredItem = booked?.find((book) => book.transactionCode === search);

    if (filteredItem) {
      setItem(filteredItem); // Update item if a match is found
    } else {
      setItem(null); // Clear item if no match
    }
  }, [search, booked]);

  return (
    <div className="min-h-[93vh] z-50">
      <input
        className="px-4 py-2 text-[18px] w-[400px] rounded-md outline-none"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Enter your transaction code"
      />

      {/* Table Header */}
      <div className="bg-[#21B7E2] flex space-x-[70px] font-bold px-4 py-2 mt-[30px]">
        <div className="w-[130px] py-2">Customer Name</div>
        <div className="w-[100px] py-2">Service Type</div>
        <div className="w-[130px] py-2">Amount Status</div>
        <div className="w-[100px] py-2">Pick-up Date</div>
        <div className="w-[80px] whitespace-nowrap py-2">Delivery Date</div>
        <div className="w-[100px] py-2">Status</div>
      </div>

      {/* Display the matched item */}
      {item ? (
        <div className="flex space-x-[70px] px-4 py-2 bg-[#8BE5FF]">
          <div className="w-[130px] py-2">{item.fullName}</div>
          <div className="w-[100px] py-2 whitespace-nowrap">{item.serviceType}</div>
          <div className="w-[130px] py-2">{item.amountStatus}</div>
          <div className="w-[100px] py-2">{item.schedule}</div>
          <div className="w-[80px] whitespace-nowrap py-2">{item.deliveryDate}</div>
          <div className="w-[100px] py-2">
            <Link to={`/customer-booking/${item.id}`} className="no-underline">
              {item.status === "Pending" && (
                <span className="bg-white px-3 py-1 rounded-full text-red-500 font-semibold">{item.status}</span>
              )}
              {item.status === "Delivered" && (
                <span className="bg-white px-3 py-1 rounded-full text-green-500 font-semibold">{item.status}</span>
              )}
              {item.status === "Canceled" && (
                <span className="bg-white px-3 py-1 rounded-full text-red-600 font-semibold">{item.status}</span>
              )}
            </Link>
          </div>
        </div>
      ) : (
        search && (
          <div className="px-4 py-2 mt-5 text-red-500 font-semibold">
            No transaction found with the code "{search}".
          </div>
        )
      )}
    </div>
  );
}

export default Transaction;
