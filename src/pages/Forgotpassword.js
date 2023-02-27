import React from 'react'
import { Link } from 'react-router-dom'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'


const Forgotpassword = () => {
  return (
    <>
      <Meta title={"Forgot Password"} />
      <BreadCrumb title='Forgot Password' />
      
      <div className="login-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
              <div className="col-12">
                  <div className="auth-card">
                      <h3 className='text-center mb-3'>Reset Your Password</h3>
                      <p className="text-center mt-2 mb-3">
                        We will send you an email to reset your password
                      </p>
                      <form action="" className='d-flex flex-column gap-15'>
                          <div>
                            <input 
                              type="email" 
                              name="email" 
                              className="form-control" 
                              placeholder='Email'
                            />
                          </div>                       
                          <div>                     
                            <div className="d-flex justify-content-center flex-column align-items-center gap-15 mt-3">
                              <button className="button border-0" type="submit">Submit</button>
                              <Link to='/login'>Cancel</Link>
                            </div>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Forgotpassword