import React from 'react';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData';
import sceneryImg from '../../images/scenery.jpg';
import './Places.css';

const Places = () => {
    return (
        <section className='places pb-5'>
            <h3 className='text-center'>Most <span>Amazing</span> Places For Booking</h3>
            <div className='row container m-auto'>

                {
                    fakeData.map(place => {
                        return <div className='col-sm-4' key={place.id} >
                            <div className='place pb-4 border'>
                                <Link to={`/travel-info/${place.id}`} >
                                    <h2 className='my-5'> {place.name} </h2>
                                    <img className='w-100' src={sceneryImg} alt="" />
                                    <p> {place.description} </p>
                                    <button className='btn place-btn'>Book Now →</button>
                                </Link>
                            </div>
                        </div>
                    })
                }
            </div>
        </section>
    );
};

export default Places;