import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import sceneryImg from '../../images/scenery.jpg';
import cc from '../../images/scenery/download.jpg';
import dd from '../../images/scenery/download (1).jpg';
import happy from '../../images/happy.svg'
import './ScenerySlider.css';
import { TrendingUp } from 'react-feather';

const ScenerySlider = () => {
    const responsiveObject = {
        0: {
            items: 1,
        },
        450: {
            items: 2,
        },
        600: {
            items: 3,
        },
        1000: {
            items: 4,
        },
    }
    return (
        <div>
            <div className="row heading">
                <div className="col-sm-5">
                    <img src={happy} alt="" />
                </div>
                <div className=" text-center col-sm-5 p-3 d-flex align-items-center">
                    <div>
                        <h4>Welcome to Your <span>Happy Moments</span></h4>
                        <h4>Spend Your Best <span>Moments</span> Now <TrendingUp /> </h4>
                    </div>
                </div>
            </div>
            <OwlCarousel responsive={responsiveObject} className='mt-5 owl-theme bg-dark pt-5' items={4} center autoplay autoplaySpeed={1000} slidetransition={'linear'} autoplayTimeout={4000} loop mouseDrag margin={10}>
                <div className='item'>
                    <img src={dd} alt="" />
                </div>
                <div className='item'>
                    <img src={sceneryImg} alt="" />
                </div>
                <div className='item'>
                    <img src={sceneryImg} alt="" />
                </div>
                <div className='item'>
                    <img src={dd} alt="" />
                </div>
                <div className='item'>
                    <img src={sceneryImg} alt="" />
                </div>
                <div className='item'>
                    <img src={cc} alt="" />
                </div>
                <div className='item'>
                    <img src={sceneryImg} alt="" />
                </div>
                <div className='item'>
                    <img src={sceneryImg} alt="" />
                </div>
            </OwlCarousel>;
        </div>
    );
};

export default ScenerySlider;