import React, { useEffect, useState } from 'react';
import { User } from 'react-feather';
import ReactOwlCarousel from 'react-owl-carousel';

const Feedback = () => {
    const [users, setUsers] = useState(null)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users?_start=0&_limit=5')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setUsers(data)
            })
    }
        , [])

    return (
        <div className='container'>
            <h3 className='text-center my-5' style={{
                color: '#0513d4', backgroundColor: 'rgba(247, 152, 9, 0.3)',
                padding: '30px'
            }} > Some of Our Happy Customers </h3>
            <div className='row'>
                {users &&
                    users.map(user => (
                        <div className='col-6 col-sm-4'>
                            <div className='border m-1 p-3'>
                                <div className="d-flex">
                                    <div className='mr-3'> <User size={30} /> </div>
                                    <div>
                                        <h5 style={{ color: '#0513d4' }} > {user.username} </h5>
                                        <p>Best Travel I have ever seen</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Feedback;