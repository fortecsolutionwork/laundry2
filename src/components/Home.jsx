import React from 'react';
import data from '../Data';
import Card from './Card';
import Data from './Data';
import Reviews from './Reviews';
import ReviewsData from './ReviewsData';
import Banner_img1 from '../images/banner-img.svg';
// import Search from './Search';


function Home() {
    return (
        <>

            <div className="booking-wrapper">
                <div className="offer-ticker">
                    for as low as <span>$1.33/lb</span>
                </div>
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="booking-box">
                                <div className="box-header">
                                    <h1>Where can we pick up your laundry?</h1>
                                </div>
                                <div className="box-body">
                                    <form action="" method="get">
                                        <div className="input-box">
                                            {/* <Search/> */}
                                            <input type="text" name="" id="" />
                                            <svg width="30px" height="30px" viewBox="0 0 22 22" version="1.1">
                                                <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <g id="Outlined" transform="translate(-543.000000, -1749.000000)">
                                                        <g id="Device" transform="translate(100.000000, 1650.000000)">
                                                            <g id="Outlined-/-Device-/-gps_fixed" transform="translate(442.000000, 98.000000)">
                                                                <g>
                                                                    <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
                                                                    <path d="M12,8 C9.79,8 8,9.79 8,12 C8,14.21 9.79,16 12,16 C14.21,16 16,14.21 16,12 C16,9.79 14.21,8 12,8 Z M20.94,11 C20.48,6.83 17.17,3.52 13,3.06 L13,1 L11,1 L11,3.06 C6.83,3.52 3.52,6.83 3.06,11 L1,11 L1,13 L3.06,13 C3.52,17.17 6.83,20.48 11,20.94 L11,23 L13,23 L13,20.94 C17.17,20.48 20.48,17.17 20.94,13 L23,13 L23,11 L20.94,11 Z M12,19 C8.13,19 5,15.87 5,12 C5,8.13 8.13,5 12,5 C15.87,5 19,8.13 19,12 C19,15.87 15.87,19 12,19 Z" id="🔹-Icon-Color" fill="#8f8f8f"></path>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="intro_text">
                                <h1 className="sub_title">Got Business to run and <br />stuck doing laundry?</h1>
                                <h2 className="title">We got you!</h2>
                                <p>We pick up your dirty laundry and bring it back to you clean, folded and sorted, all on the same day.</p>
                                <p>Still got questions?</p>
                                <a href="" className="btn btn-white">Call us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="features_wrapper">
                <div className="container-fluid">
                    <h1 class="section_title">One stop for all your laundry needs</h1>
                    <div className="row">
                        {data.map((props) => (
                            <Card title={props.title} featureimg={props.featureimg} description={props.description} />
                        ))}
                    </div>
                </div>
            </div>


            <div className="reviews_wrapper">
                <div className="container-fluid">
                    <h1 class="section_title">Hear from people who love our service</h1>
                    <div className="row">
                        {ReviewsData.map((props) => (
                            <Reviews person_name={props.person_name} rating={props.rating} content={props.content} brand_img={props.brand_img} />
                        ))}
                    </div>
                </div>
            </div>

            <div className="container-fluid cta_wrapper">
                <div className="cta">
                    <h2 class="section_title">Have <br />Questions?</h2>
                    <a href="" className="btn btn-white">Call us</a>
                </div>
            </div>

        </>
    );
}


export default Home;