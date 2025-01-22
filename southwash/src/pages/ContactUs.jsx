import Image from 'react-bootstrap/Image';
import phone from '../assets/phone.png'
import email from '../assets/email.png'
import cloca from '../assets/cloca.png'
import fb from '../assets/fb.png'
import ig from '../assets/ig.png'
import tweet from '../assets/tweet.png'

function ContactUs() {
  return (
    <div className="bg-[#CFFAFE] mb-[30px] w-[553px] z-30 p-5 rounded-lg">
      <p className="font-semibold text-[32px] text-[#0A58A2] grid place-content-center">Contact Information</p>
      <div className='mt-[100px] ml-[110px] space-y-4 text-[23px] text-[#6D7278]'>
        <div className='flex items-center space-x-4'>
          <Image 
            src={phone}
          />
          <span>+639 3456 989</span>
        </div>
        <div className='flex items-center space-x-4'>
          <Image 
            src={email}
          />
          <span>southwash@gmail.com</span>
        </div>
        <div className='flex items-center space-x-4'>
          <Image 
            src={cloca}
          />
          <span>Carmona, Cavite</span>
        </div>
      </div>
      <div className='flex  mt-[100px] justify-center items-center space-x-4'>
        <div className='bg-[#0076BF] grid place-content-center rounded-full h-[40px] w-[40px]'>
          <Image 
            src={tweet}
          />
        </div>
        <Image 
          src={ig}
          className='h-[34px] w-[34px]'
        />
        <Image 
          src={fb}
        />
      </div>
    </div>
  )
}

export default ContactUs