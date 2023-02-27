import React, { useState } from 'react'
import ReactStars from 'react-rating-stars-component'
import { Link } from 'react-router-dom'
import ReactImageZoom from 'react-image-zoom';
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import ProductCard from '../components/ProductCard'
import Color from '../components/Color';

import { TbGitCompare } from 'react-icons/tb'
import { AiOutlineHeart } from 'react-icons/ai'

const SingleProduct = () => {
    const props = {
        width: 600, 
        height: 600, 
        zoomWidth: 600, 
        img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
    };
    const [orderedProduct, setOrderedProduct] = useState(true)

    return (
        <>
            <Meta title={"Product Name"} />
            <BreadCrumb title='Product Name' />

            <div className="main-product-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <div className="main-product-image">
                                <div>
                                    <ReactImageZoom {...props} />
                                </div>
                            </div>
                            <div className="other-product-images d-flex flex-wrap gap-15">
                                <div><img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg" className='img-fluid' alt="watch" /></div>
                                <div><img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg" className='img-fluid' alt="watch" /></div>
                                <div><img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg" className='img-fluid' alt="watch" /></div>
                                <div><img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg" className='img-fluid' alt="watch" /></div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="main-product-details">
                                <div className='border-bottom'>
                                    <h3 className='title'>
                                        Kids Heaphones Bulk 10 Pack Multi Colored For Students
                                    </h3>
                                </div>
                                <div className="border-bottom py-3">
                                    <p className="price">$ 100.00</p>
                                    <div className="d-flex align-items-center gap-10">
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={3}
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                        <p className='mb-0 t-review'>( 2 Reviews )</p>
                                    </div>
                                    <a href="#review" className='review-btn'>Write a Review</a>
                                </div> 
                                <div className="border-bottom py-3">
                                    <div className='d-flex align-items-center my-2 gap-10'>
                                        <h3 className='product-heading'>Type :</h3>
                                        <p className='product-data'>Watch</p>
                                    </div>
                                    <div className='d-flex align-items-center my-2 gap-10'>
                                        <h3 className='product-heading'>Brand :</h3>
                                        <p className='product-data'>Havells</p>
                                    </div>
                                    <div className='d-flex align-items-center my-2 gap-10'>
                                        <h3 className='product-heading'>Category :</h3>
                                        <p className='product-data'>Watch</p>
                                    </div>
                                    <div className='d-flex align-items-center my-2 gap-10'>
                                        <h3 className='product-heading'>Tags :</h3>
                                        <p className='product-data'>Watch</p>
                                    </div>
                                    <div className='d-flex align-items-center my-2 gap-10'>
                                        <h3 className='product-heading'>Availiblity :</h3>
                                        <p className='product-data'>In Stock</p>
                                    </div>
                                    <div className='d-flex flex-column mt-2 mb-3 gap-10'>
                                        <h3 className='product-heading'>Size :</h3>
                                        <div className="d-flex flex-wrap gap-15">
                                            <span className="badge border border-1 bg-white text-dark border-secondary">S</span>
                                            <span className="badge border border-1 bg-white text-dark border-secondary">M</span>
                                            <span className="badge border border-1 bg-white text-dark border-secondary">XL</span>
                                            <span className="badge border border-1 bg-white text-dark border-secondary">XXL</span>
                                        </div>
                                    </div>
                                    <div className='d-flex flex-column mt-2 mb-3 gap-10'>
                                        <h3 className='product-heading'>Color :</h3>
                                        <Color />
                                    </div>
                                    <div className='d-flex flex-row align-items-center mt-2 mb-3 gap-15'>
                                        <h3 className='product-heading'>Quantity :</h3>
                                        <div>
                                            <input 
                                                type="number" 
                                                name="" 
                                                min={1}
                                                max={10}
                                                className="form-control"
                                                style={{"width": "70px"}}
                                            />
                                        </div>
                                        <div className='d-flex align-items-center gap-30 ms-5'>
                                            <button className="button border-0" type="submit">Add to Cart</button>
                                            <button className='button signup'>Buy It Now</button>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center gap-15">
                                        <div>
                                            <a href=""><TbGitCompare className='fs-5 me-2' /> Add to Compare</a>
                                        </div>
                                        <div>
                                            <a href=""><AiOutlineHeart className='fs-5 me-2' /> Add to Wishlist</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="description-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h4>Description</h4>
                            <div className='bg-white p-3'>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia odit nihil rerum cum voluptas mollitia, dolorum atque reprehenderit illum temporibus quasi nesciunt optio repellat consectetur unde maxime repellendus. Illum, voluptatem!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="reviews-wrapper home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 id="review">Reviews</h3>
                            <div className="review-inner-wrapper">
                                <div className="review-head d-flex justify-content-between align-items-end">
                                    <div>
                                        <h4 className='mb-2'>Customer Reviews</h4>
                                        <div className='d-flex align-items-center gap-10'>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={3}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <p className='mb-0'>Based on 2 Reviews</p>
                                        </div>
                                    </div>
                                    {
                                        orderedProduct && (
                                            <div>
                                                <Link 
                                                    className='text-dark text-decoration-underline' 
                                                    to=""
                                                >
                                                    Write a Review
                                                </Link>
                                            </div>
                                        )
                                    }
                                </div>
                                <div className="review-form py-4">
                                    <h4>Write a Review</h4>
                                    <form className="d-flex flex-column gap-15">
                                        <div>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={3}
                                                edit={true}
                                                activeColor="#ffd700"
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
                                        <div className='d-flex justify-content-end'>
                                            <button className='button border-0'>Submit Review</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="reviews mt-4">
                                    <div className="review">
                                        <div className="d-flex align-items-center gap-10">
                                            <h6 className='mb-0'>Navdeep</h6>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value='3'
                                                edit='false'
                                                activeColor="#ffd700"
                                            />
                                        </div>
                                        <p className='mt-3'>
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, ad iste. Aut consectetur ipsum quas iste fugit provident blanditiis officia expedita exercitationem. Quaerat, iusto culpa. Porro quas ipsum iste harum.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="popular-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                    <h3 className="section-heading">Our Popular Products</h3>
                    </div>
                </div>
                <div className="row">
                    <ProductCard />
                </div>
                </div>
            </section>

        </>
    )
}

export default SingleProduct