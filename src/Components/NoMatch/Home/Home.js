import React from 'react';
import { Button, Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import fakeData from '../../../fakeData';

const Home = () => {
    return (
        <div>
            {
                fakeData.map(place => {
                    return <div key = {place.id} >
                        <Jumbotron>
                            <h3> {place.name} </h3>
                            <p> {place.description} </p>
                            <Link to = {`/travel-info/${place.id}`} >
                                <Button variant="warning">Booking →</Button>
                            </Link>
                        </Jumbotron>                        
                    </div>
                })
            }
        </div>
    );
};

export default Home;