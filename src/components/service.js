import React from 'react'



const Card = (props) => {

  return (
    <section id="services" className="services">
      <div className='row'>
        <div className="column-6">
          <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
            <h4>{props.icon}<a href="#">{props.name}</a></h4>
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    </section>
  )
};


const Service = () => {

  return (
    <div className='wrap'>
      {/* //   <!-- ======= Services Section ======= --> */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-title" data-aos="fade-down">
            <span>Services</span>
            <h2>Services</h2>
            <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>
          </div>
        </div>
        <div className='card-row'>
          <div className='col-1'>
            <Card icon={<i class="fa-solid fa-envelope"></i>} name={'Unveiling the Essence of Udaipur:'} description={'Udaipur, known as the "City of Lakes," possesses a richcultural heritage and is renowned for its palaces, architecture, and majestic landscapes.'} />
            <Card name={'Seamless Integration of Design and Functionality'} description={'BMP Interiors understands that hotelinteriors must not only be visually stunning but also highly functional.'}/>
            <Card name={'Craftsmanship and Attention to Detail'} description={' One of the hallmarks of BMP Interiors collaboration with Raj Hotels is their unwavering commitment to craftsmanship and attention to detail.'} />
          </div>
          <div className='col-1'>
            <Card name={'Creating Unique Guest Journeys'} description={' BMP Interiors and Raj Hotels understand that each guest journey is unique and should be cherished. The interior design concepts are carefully crafted to evoke a sense of discovery and provide a series of memorable moments throughout the hotel. '} />
            <Card name={'Creating Unique Guest Journeys'} description={' BMP Interiors and Raj Hotels understand that each guest journey is unique and should be cherished. The interior design concepts are carefully crafted to evoke a sense of discovery and provide a series of memorable moments throughout the hotel. '} />
          </div>
        </div>
      </section>

    </div>

    /* </section><!-- End Services Section --> */

  )
};

export default Service;


