import React, { useContext } from 'react';
import { UserContext } from '../../App';
import MapContainer from '../MapContainer';

const BookingInfo = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser)
    return (
        <div className='row'>
            <div className='col-sm-5'>
                <h3 style={{ color: '#0513d4' }}>Booking details</h3>
                <ul className="list-group">
                    <li className="list-group-item">Your Origin: <strong> {loggedInUser.origin} </strong></li>
                    <li className="list-group-item">Your Destination: <strong> {loggedInUser.destination} </strong></li>
                    <li className="list-group-item">Starting Travel: <strong> {loggedInUser.starting} </strong></li>
                    <li className="list-group-item">Ending Travel: <strong> {loggedInUser.ending} </strong></li>
                </ul>
            </div>
            <div className='col-sm-5 m-4 p-4'>
                <MapContainer></MapContainer>
            </div>
        </div>
    );
};

export default BookingInfo;