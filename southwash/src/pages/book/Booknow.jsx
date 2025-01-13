import location from '../../assets/location.png'
import schedule from '../../assets/sched.png'
import Image from 'react-bootstrap/Image';

function Booknow() {
  return (
    <form action="" className='z-10 space-y-4 font-["Poppins"] w-[388px]'>
      <div className='form-input-container'>
        <label htmlFor="fullname">Full name</label>
        <input 
          className='book-input'
          id='fullname' 
          type="text"
          placeholder='Full Name'
        />
      </div>

      <div className='form-input-container'>
        <label htmlFor="email">Email</label>
        <input
          className='book-input'
          id='email' 
          type="text" 
          placeholder='example@email.com'
        />
      </div>
      
      <div className='form-input-container relative'>
        <label htmlFor="location">Location</label>
        <input 
          className='book-input pr-[50px]'
          id='location'
          type="text" 
          placeholder='Province, City'
        />
        <button>
          <Image 
            className='w-[45px] absolute right-2 bottom-0'
            src={location} 
          />
        </button>
      </div>

      <div className='flex justify-between items-center my-4'>
        <button className='w-[309px] h-[48px] text-white bg-[#43625b] border-[#363636] border-1 rounded-lg shadow-[7px_5px_5px_0px_rgba(0,0,0,0.4)]'>
          Schedule Date
        </button>
        <Image
          className='w-[45px]'
          src={schedule}
        />
      </div>
      <div className='grid place-content-center'>
        <button className='bg-[#0a58a2] w-[206px] h-[60px] rounded-full text-white text-[22px] font-light shadow-[7px_5px_8px_0px_rgba(0,0,0,0.4)]'>Proceed</button>
      </div>
    </form>
  )
}

export default Booknow