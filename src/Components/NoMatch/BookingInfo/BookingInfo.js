import React from 'react';
import MapContainer from '../MapContainer';

const BookingInfo = () => {
    return (
        <div className = 'row text-white'>
            <div className = 'col-sm-5'>
                <h3>Booking details</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti molestias perspiciatis deleniti iste veniam nihil sapiente, voluptas a delectus magni, nulla earum ad, officia obcaecati quam odit odio commodi adipisci.</p>
            </div>
            <div className = 'col-sm-5 m-4 p-4'>
                <MapContainer></MapContainer>
            </div>
        </div>
    );
};

export default BookingInfo;