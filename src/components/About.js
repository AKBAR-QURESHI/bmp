import React from 'react'
import image1 from './image/images.jpg';

const About = () => {
    return (
        <div className="wrap">
            <section id="about" className="about">
                <h1 className='text-align-center'><em>About US</em></h1>
                <div className="container">

                    <div className="row">
                        <div data-aos="fade-right" className="text-align-center-detail">
                            <div>
                                <p>At BMP Interiors, we believe in the power of exceptional design to transform spaces and
                                    enhance lifestyles. As a leading interior design firm, we specialize in creating
                                    unique an inspiring environments that seamlessly blend functionality, aesthetics,
                                    and personal expression. At BMP Interiors, we take pride in our ability to transform ordinary spaces into extraordinary
                                    havens that inspire and delight. Whether you seek timeless elegance, contemporary flair, or a
                                    fusion of styles, our team is dedicated to bringing your vision to life.Discover the art of
                                    exceptional design with BMP Interiors and embark on a journey of captivating spaces that truly
                                    reflect your individuality.Whether you seek timeless elegance, contemporary flair, or a
                                    fusion of styles, our team is dedicated to bringing your vision to life.Discover the art of
                                    exceptional design with BMP Interiors and embark on a journey of captivating spaces that truly
                                    reflect your individuality.</p>
                            </div>
                            <div>
                                <img src={image1} alt="" className='about-image'></img>
                            </div>
                            
                        </div>

                    </div>
                </div>
            </section >
        </div>





    )
}

export default About;
