import React from 'react';
import { Button} from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import fakeData from '../../../fakeData';

const TravelInfo = () => {
    const {placeId} = useParams();
    const placeDetails = fakeData.find(place => place.id == placeId);
    const {name, id, description} = placeDetails;
    return (
        <div className = 'row'>
            <div className = 'col-sm-5 p-4 m-4'>
                <div key = {id} className = 'text-white w-75'>
                    <h3>{name}</h3>
                    <p>{description}</p>
                </div>                  
            </div>
            <div>
                <form className = 'travel-form'>
                    <label htmlFor="origin">Origin: </label>
                    <input type="text" name="origin" value = {name} required/>
                    <label htmlFor="origin">Destination: </label>
                    <input type="text" name="Destination" placeholder = 'Your Destination' required/>
                    <br/>
                    <div className="row">
                        <div className="col-5">
                            <label htmlFor="origin">From: </label>
                            <input type="date" name="Destination" placeholder = 'date' required/>
                        </div>
                        <div className="col-5">
                            <label htmlFor="origin">To: </label>
                            <input type="date" name="Destination" placeholder = 'date' required/>
                        </div>
                    </div>
                    <br/>
                    <Link to="/booking-info">
                        <Button type = 'submit' variant = 'warning' >Start Booking</Button>
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default TravelInfo;