import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import '../index.css';

function Faqs() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleToggle = (key) => {
    setActiveAccordion((prevKey) => (prevKey === key ? null : key));
  };

  return (
    <div className="container-fluid px-3 py-5 z-50 d-flex justify-content-center my-5 font-['Poppins']">
      <div style={{ maxWidth: '800px', width: '100%' }}>
        <Accordion activeKey={activeAccordion}>
          <Accordion.Item eventKey="0" className="accItem">
            <Accordion.Header onClick={() => handleToggle('0')} className='w-[800px]'>
              How do I schedule a pick-up?
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <br />
        <Accordion activeKey={activeAccordion}>
          <Accordion.Item eventKey="1" className="accItem">
            <Accordion.Header onClick={() => handleToggle('1')}>
              Do you handle delicate fabrics or special garments?
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <br />
        <Accordion activeKey={activeAccordion}>
          <Accordion.Item eventKey="2" className="accItem">
            <Accordion.Header onClick={() => handleToggle('2')}>
              What should I do if an item is damaged or lost?
            </Accordion.Header>
            <Accordion.Body>
              If an item is damaged or lost, please reach out to customer service
              within 24 hours to file a claim and resolve the issue.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <br />
        <Accordion activeKey={activeAccordion}>
          <Accordion.Item eventKey="3" className="accItem">
            <Accordion.Header onClick={() => handleToggle('3')}>
              What happens if I forget to pick up my laundry?
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}

export default Faqs;
