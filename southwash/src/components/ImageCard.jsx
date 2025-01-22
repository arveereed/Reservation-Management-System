import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import userProfile from '../assets/me.jpg'
import dots from '../assets/dots.png'
import { useContext, useEffect, useRef, useState } from 'react';
import { AppContext } from '../contexts/AppContext';
import { Link } from 'react-router-dom';

function ImageCard({ title, description, images, datetime, id }) {
  const { handleDelete, token } = useContext(AppContext)

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  return (
    <Card className='w-[607px] relative shadow-[3px_3px_10px_2px_rgba(0,0,0,0.4)]' style={{ height: "214px" }}>
      <Card.Body className='flex'>
        <div ref={dropdownRef} className=''>
          {token && (
            <button 
            onClick={toggleDropdown} 
            className='z-50 rounded-full absolute h-[10px] top-1 right-1'
          >
            <img
              className='z-50'
              src={dots}
              />
          </button>
          )}
          {isOpen && (
            <div
            className="absolute right-[-140px] w-[150px] bg-[#77CBFF] rounded-md shadow-lg z-50"
            style={{ animation: "fadeIn 0.2s ease-in-out" }}
          >
            <div className='h-[40px] grid items-center justify-center pt-2 transition-all hover:text-white hover:bg-[#0A58A2]'>
              <Link to={`/edit-post/${id}`}><button className='hover:text-white'>Edit post</button></Link>
            </div>
            <div className='bg-[#77CBFF] h-[40px] grid transition-all items-center justify-center hover:text-white  hover:bg-[#0A58A2]'>
              <button onClick={() => handleDelete(id)}>Delete post</button>
            </div>
            </div>
          )}
        </div>
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
                <p className='mb-0 text-[11px] text-gray-700'>{datetime}</p>
              </div>
            </div>
          </div>
          <p className='text-[13px] font-bold mb-[5px] mt-[5px] font-["Poppins"]'>{title}</p>
          <div className='flex text-[11px] w-[280px] h-[17px]'>
            <div className='mr-2 pr-2 border-r-2 border-gray-300'>Fast service</div>
            <div className='mr-2 pr-2 border-r-2 border-gray-300'>Fresh results</div>
            <div className='pr-2 border-r-2 border-gray-300'>Hassle-free</div>
            <div className='ml-2'>Dry, Wash</div>
          </div>
          <div className='text-[13px] mt-2 h-[78px] '>
            {description}
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