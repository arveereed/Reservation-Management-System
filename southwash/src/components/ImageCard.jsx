import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import userProfile from '../assets/me.jpg'

function ImageCard() {
  return (
    <Card className='w-[607px] shadow-[3px_3px_10px_2px_rgba(0,0,0,0.4)]' style={{ height: "214px" }}>
      <Card.Body className='flex'>
        <div className='w-[370px]'>
          <div className="flex h-[49px] gap-4">
            <div className="h-full flex items-center">
              <Image 
                className="bg-gray-500 w-[30px] h-[30px]"
                src={userProfile} 
                roundedCircle 
              />
            </div>
            <div className='flex flex-col justify-center'>
              <div className='font-["Poppins"]'>
                <p className='mb-0 font-medium text-[15px]'>Southwash Laundry Shop</p>
                <p className='mb-0 text-[11px] text-gray-700'>Posted October 2 at 9:13PM</p>
              </div>
            </div>
          </div>
          <p className='text-[13px] font-bold mb-[5px] mt-[5px] font-["Poppins"]'>WE'RE OPEN  [max 66 characters]</p>
          <div className='flex text-[11px] w-[280px] h-[17px]'>
            <div className='mr-2 pr-2 border-r-2 border-gray-300'>Fast service</div>
            <div className='mr-2 pr-2 border-r-2 border-gray-300'>Fresh results</div>
            <div className='pr-2 border-r-2 border-gray-300'>Hassle-free</div>
            <div className='ml-2'>Dry, Wash</div>
          </div>
          <div className='text-[13px] mt-2 h-[78px] '>
            Wash now! We pick up and deliver Carmona & Biñan areas
            <br></br>
            <br></br>
            #LaundryDay #HassleFreeLaundry #CleanAndFresh
            #SouthwashLaundryShop
          </div>
        </div>
        <div className='w-[205px] h-[181] flex'>
          <div className='w-[124px] h-[181px] border-r-2'>
            <img 
              className='h-full w-full object-cover'
              src={userProfile} 
              alt="image" 
            />
          </div>
          <div>
            <div className='w-[81px] h-[101px] relative'>.
              <img 
                className='h-full w-full object-cover absolute top-0'
                src={userProfile} 
                alt="image" 
              />
            </div>
            <div className='w-[81px] h-[80px] border-t-2'>
              <img 
                className='h-full w-full object-cover'
                src={userProfile} 
                alt="image" 
              />
            </div>
          </div>
        </div>        
      </Card.Body>
    </Card>
  )
}

export default ImageCard