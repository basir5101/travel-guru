import React from 'react';
import { Button, Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import fakeData from '../../../fakeData';

const Home = () => {
    return (
        <div className = 'row'>
                {
                    fakeData.map(place => {
                        return <div className = 'col-sm-4' key = {place.id} >
                            <div className = 'text-white m-4 p-4 border bg-dark text-center'>
                                <h3 className = 'm-4'> {place.name} </h3>
                                <img className = 'w-75' src= {place.picture} alt=""/>
                                <p> {place.description} </p>
                                <Link to = {`/travel-info/${place.id}`} >
                                    <Button variant="warning">Booking →</Button>
                                </Link>
                            </div>                        
                        </div>
                    })
                }
        </div>
    );
};

export default Home;