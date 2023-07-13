import React from 'react'

const Contact = () => {
  return (

    <section id="contact" className="contact">
      <div className="container">

        <div className="section-title" data-aos="fade-down">
          <span>Contact Us</span>
          <h2>Contact Us</h2>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-12" data-aos="fade-up" data-aos-delay="100">
            <div className="info-box">
              <i class="fa-light fa-location-dot"></i>
              <h3>Our Address</h3>
              <p >First office: BMP Interiors 123,Sapphire Avenue Mahaveer nagar,Bhilwara,Rajhasthan,India ZIP Code:311001</p>
              <p>Second office: 76/64,New Market Road , Near Trib Research Center ,Bhilwara ,Rajhasthan,India ZIP Code:311001</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="200">
            <div className="info-box-2">
              <i className="bx bx-envelope"></i>
              <h3>Email Us</h3>
              <p><a href="mailto:hellobmpinteriors@gmail.com">hellobmpinteriors@gmail.com</a></p>
              <p><a href="mailto:help@bmpinteriors.com">help@bmpinteriors.com</a></p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="300">
            <div className="info-box-1">
              <i className="bx bx-phone-call"></i>
              <h3>Call Us</h3>
              <p>+91 9509735063</p>
            </div>
          </div>
        </div>
        <div className='map'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11629.523568180382!2d74.61520660620776!3d25.34527035452544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1687157230570!5m2!1sen!2sin" height={400} width={1500}/>
        </div>
        <form action="forms/contact.php" method="post" role="form" className="php-email-form mt-4" data-aos="fade-up" data-aos-delay="400">
          <div className="inp-row">
            <div className='inp-1'>
              <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
              <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
            </div>
            <div className='inp-2'>
              <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
              <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
            </div>

            
          </div>
          <div className="my-3">

            <div className="error-message"></div>
            <div className="sent-message">Your message has been sent. Thank you!</div>
          </div>
          <div className='text-center'><button type="submit">Send Message</button></div>
        </form>
      </div>
    </section >
  )
}


export default Contact;
