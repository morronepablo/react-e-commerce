import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai'
import { BiPhoneCall, BiInfoCircle } from 'react-icons/bi'
import Container from '../components/Container'

const Contact = () => {
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb origin='Home' title="Contact Us" />
      
      <Container class1="contact-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.7154881938177!2d-58.393012585026966!3d-34.611355265408704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccadce82449a5%3A0xec8327270c48dcc3!2sAdolfo%20Alsina%201729%2C%20C1088AAQ%20CABA!5e0!3m2!1ses-419!2sar!4v1677253818198!5m2!1ses-419!2sar"
              width="600"
              height="450"
              className="border-0 w-100"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="My Address"
            ></iframe>
          </div>
          <div className="col-12 mt-5">
            <div className="contact-inner-wrapper d-flex justify-content-between">
              <div>
                <h3 className="contact-title mb-4">Contact</h3>
                <form className="d-flex flex-column gap-15">
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      className="form-control" 
                      placeholder='Email'
                    />
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      className="form-control"
                      placeholder='Mobile Number' 
                    />
                  </div>
                  <div>
                    <textarea
                      className="w-100 form-control"
                      name=""
                      id=""
                      cols="30"
                      rows="4"
                      placeholder='Comments'
                    ></textarea>
                  </div>
                  <div>
                    <button className='button border-0'>Submit</button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className="contact-title mb-4">Get in touch with us</h3>
                <div>
                  <ul className='ps-0'>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <AiOutlineHome className='fs-5' />
                      <address className='mb-0'>
                        Adolfo Alsina 1792, C1088AAQ, CABA
                      </address>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <BiPhoneCall className='fs-5' />
                      <a href="tel:+5491138669097" className='mb-0'>
                        +54 911 38669097
                      </a>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <AiOutlineMail className='fs-5' />
                      <a href="mailto:morronepablo@gmail.com" className='mb-0'>
                        morronepablo@gmail.com
                      </a>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <BiInfoCircle className='fs-5' />
                      <p className='mb-0'>Monday - Friday 10 AM - 8 PM</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Contact