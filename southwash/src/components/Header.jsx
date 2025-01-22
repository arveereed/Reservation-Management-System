import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import logo from '../assets/Logo.svg'
import admin from '../assets/admin.png'
import logoname from '../assets/logoname.png'
import { Link, useParams } from 'react-router-dom';
import { AppContext } from '../contexts/AppContext';
import { useContext } from 'react';

function Header() {
  const { token } = useContext(AppContext)
  const links = [
    {
      name: 'Transaction',
      where: '/transaction'
    }, 
    {
      name: 'About Us',
      where: '/about-us'
    },
    {
      name: 'Contact Us', 
      where: '/contact-us'
    },
    {
      name: 'FAqs',
      where: '/faqs'
    }
    
  ]
  const { home } = useParams()

  return (
    <Navbar className="bg-[#77CBFF] h-[78px] z-50 shadow-sm font-['Poppins']">
      <Container className='flex justify-between'>
        <Navbar.Brand>
          <div className='flex'>
            <div className='flex items-center'>
              {home && (
                <Image 
                  className='h-[66px]'
                  src={logo}
                />
              )}
              {token && (
                <Image 
                  className='h-[66px]'
                  src={logo}
                />
              )}
            </div>
            <Link to={`/home`}>
              <Image 
                className={`h-[180px] mr-2 ${home && 'mt-[15px]'}`}
                src={logoname}
              />
            </Link>
          </div>
        </Navbar.Brand>
        <Nav>
          {token && (
            <div className='flex justify-centers items-center space-x-4'>
              <div className='bg-[#21B7E2] rounded-full p-1 grid place-content-center'>
                <Image 
                  src={admin}
                  className='h-[40px] w-[40px]'
                />
              </div>
              <span className='font-semibold'>Admin -ArvsDev</span>
            </div>
          )}
          {!token && (
            <>
              {links.map((link, i) => (
                <div key={i} className={`grid px-2 h-[42px] place-content-center text-sm font-medium ${
                  i !== links.length - 1 ? 'border-r-[2px] border-[#42b0f5]' : ''
                }`}>
                  <div>
                    <Link to={link.where} className='no-underline'><span className='text-[#0A58A2] hover:text-[#114372] transition-all'>{link.name}</span></Link>
                  </div>
                </div>
              ))}
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header