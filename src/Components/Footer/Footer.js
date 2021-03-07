import React from 'react';
import { AtSign, Facebook, Linkedin, Twitter } from 'react-feather';
import logo from '../../images/logo.svg';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='container-fluid footer mx-auto text-white pt-4 pb-1'>
            <div className='row'>
                <div className="col-md-3 mb-md-0 mb-5">
                    <div>
                        <div className='d-flex justify-content-md-center'>
                            <img className='w-50' src={logo} alt="" />
                        </div>
                        <div className="d-flex justify-content-md-center">
                            <div>
                                <a href='https://facebook.com/basir5101/' rel="noopener noreferrer" target='_blank'> <Facebook color={'white'} /></a>
                                <a href='https://twitter.com/basir5101' rel="noopener noreferrer" target='_blank'> <Twitter color={'green'} /></a>
                                <a href='https://www.linkedin.com/in/abdul-basir-b087971b1/' rel="noopener noreferrer" target='_blank'> <Linkedin color={'white'} /></a>
                                <a href="mailto:basir.bsmrstu@gmail.com" rel="noopener noreferrer" target='_blank'> <AtSign color={'pink'} /></a>
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