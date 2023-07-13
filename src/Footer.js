import React from 'react'

const Footer = () => {
    return (
        <div>
            {/* <!-- ======= Footer ======= --> */}
            <footer id="footer">

                <div className="footer-newsletter">
                    <div className="container">
                        <div className="row-newsletter">
                            <div className="col-lg-6 news-detail">
                                <h4>Join Our Newsletter</h4>
                                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                                <form action="" method="post">
                                    <input type="email" name="email" />
                                    <input type="submit" value="Subscribe" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-top">
                    <div className="container">
                        <div className="row-details">

                            <div className="col-lg-3 col-md-6 footer-contact">
                                <h3>Plato</h3>
                                <p>
                                    A108 Adam Street <br />
                                    New York, NY 535022<br />
                                    United States <br /><br />
                                    <strong>Phone:</strong> +1 5589 55488 55<br />
                                    <strong>Email:</strong> info@example.com<br />
                                </p>

                            </div>
                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">Services</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Our Services</h4>
                                <ul>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Our Social Networks</h4>
                                <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
                                <div class="social-links mt-3">
                                    <a href="#" class="twitter"><i class="fa-brands fa-twitter"></i></a>
                                    <a href="#" class="facebook"><i class="fa-brands fa-facebook"></i></a>
                                    <a href="#" class="instagram"><i class="fa-brands fa-instagram"></i></a>
                                    <a href="#" class="google-plus"><i class="fa-brands fa-skype"></i></a>
                                    <a href="#" class="linkedin"><i class="fa-brands fa-linkedin"></i></a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="container py-4">
                    <div className="copyright">
                        <div>
                            &copy; Copyright <strong><span>Plato</span></strong>. All Rights Reserved
                        </div>
                        <div>
                            <a href="#" className="back-to-top "><i class="fa-regular fa-arrow-up"></i></a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>


    )
};




export default Footer;
