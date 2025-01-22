import Image from 'react-bootstrap/Image';
import wasing from '../assets/about.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AboutUs() {
  return (
    <Container className='z-50 font-["Poppins"]'>
      <Row>
        <Col md={6} sm={12}>
          <Image className='wasingimg object-cover h-[400px] rounded-2xl shadow-md' src={wasing}/>
        </Col>
        <Col md={6} sm={12}>
          <h1 style={{color: '#0A58A2', fontSize: '4rem', textShadow: '0px 4px 5px rgba(0, 0, 0, 0.3)'  }}>About Us</h1>
          <p style={{paddingRight: '200px'}}>
          Welcome to Southwash Laundry Shop , where we take pride in providing reliable, high-quality laundry services to our community. Since [Year Established], our mission has been to make your laundry day as convenient and stress-free as possible. We offer a variety of services, including wash and fold, dry cleaning, ironing, and specialty care for delicate fabrics.
          </p>
          <p style={{paddingRight: '200px'}}>
          With a focus on customer satisfaction and using eco-friendly practices, we strive to deliver exceptional results every time. Our experienced staff and convenient location make it easy for you to trust us with your laundry needs.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
export default AboutUs;