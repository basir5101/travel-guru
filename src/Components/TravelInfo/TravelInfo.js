import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import { UserContext } from '../../App';
import './TravelInfo.css';

const TravelInfo = () => {
    const { placeId } = useParams();
    const placeDetails = fakeData.find(place => place.id == placeId);
    const { name, id, longDescription } = placeDetails;

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const handleBlur = (e) => {
        const newUser = { ...loggedInUser };
        newUser[e.target.name] = e.target.value;
        newUser.destination = name;
        setLoggedInUser(newUser);
    }
    const handleTravel = () => {
        console.log(loggedInUser);
    }
    return (
        <div className='row container mx-auto'>
            <div className='col-md-6 p-4'>
                <div key={id} className='w-75'>
                    <h3 style={{ color: '#0513d4' }}>{name}</h3>
                    <p>{longDescription}</p>
                </div>
            </div>
            <div className='col-md-6'>
                <form className='travel-form'>
                    <label htmlFor="origin">Origin: </label>
                    <input type="text" name="origin" placeholder='Your Origin' onChange={handleBlur} required />
                    <label htmlFor="destination">Destination: </label>
                    <input type="text" name="destination" onChange={handleBlur} defaultValue={name} placeholder='your destination' required />
                    <br />
                    <div className="row">
                        <div className="col-5">
                            <label htmlFor="origin">From: </label>
                            <input type="date" name="starting" onChange={handleBlur} placeholder='date' required />
                        </div>
                        <div className="col-5">
                            <label htmlFor="origin">To: </label>
                            <input type="date" name="ending" onChange={handleBlur} placeholder='date' required />
                        </div>
                    </div>
                    {
                        !loggedInUser.starting || !loggedInUser.ending || !loggedInUser.origin ?
                            <p className='text-center text-danger'>Please fill out all the field</p> : <p></p>
                    }
                    <Link to="/booking-info">
                        <button className='btn' disabled={!loggedInUser.starting || !loggedInUser.ending || !loggedInUser.origin} onClick={handleTravel} type='submit' variant='warning' >Start Booking</button>
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default TravelInfo;