import { useContext } from "react"
import { Link, useParams } from "react-router-dom"
import { AppContext } from "../contexts/AppContext"

function ShowTransaction() {
  const { booked, setBooked } = useContext(AppContext)
  const { id } = useParams()
  const bookedItem = booked.find((book) => (book.id).toString() === id)

  return (
   <>
    {bookedItem && (
        <div className="w-[645px] font-['Poppins'] border-[#78CADC] rounded-lg z-30 h-[682px] border-[7px]">
        <p className=" grid place-content-center mt-[30px] text-[#0A58A2] text-[30px] font-semibold">Customer Booking Details</p>
        <div className="mx-4 space-y-4">
          <div className="flex text-[16px] space-x-4">
            <div>
              <p className="mb-2">Full name</p>
              <div className="bg-[#78CADC] h-[56px] grid place-content-center rounded-md w-[286px]">{bookedItem.fullName}</div>
            </div>
            <div>
              <p className="mb-2">Email</p>
              <div className="bg-[#78CADC] h-[56px] grid place-content-center rounded-md w-[286px]">{bookedItem.email}</div>
            </div>
          </div>
  
          <div className="flex text-[16px] space-x-4">
            <div>
              <p className="mb-2">Location</p>
              <div className="bg-[#78CADC] h-[56px] grid place-content-center rounded-md w-[286px]">{bookedItem.location}</div>
            </div>
            <div>
              <p className="mb-2">Service Type</p>
              <div className="bg-[#78CADC] h-[56px] grid place-content-center rounded-md w-[286px]">{bookedItem.serviceType}</div>
            </div>
          </div>
  
          <div className="flex text-[16px] space-x-4">
            <div>
              <p className="mb-2">Pick-up date</p>
              <div className="bg-[#78CADC] h-[56px] grid place-content-center rounded-md w-[286px]">{bookedItem.schedule}</div>
            </div>
            <div>
              <p className="mb-2">Delivery date</p>
              <div className="bg-[#78CADC] h-[56px] grid place-content-center rounded-md w-[286px]">{bookedItem.deliveryDate}</div>
            </div>
          </div>
  
          <div className="flex text-[16px] space-x-4">
            <div>
              <p className="mb-2">Transaction code</p>
              <div className="bg-[#78CADC] h-[56px] grid place-content-center rounded-md w-[286px]">{bookedItem.transactionCode}</div>
            </div>
            <div>
              <p className="mb-2">Status</p>
              <div className="bg-[#78CADC] h-[56px] grid place-content-center rounded-md w-[286px]">{bookedItem.status}</div>
            </div>
          </div>
  
          <div className="flex text-[16px] space-x-4">
            <div>
              <p className="mb-2">Total Amount</p>
              <div className="bg-[#78CADC] h-[56px] grid place-content-center rounded-md w-[286px]">Php 200.00</div>
            </div>
          </div>
          <div className="grid place-content-end">
            <div className="space-x-4">
              <Link to='/transaction'>
                <button className="bg-[#0A58A2] hover:bg-[#052e55] transition-all text-white font-semibold px-5 py-2 rounded-full">Back</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      )}
   </>
  )
}

export default ShowTransaction