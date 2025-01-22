import { useContext, useState } from 'react';
import location from '../../assets/location.png'
import schedule from '../../assets/sched.png'
import Image from 'react-bootstrap/Image';
import { createBook } from '../../api/posts';
import { AppContext } from '../../contexts/AppContext';
import { format } from 'date-fns';


function Booknow() {
  const { booked, setBooked } = useContext(AppContext)
  
  const [code, setCode] = useState(null)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    location: '',
    schedule: '',
  })

  console.log(booked)
  
  const generateTransactionCode = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const codeLength = 12; // Length of the transaction code
    let code = '';
    for (let i = 0; i < codeLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      code += characters[randomIndex];
    }
    return code
  };

  const handleSubmit = (newBook) => {
    const id = booked.length
    ? String(Number(booked[booked.length - 1].id) + 1)
    : "1";
    const datetime = format(new Date(), "MMM dd, yyyy pp")
    const uniqueTransac = generateTransactionCode()

    const newItem = {
      id,
      ...newBook,
      datetime,
      transactionCode: uniqueTransac,
      serviceType: 'Wash, Dry, & Fold',
      deliveryDate: '3 Days',
      status: 'Pending'
    }
    setCode(uniqueTransac)
    createBook(newItem)
    setBooked([ ...booked, newItem ])
    setFormData({
      fullName: '',
      email: '',
      location: '',
      schedule: '',
    })
  }

  return (
    <>
    <form onSubmit={(e) => e.preventDefault()} className='z-10 space-y-4 font-["Poppins"] w-[388px]'>
      <div className='form-input-container'>
        <label htmlFor="fullname">Full name</label>
        <input 
          className='book-input'
          id='fullname' 
          type="text"
          placeholder='Full Name'
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          />
      </div>

      <div className='form-input-container'>
        <label htmlFor="email">Email</label>
        <input
          className='book-input'
          id='email' 
          type="text" 
          placeholder='example@email.com'
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
      </div>
      
      <div className='form-input-container relative'>
        <label htmlFor="location">Location</label>
        <input 
          className='book-input pr-[50px]'
          id='location'
          type="text" 
          placeholder='Province, City'
          value={formData.location}
          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
          />
        <button>
          <Image 
            className='w-[45px] absolute right-2 bottom-0'
            src={location} 
            />
        </button>
      </div>
      <div className='form-input-container relative'>
        <label htmlFor="location1">Pick-up Date</label>
        <input 
          className='book-input pr-[50px]'
          id='location1'
          type="text" 
          placeholder='Date and Time'
          value={formData.schedule}
          onChange={(e) => setFormData({ ...formData, schedule: e.target.value })}
          />
     
      </div>

     {/*  <div className='flex justify-between items-center my-4'>
        <button className='w-[309px] h-[48px] text-white bg-[#43625b] border-[#363636] border-1 rounded-lg shadow-[7px_5px_5px_0px_rgba(0,0,0,0.4)]'>
          Schedule Date
        </button>
        <Image
          className='w-[45px]'
          src={schedule}
          />
      </div> */}
      <div className='grid place-content-center'>
        <button onClick={() => handleSubmit(formData)} className='bg-[#0a58a2] w-[206px] h-[60px] rounded-full text-white text-[22px] font-light shadow-[7px_5px_8px_0px_rgba(0,0,0,0.4)]'>Book now</button>
      </div>
    </form>

    {code && (
      <div className='z-50 mt-[20px] bg-white p-2 rounded-md grid place-content-center'>
        <div>
          Your transaction Code: <b className='select-text'>{code}</b>
        </div>
      </div>
    )}
  
    </>
  )
}

export default Booknow