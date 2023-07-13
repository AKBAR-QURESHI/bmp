import React from 'react';

const Header = () => {
  return (
    <div className="wrap">

            {/* <!-- ======= Hero Section ======= --> */}
            <section id="hero">
                        <div className="hero-container" data-aos="fade-up">
                            <h1>Transform Your Space,Elevate Your Style: Welcome to BMP Interiors</h1>
                            <h2>We are team of talented designers making websites with Bootstrap</h2>
                            <button className="started-btn"><a href="#about" >Get Started</a></button>
                        </div>
             </section>
                    {/* <!-- ======= Header ======= --> */}
                    <header id="header" className="d-flex align-items-center">
                        <div className="container d-flex align-items-center justify-content-between">
                             {/* !-- Uncomment below if you prefer to use an image logo --> */}
                            


                            <nav id="navbar" className="navbar">
                                <ul>
                                    <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                                    <li><a className="nav-link scrollto" href="#about">About us</a></li>
                                    <li><a className="nav-link scrollto" href="#Wedo">We do</a></li>
                                    <li><a className="nav-link scrollto" href="#services">Design Service</a></li>
                                    <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                                </ul>
                                <i className="bi bi-list mobile-nav-toggle"></i>
                            </nav>
                            {/* <!-- .navbar --> */} 

                          </div>
                        </header>
                </div>
                )
  };

export default Header;
