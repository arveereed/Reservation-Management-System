import { useContext, useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { AppContext } from "../../contexts/AppContext"
import { editBook } from "../../api/posts"

function Booked() {
  const { booked, setBooked } = useContext(AppContext)
  const { id } = useParams()
  const bookedItem = booked.find((book) => (book.id).toString() === id)
  const navigate = useNavigate()
  
  const [formData, setFormData] = useState({
    deliveryDate: '',
    status: ''
  })

  useEffect(() => {
    if (bookedItem) {
      setFormData({
        deliveryDate: bookedItem.deliveryDate,
        status: bookedItem.status
      })
    }
  }, [bookedItem])

  const handleSubmit = async (id, formData) => {
    const updatedBook = {
      ...bookedItem,
      ...formData
    }

    const data = await editBook(id, updatedBook)
    setBooked(booked.map((book) => (book.id === id ? { ...data } : book)))
    navigate('/customer-booking')
  }

  return (
    <>
      {bookedItem && (
        <div className="w-[645px] font-['Poppins'] mr-[278px] border-[#78CADC] rounded-lg z-30 h-[682px] border-[7px]">
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
              <input 
                value={formData.deliveryDate}
                onChange={(e) => setFormData({ ...formData, deliveryDate: e.target.value })}
                className="bg-[#5c9ba9] h-[56px] outline-none pl-6 grid place-content-center rounded-md w-[286px]"
              />
            </div>
          </div>
  
          <div className="flex text-[16px] space-x-4">
            <div>
              <p className="mb-2">Transaction code</p>
              <div className="bg-[#78CADC] h-[56px] grid place-content-center rounded-md w-[286px]">{bookedItem.transactionCode}</div>
            </div>
            <div>
              <p className="mb-2">Status</p>
              <select
                value={formData.status}
                onChange={(e) =>
                  setFormData({ ...formData, status: e.target.value })
                }
                className="bg-[#5c9ba9] transition-all h-[56px] pl-4 text-white font-medium rounded-md w-[286px] outline-none"
              >
                <option value="Pending">Pending</option>
                <option value="Canceled">Canceled</option>
                <option value="Delivered">Delivered</option>
              </select>
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
              <Link to='/customer-booking'>
                <button className="bg-[#c9b1b3] hover:bg-[#7c6d6e] transition-all text-black font-semibold px-5 py-2 rounded-full">Cancel</button>
              </Link>
              <button onClick={() => handleSubmit(id, formData)} className="bg-[#0A58A2] hover:bg-[#063c6e] transition-all text-white font-semibold px-5 py-2 rounded-full">Save</button>
            </div>
          </div>
        </div>
      </div>
      )}
    </>
  )
}

export default Booked