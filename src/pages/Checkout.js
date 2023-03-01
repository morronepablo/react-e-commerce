import React from 'react'
import { Link } from 'react-router-dom'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'

import watch from '../images/watch.jpg'

import { BiArrowBack } from 'react-icons/bi'
import Container from '../components/Container'

const Checkout = () => {
  return (
    <>
        <Meta title={"Checkout"} />
        <div className='d-flex justify-content-center'>
            <BreadCrumb origin='Home' title='Cart' />
            <BreadCrumb origin='' title='Checkout' />
        </div>

        <Container class1="checkout-wrapper home-wrapper-2 py-5">
            <div className="row">
                <div className="col-7">
                    <div className="checkout-left-data">
                        <h3 className='website-name'>Dev Corner</h3>
                        <nav 
                            style={{ "--bs-breadcrumb-divider": ">" }} 
                            aria-label="breadcrumb"
                        >
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link 
                                        to="/cart"
                                        className='text-dark total-price'
                                    >
                                        Cart
                                    </Link>
                                </li>
                                &nbsp; /
                                <li className="breadcrumb-item total-price active" aria-current="page">
                                    Information
                                </li>
                                &nbsp; /
                                <li className="breadcrumb-item total-price active">
                                    Shipping
                                </li>
                                &nbsp; /
                                <li className="breadcrumb-item total-price active" aria-current="page">
                                    Payment
                                </li>
                            </ol>
                        </nav>
                        <h4 className="title total">
                            Contact Information
                        </h4>
                        <p className="user-details total">
                            Navdeep Dahiya (monud0232@gmail.com)
                        </p>
                        <h4 className='mb-3'>Shipping Address</h4>
                        <form 
                            action="" 
                            className='d-flex flex-wrap justify-content-between gap-15'
                        >
                            <div className='w-100'>
                                <select 
                                    className='form-control form-select' 
                                    name="" 
                                    id=""
                                >
                                    <option value="" selected disabled>
                                        Select Country
                                    </option>
                                </select>
                            </div>
                            <div className='flex-grow-1'>
                                <input type="text" className="form-control" placeholder='First Name' />
                            </div>
                            <div className='flex-grow-1'>
                                <input type="text" className="form-control" placeholder='Last Name' />
                            </div>
                            <div className='w-100'>
                                <input type="text" className="form-control" placeholder='Address' />
                            </div>
                            <div className='w-100'>
                                <input type="text" className="form-control" placeholder='Apartment, Suite, etc.' />
                            </div>
                            <div className='flex-grow-1'>
                                <input type="text" className="form-control" placeholder='City' />
                            </div>
                            <div className='flex-grow-1'>
                                <select className='form-control form-select' name="" id="">
                                    <option value="" selected disabled>
                                        Select State
                                    </option>
                                </select>
                            </div>
                            <div className='flex-grow-1'>
                                <input type="text" className="form-control" placeholder='Zip Code' />
                            </div>
                            <div className="w-100">
                                <div className="d-flex justify-content-between align-items-center">
                                    <Link to='/cart' className='text-dark'><BiArrowBack className='me-2' />Return to Cart</Link>
                                    <Link to='/cart' className='button'>Continue to Shipping</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-5">
                    <div className='border-bottom py-4'>
                        <div className="d-flex gap-10 mb-2 align-items-center">
                            <div className='w-75 d-flex gap-10'>
                                <div className='w-25 position-relative'>
                                    <div 
                                        className='badge-item'
                                    >
                                        <h5>1</h5>
                                    </div>
                                    <img className='img-fluid' src={watch} alt="" />
                                </div>
                                <div>
                                    <h5 className="total-price">sdfsdfa</h5>
                                    <p className='total-price'>S / #fsdfds</p>
                                </div>
                            </div>
                            <div className='flex-grow-1'>
                                <h5 className='total'>$ 100.00</h5>
                            </div>
                        </div>
                    </div>
                    <div className='border-bottom py-4'>
                        <div className='d-flex justify-content-between align-items-center'>
                            <p className='total'>Subtotal</p>
                            <p className='total-price'>$ 1000.00</p>
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <p className='mb-0 total'>Shipping</p>
                            <p className='mb-0 total-price'>$ 1000.00</p>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center border-bottom py-4'>
                        <h4 className='total'>Total</h4>
                        <h5 className='total-price'>$ 1000.00</h5>
                    </div>
                </div>
            </div> 
        </Container>
    </>
  )
}

export default Checkout