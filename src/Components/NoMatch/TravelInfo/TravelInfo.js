import React from 'react';
import { Button} from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import fakeData from '../../../fakeData';

const TravelInfo = () => {
    const {placeId} = useParams();
    const placeDetails = fakeData.filter(place => place.id == placeId);
    
    return (
        <div className = 'd-flex'>
            <div>
                {
                    placeDetails.map(place =>{
                        return <div>
                                <h3>{place.name}</h3>
                                {/* <Image style = {{height: '400px'}} src= {place.picture} fluid /> */}
                            </div>
                    })
                }
            </div>
            <div>
                <form className = 'travel-form'>
                    <label htmlFor="origin">Origin: </label>
                    <input type="text" name="origin" placeholder = 'Your location' />
                    <label htmlFor="origin">Destination: </label>
                    <input type="text" name="Destination" placeholder = 'Your Destination' />
                    <br/>
                    <div className="row">
                        <div className="col-5">
                            <label htmlFor="origin">From: </label>
                            <input type="date" name="Destination" placeholder = 'date' />
                        </div>
                        <div className="col-5">
                            <label htmlFor="origin">To: </label>
                            <input type="date" name="Destination" placeholder = 'date'/>
                        </div>
                    </div>
                    <br/>
                    <Link to="/booking-info">
                        <Button variant = 'warning' >Start Booking</Button>
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default TravelInfo;