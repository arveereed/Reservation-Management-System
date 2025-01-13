import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import logo from '../assets/Logo.svg'
import logoname from '../assets/logoname.png'
import { useParams } from 'react-router-dom';

function Header() {
  const links = ['About Us', 'How it works', 'Services', 'Contact Us', 'FAqs']
  const { home } = useParams()

  return (
    <Navbar className="bg-[#77CBFF] h-[78px] shadow-sm font-['Poppins']">
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
            </div>
            <div>
              <Image 
                className={`h-[180px] mr-2 ${home && 'mt-[15px]'}`}
                src={logoname}
              />
            </div>
          </div>
        </Navbar.Brand>
        <Nav>
          {links.map((link, i) => (
            <div key={i} className={`grid px-2 h-[42px] place-content-center text-sm font-medium ${
              i !== links.length - 1 ? 'border-r-[2px] border-[#42b0f5]' : ''
            }`}>
              <div>
                <Nav.Link><span className='text-[#0A58A2] hover:text-[#114372] transition-all'>{link}</span></Nav.Link>
              </div>
            </div>
          ))}
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header