import React from 'react';
import data from '../Data';
import Card from './Card';
import Reviews from './Reviews';
import Map from './Map';
import ReviewsData from './ReviewsData';
import Bookingstep2 from './Bookingstep2';
import Bookingstep3 from './Bookingstep3';
import { $ } from 'react-jquery-plugin';



function Home() {

    $(document).on('click', '.times_options2 input[type="radio"]', function () {
        var radio_value = $(this).val();
        // alert(radio_value);
        $('.selectedTime').text(radio_value);
    });
    $(document).on('submit', '.search_form', function () {
        $('.box1').hide();
        $('.box2').show();

    });

    $(document).on('click', '.react-calendar__tile', function () {
        $('.selected-location').addClass('active');
        $('.box3').show();
        $('.date_selected').show();
      

    });

    $(document).on('click', '.current-location', function () {
        $('.box2').hide();
        $('.box3').hide();
        $('.box1').show();
        localStorage.removeItem('newAddress');
        //alert("sdfsf");
    });
    
    $(document).on('click', '.date_selected', function () {
        $(this).hide();
        $('.selected-location').removeClass('active');
        $('.box3').hide();
        $('.box2').show();
    });
    
    // .current-location


    return (
        <>

            <div className="booking-wrapper">
                <div className="offer-ticker">
                    for as low as <span>$1.33/lb</span>
                </div>
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pos_unset form_side">
                            <div className="inner">
                                <div className="booking-box box1">
                                    <div className="box-header">
                                        <h1>Where can we pick up your laundry?</h1>
                                    </div>
                                    <div className="box-body">
                                    <Map/>
                                    </div>
                                </div>
                                <Bookingstep2 />
                            </div>
                            <Bookingstep3 />

                        </div>
                        <div className="col-lg-6 caption_side">
                            <div className="intro_text">
                                <h1 className="sub_title">Got business to run and <br />stuck doing laundry?</h1>
                                <h2 className="title">We got you!</h2>
                                <p>We pick up your dirty laundry and bring it back to you clean, folded and sorted, all on the same day.</p>
                                <p>Still got questions?</p>
                                <a href="tel:(416) 984-4659" className="btn btn-white">Call us</a>
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
                    <a href="tel:(416) 984-4659" className="btn btn-white">Call us</a>
                </div>
            </div>

        </>
    );
}


export default Home;