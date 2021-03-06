import React from 'react';
import { Facebook, Linkedin, PhoneCall, Twitter } from 'react-feather';
import logo from '../../images/logo.svg';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='container-fluid footer mx-auto text-white pt-4 pb-5'>
            <div className='row'>
                <div className="col-md-3 mb-md-0 mb-5">
                    <div>
                        <div className='d-flex justify-content-md-center'>
                            <img className='w-50' src={logo} alt="" />
                        </div>
                        <div className="d-flex justify-content-md-center">
                            <div>
                                <Facebook color={'white'} className='m-2' />
                                <Twitter color={'white'} className='m-2' />
                                <Linkedin color={'white'} className='m-2' />
                                <PhoneCall color={'white'} className='m-2' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 d-md-block d-flex justify-content-md-start justify-content-center mb-md-0 mb-3">
                    <div className='text-md-left text-center'>
                        <p>Features</p>
                        <p>Enterprise</p>
                        <p>Pricing</p>
                    </div>
                </div>
                <div className="col-md-3 d-md-block d-flex justify-content-md-start justify-content-center mb-md-0 mb-3">
                    <div className='text-md-left text-center'>
                        <p>Blog</p>
                        <p>Help Center</p>
                        <p>Contact Us</p>
                        <p>Status</p>
                    </div>
                </div>
                <div className="col-md-3 d-md-block d-flex justify-content-md-start justify-content-center mb-md-0 mb-3">
                    <div className='text-md-left text-center'>
                        <p>About Us</p>
                        <p>Terms of Service</p>
                        <p>Security</p>
                        <p>Login</p>
                    </div>
                </div>
            </div>
            <p className='text-center'><small>all right reserve @Abdul Basir 2021</small></p>
        </footer>
    );
};

export default Footer;