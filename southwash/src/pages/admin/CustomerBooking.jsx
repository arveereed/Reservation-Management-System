import { useContext } from "react"
import { AppContext } from '../../contexts/AppContext'
import { Link } from "react-router-dom"

export const CustomerBooking = () => {
  const { booked } = useContext(AppContext)
  
  console.log(booked)

  return (
    <div className="z-50 mr-[278px] mt-[30px] absolute top-0 left-[70px]">
      <p className="font-bold text-[#0A58A2] mb-4">BOOKING STATUS</p>
      <div>
      {booked && (
        <div class="shadow-md">
          <div className="bg-[#21B7E2] flex space-x-[70px] font-bold px-4 py-2">
            <div className="w-[200px] py-2">Customer Name</div>
            <div className="w-[100px] py-2">Service Type</div>
            <div className="w-[130px] py-2">Amount Status</div>
            <div className="w-[100px] py-2">Pick-up Date</div>
            <div className="w-[130px] py-2">Delivery Date</div>
            <div className="w-[100px] py-2">Status</div>
          </div>
          {booked.map((item, index) => (
            <div 
              key={item.id}
              className={`flex space-x-[70px] px-4 py-2 ${index % 2 === 0 ? 'bg-[#8BE5FF]' : 'bg-white'}`}
            >
              <div className="w-[200px] py-2">{item.fullName}</div>
              <div className="w-[100px] py-2 whitespace-nowrap">{item.serviceType}</div>
              <div className="w-[130px] py-2">₱200.00 /7kg</div>
              <div className="w-[100px] py-2">{item.schedule}</div>
            <div className="w-[130px] py-2">3 days</div>
            <div className="w-[100px] py-2">
                <Link 
                  to={`/customer-booking/${item.id}`}
                  className="no-underline"
                >
                  {item.status == 'Pending' && (
                    <span className="bg-white px-3 py-1 rounded-full text-red-500 font-semibold">{item.status}</span>
                  )}
                  {item.status == 'Delivered' && (
                    <span className="bg-white px-3 py-1 rounded-full text-green-500 font-semibold">{item.status}</span>
                  )}
                  {item.status == 'Canceled' && (
                    <span className="bg-white px-3 py-1 rounded-full text-red-600 font-semibold">{item.status}</span>
                  )}
                </Link>
              </div>
            </div>
          ))}
          <div className="h-[50px] w-full bg-[#21B7E2]"></div>
        </div>
      )}
      </div>
    </div>
  )
}
