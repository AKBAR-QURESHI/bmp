import React from 'react';
import about from './image/about.jpg';
import t1 from './image/features-1.jpg';
import t2 from './image/features-2.jpg';
import t3 from './image/features-3.jpg';
import belimo from './image/client-2.png';
import myob from './image/client-1.png';
import lifegroups from './image/client-3.png';
import lilly from './image/client-4.png';
import citrus from './image/client-5.png';
import trustly from './image/client-6.png';


const Client = () => {
    return (
        <div className='wrap'>
            <section id="clients" class="clients">
                <div className="container">

                    <div className="row">

                        <div className="col-lg-2 col-md-4 col-6">
                            <img src={myob} className="img-fluid" alt="" data-aos="zoom-in"></img>
                        </div>

                        <div className="col-lg-2 col-md-4 col-6">
                            <img src={belimo} className="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="100"></img>
                        </div>

                        <div className="col-lg-2 col-md-4 col-6">
                            <img src={lifegroups} className="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="200"></img>
                        </div>

                        <div className="col-lg-2 col-md-4 col-6">
                            <img src={lilly} className="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="300"></img>
                        </div>

                        <div className="col-lg-2 col-md-4 col-6">
                            <img src={citrus} className="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="400"></img>
                        </div>

                        <div className="col-lg-2 col-md-4 col-6">
                            <img src={trustly} className="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="500"></img>

                        </div>

                    </div>

                </div>
            </section>
            {/* -- End Clients Section --> */}

            {/* ======= Features Section ======= --> */}
            <section id="features" className="features">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <div className="card" data-aos="fade-up">
                                <img src={t1} className="card-img-top" alt="..." width={450} height={300}></img>
                                <div className="card-body">
                                    <i className="bx bx-tachometer"></i>
                                    <h5 className="card-title"><a href="">Our Mission</a></h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-5 mt-md-0 d-flex align-items-stretch">
                            <div className="card" data-aos="fade-up" data-aos-delay="150">
                                <img src={t2} className="card-img-top" alt="..." width={450} height={300}></img>
                                <div className="card-body">
                                    <i className="bx bx-file"></i>
                                    <h5 className="card-title"><a href="">Our Plan</a></h5>
                                    <p className="card-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-5 mt-lg-0 d-flex align-items-stretch">
                            <div className="card" data-aos="fade-up" data-aos-delay="300">
                                <img src={t3} className="card-img-top" alt="..." width={450} height={300}></img>
                                <div className="card-body">
                                    <i className="bx bx-show"></i>
                                    <h5 className="card-title"><a href="">Our Vision</a></h5>
                                    <p className="card-text">Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores eos qui ratione voluptatem sequi nesciunt Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet. </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            {/* <!-- End Features Section --> */}

            {/* <!-- ======= Cta Section ======= --> */}
            <section id="cta" class="cta">
                <div class="container">

                    <div class="text-center" data-aos="zoom-in">
                        <h3>Call To Action</h3>
                        <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <a class="cta-btn" href="#">Call To Action</a>
                    </div>

                </div>
            </section>
            {/* <!-- End Cta Section --> */}

            {/* <!-- ======= Services Section ======= --> */}
        </div>
    )
}

export default Client;
