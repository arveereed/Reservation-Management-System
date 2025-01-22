import { Link, useParams } from 'react-router-dom';
import logo from '../assets/Logo.svg'
import left from '../assets/arrowleft.svg'
import right from '../assets/arrowright.svg'

import Image from 'react-bootstrap/Image';
import ImageCard from '../components/ImageCard';
import { useContext, useState } from 'react';
import { AppContext } from '../contexts/AppContext';

function Home() {
  const { home } = useParams()
  const { posts} = useContext(AppContext)

  const [currentPage, setCurrentPage] = useState(1)
  const recordsPerPage = 3
  const lastIndex = currentPage * recordsPerPage
  const firstIndex = lastIndex - recordsPerPage
  const totalPages = Math.ceil(posts.length / recordsPerPage); // Calculate total pages
  const records = posts.slice(firstIndex, lastIndex)

  return (
    <>
      <div className='flex flex-col place-content-center'>
        {!home ? (
          <>
            <Image
              className='ml-[30px] mb-14 z-10'
              src={logo}
            />
            <div className='flex place-content-center'>
              <Link to='/home'  className='z-10'>
                <button className='bg-[#0A58A2] h-[55px] w-[206px] rounded-full  text-white text-xl font-light shadow-[10px_9px_5px_5px_rgba(0,0,0,0.4)]'>Get started</button>
              </Link>
            </div>
          </>
        ) : (
          <div className="flex gap-4 z-20">
            <div className="flex flex-col place-content-center">
              <button 
                disabled={currentPage == 1}
                onClick={() => setCurrentPage(prev => prev - 1)}
                className={`${currentPage == 1 ? "bg-[#063c6e]" : 'bg-[#0A58A2]'} w-[70.88px] h-[71.01px] rounded-full grid place-content-center shadow-[7px_5px_8px_0px_rgba(0,0,0,0.4)]`}>
                <img className='w-[27.38px] h-[36px] mr-1' src={left} alt="" />
              </button>
            </div>
            <div className='space-y-4'>
            {records.map(post => (
              <ImageCard 
                key={post.id}
                id={post.id}
                title={post.title}
                description={post.description}
                images={post.images}
                datetime={post.datetime}
              />
            ))}
            </div>
            <div className="flex flex-col place-content-center">
              <button 
                disabled={currentPage == totalPages}
                onClick={() => setCurrentPage(prev => prev + 1)}
                className={`${currentPage == totalPages ? "bg-[#063c6e]" : 'bg-[#0A58A2]'} w-[70.88px] h-[71.01px] rounded-full grid place-content-center shadow-[7px_5px_8px_0px_rgba(0,0,0,0.4)]`}>
                <img className='ml-1 w-[27.38px] h-[36px]' src={right} alt="" />
              </button>
            </div>
          </div>
        )}
      </div>
      {home && (
        <Link to='/home/book-now'>
          <button className='bg-[#0A58A2] w-[165px] h-[47px] text-white rounded-full text-[24px] font-light flex justify-center absolute right-20 bottom-[90px] shadow-[7px_5px_8px_0px_rgba(0,0,0,0.4)] z-30'>
          <span className='mt-[3px]'>Book now</span>
        </button>
        </Link>
        
      )}
    </>
  )
}

export default Home