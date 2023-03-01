import React from 'react'
import { Link } from 'react-router-dom'
import { IoChevronForwardOutline } from 'react-icons/io5'

const BreadCrumb = (props) => {
    const { title, origin } = props;
  return (
    <div className='breadcrumb mb-0 py-4'>
        <div className="container-xxl">
            <div className="row">
                <div className="col-12 px-0">
                    <p className='text-center mb-0'>
                        <Link 
                            to='/' 
                            className='text-dark'
                        >
                            { origin }
                        </Link>
                        <IoChevronForwardOutline 
                            className='icon-Breadcrumb' 
                        /> 
                        { title }
                    </p>
                </div>
            </div>
        </div>
    </div>  
  )
}

export default BreadCrumb