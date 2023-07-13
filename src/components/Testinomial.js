import React from 'react'
import Carousel from './Carousel';
import { slides } from '../Data';

const Testinomial = () => {

    return (
        <div className='wrap'>
            {/* // <!-- ======= Testimonials Section ======= --> */}
            <section id="testimonials" className="testimonials">
                <div className='slide-container'>
                    <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">

                        <Carousel data={slides} />
                    </div>
                </div>

            </section >
        </div>




    )

};

export default Testinomial;
