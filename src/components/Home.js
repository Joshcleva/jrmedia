import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player/lazy";

class Home extends Component {
  render() {
    return (
      <div>
        {/* <!-- //header -->
// <!-- banner --> */}
        <div class="banner_w3lspvt" id="home">
          <div class="csslider infinity" id="slider1">
            <input type="radio" name="slides" checked="checked" id="slides_1" />
            <input type="radio" name="slides" checked="checked" id="slides_2" />
            <input type="radio" name="slides" checked="checked" id="slides_3" />
            <input type="radio" name="slides" checked="checked" id="slides_4" />
            <input type="radio" name="slides" checked="checked" id="slides_5" />
            <input type="radio" name="slides" checked="checked" id="slides_6" />

            <ul class="banner_slide_bg">
              <li>
                <div class="slider-info bg1">
                  <div class="bs-slider-overlay">
                    <div class="banner-text">
                      <div class="container">
                        <h2 class="movetxt agile-title text-capitalize">
                          High Quality, Convenient, Affordable Photo & Video
                          Graphers
                        </h2>
                        <p>
                          We are the home of perfect shots, colorfull wedding
                          memories, family moments, photoshop, wedding cards,
                          photo frames and awesome visual shots.
                        </p>

                        <Link to="/contact" class="btn">
                          Get appointment
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="slider-info bg2">
                  <div class="bs-slider-overlay1">
                    <div class="banner-text">
                      <div class="container">
                        <h4 class="movetxt agile-title text-capitalize">
                          Capturing your family’s unique personalities
                        </h4>
                        <p>
                          Capturing your family’s unique personalities is the
                          heart of what we do. Our trained photographers spend
                          time discovering and understanding the most meaningful
                          moments.
                        </p>
                        <Link to="/contact" class="btn">
                          Get appointment
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="slider-info bg3">
                  <div class="bs-slider-overlay1">
                    <div class="banner-text">
                      <div class="container">
                        <h2 class="movetxt agile-title text-capitalize">
                          We Design and Create Latest Fashion Styles
                        </h2>
                        <p>
                          A multi-award-winning digital media platform that sits
                          at the intersection of photography and everything.
                        </p>
                        <Link to="/contact" class="btn">
                          Get appointment
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="slider-info bg4">
                  <div class="bs-slider-overlay1">
                    <div class="banner-text">
                      <div class="container">
                        <h4 class="movetxt agile-title text-capitalize">
                          We capture the best wedding moments and memories
                        </h4>
                        <p>
                          Jr MEDIA is the king and available to capture your
                          total wedding experience, from the rehearsal dinner to
                          the brunch afterwards.
                        </p>
                        <Link to="/contact" class="btn">
                          Get appointment
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <div class="navigation">
              <div>
                <label for="slides_1"></label>
                <label for="slides_2"></label>
                <label for="slides_3"></label>
                <label for="slides_4"></label>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- //banner -->
//  <!-- banner bottom grids --> */}
        <section class="content-info py-5" id="about">
          <div class="container py-md-5">
            <h3 class="heading text-center mb-3 mb-sm-5">About us</h3>

            <div class="info-w3pvt-mid text-center px-lg-5">
              <div class="title-desc text-center px-lg-5">
                <img
                  src="assets/images/about1.jpg"
                  alt="news-pic"
                  class="img-fluid"
                />
                <p class="px-lg-5">
                  Praesent ullamcorper dui turpis.At vero eos et accusam et
                  justo duo dolores et ea rebum.Integer sit amet mattis quam,
                  sit amet ultricies velit. Praesent ullamcorper dui turpis.
                  Praesent ullamcorper dui turpis.At vero eos et accusam et
                  justo duo dolores et ea rebum.Integer sit amet mattis quam,
                  sit amet ultricies velit. Praesent ullamcorper dui turpis.
                </p>

                <Link
                  to="/services"
                  class="btn mt-lg-4 mt-3 read scroll"
                  role="button"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- //banner bottom grids -->

//  <!-- /services --> */}
        <section class="services py-5" id="services">
          <div class="container py-md-5">
            <h3 class="heading text-center mb-3 mb-sm-5">Services</h3>
            <div class="row ab-info">
              <div class="col-md-6 ab-content ab-content1">
                <div class="ab-content-inner">
                  <Link to="/services">
                    <img
                      src="assets/images/services2.jpg"
                      alt="news-pic"
                      class="img-fluid"
                    />
                  </Link>
                  <div class="ab-info-con">
                    <h4> Photography</h4>
                    <Link
                      to="/services"
                      class="read-more two btn m-0 px-3"
                      role="button"
                    >
                      <span class="fa fa-arrow-circle-o-right"> </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div class="col-md-6 ab-content ab-content1">
                <div class="ab-content-inner">
                  <Link to="/services">
                    <ReactPlayer
                      controls={true}
                      fluid={true}
                      width="auto"
                      height="300px"
                      url="https://www.youtube.com/watch?v=eG3zJDG6Stg"
                    />
                  </Link>
                  <div class="ab-info-con">
                    <h4>Videography</h4>
                    <a href="services.html" class="read-more two btn m-0 px-3">
                      <span class="fa fa-arrow-circle-o-right"> </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="row ab-info second mt-lg-4">
              <div class="col-md-3 ab-content">
                <div class="ab-content-inner">
                  <Link to="/single">
                    <img
                      src="assets/images/ser3.jpg"
                      alt="news-pic"
                      class="img-fluid"
                    />
                  </Link>
                  <div class="ab-info-con">
                    <h4>graphics designing</h4>
                    <a href="single.html" class="read-more two btn m-0 px-3">
                      <span class="fa fa-arrow-circle-o-right"> </span>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-3 ab-content">
                <div class="ab-content-inner">
                  <Link to="/single">
                    <img
                      src="assets/images/ser4.jpg"
                      alt="news-pic"
                      class="img-fluid"
                    />
                  </Link>
                  <div class="ab-info-con">
                    <h4>Wedding Cards</h4>
                    <a href="single.html" class="read-more two btn m-0 px-3">
                      <span class="fa fa-arrow-circle-o-right"> </span>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-3 ab-content">
                <div class="ab-content-inner">
                  <Link to="/single">
                    <img
                      src="assets/images/ser5.jpg"
                      alt="news-pic"
                      class="img-fluid"
                    />
                  </Link>
                  <div class="ab-info-con">
                    <h4>PhotoShop</h4>
                    <a href="single.html" class="read-more two btn m-0 px-3">
                      <span class="fa fa-arrow-circle-o-right"> </span>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-3 ab-content">
                <div class="ab-content-inner">
                  <Link to="/single">
                    <img
                      src="assets/images/ser6.jpg"
                      alt="news-pic"
                      class="img-fluid"
                    />
                  </Link>
                  <div class="ab-info-con">
                    <h4>Death Cards</h4>
                    <a href="single.html" class="read-more two btn m-0 px-3">
                      <span class="fa fa-arrow-circle-o-right"> </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* // <!-- /services -->
 
	// <!-- pricing -->  */}
        <section class="pricing py-5">
          <div class="container py-md-5">
            <h3 class="heading text-capitalize text-center mb-3 mb-sm-5">
              Our Pricing
            </h3>
            <div class="row pricing-grids">
              <div class="col-lg-6  mb-lg-0 mb-5">
                <div class="padding">
                  <h3>PRICES FOR PHOTOGRAPHY</h3>
                  {/* <!-- Item starts --> */}
                  <div class="menu-item">
                    <div class="row border-dot no-gutters">
                      <div class="col-8 menu-item-name">
                        <h6>Wedding Ceremony Hire</h6>
                      </div>
                      <div class="col-4 menu-item-price text-right">
                        <h6>100000Shs</h6>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Item ends -->
					<!-- Item starts --> */}
                  <div class="menu-item my-4">
                    <div class="row border-dot no-gutters">
                      <div class="col-8 menu-item-name">
                        <h6>Snapshot in Photo Studio</h6>
                      </div>
                      <div class="col-4 menu-item-price text-right">
                        <h6>2000Shs</h6>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Item ends -->
					<!-- Item starts --> */}
                  <div class="menu-item">
                    <div class="row border-dot no-gutters">
                      <div class="col-8 menu-item-name">
                        <h6>Wedding Card</h6>
                      </div>
                      <div class="col-4 menu-item-price text-right">
                        <h6>10000Shs</h6>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Item ends -->
					<!-- Item starts --> */}
                  <div class="menu-item mt-4">
                    <div class="row border-dot no-gutters">
                      <div class="col-8 menu-item-name">
                        <h6>Death Card</h6>
                      </div>
                      <div class="col-4 menu-item-price text-right">
                        <h6>5000Shs</h6>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Item ends -->
					<!-- Item starts --> */}
                  <div class="menu-item mt-4">
                    <div class="row border-dot no-gutters">
                      <div class="col-8 menu-item-name">
                        <h6>PhotoShop</h6>
                      </div>
                      <div class="col-4 menu-item-price text-right">
                        <h6>1500Shs</h6>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Item ends -->
					<!-- Item starts --> */}
                  {/* <!-- Item ends -->
					<!-- Item starts --> */}
                  <div class="menu-item mt-4">
                    <div class="row border-dot no-gutters">
                      <div class="col-8 menu-item-name">
                        <h6>Photo Framing</h6>
                      </div>
                      <div class="col-4 menu-item-price text-right">
                        <h6>30000Shs</h6>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Item ends -->
					<!-- Item starts --> */}
                  {/* <!-- Item ends --> */}
                </div>
              </div>
              <div class="col-lg-6  mb-lg-0 mb-5">
                <div class="padding">
                  <h3>PRICES FOR VIDEOGRAPHY</h3>
                  {/* <!-- Item starts --> */}
                  <div class="menu-item">
                    <div class="row border-dot no-gutters">
                      <div class="col-8 menu-item-name">
                        <h6>Wedding Ceremony Hire</h6>
                      </div>
                      <div class="col-4 menu-item-price text-right">
                        <h6>250000Shs</h6>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Item ends -->
					<!-- Item starts --> */}
                  <div class="menu-item my-4">
                    <div class="row border-dot no-gutters">
                      <div class="col-8 menu-item-name">
                        <h6>Video Graphics</h6>
                      </div>
                      <div class="col-4 menu-item-price text-right">
                        <h6>100000Shs</h6>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Item ends -->
					<!-- Item starts --> */}
                  <div class="menu-item">
                    <div class="row border-dot no-gutters">
                      <div class="col-8 menu-item-name">
                        <h6>Graphics Design</h6>
                      </div>
                      <div class="col-4 menu-item-price text-right">
                        <h6>20000Shs</h6>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Item ends -->
					<!-- Item starts --> */}
                  <div class="menu-item mt-4">
                    <div class="row border-dot no-gutters">
                      <div class="col-8 menu-item-name">
                        <h6>Concert Video Capture</h6>
                      </div>
                      <div class="col-4 menu-item-price text-right">
                        <h6>150000Shs</h6>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Item ends -->
					<!-- Item starts --> */}
                  <div class="menu-item mt-4">
                    <div class="row border-dot no-gutters">
                      <div class="col-8 menu-item-name">
                        <h6>Song Video Capture</h6>
                      </div>
                      <div class="col-4 menu-item-price text-right">
                        <h6>200000Shs</h6>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Item ends -->
					<!-- Item starts --> */}
                  {/* <!-- Item ends -->
					<!-- Item starts --> */}
                  <div class="menu-item mt-4">
                    <div class="row border-dot no-gutters">
                      <div class="col-8 menu-item-name">
                        <h6>Visual Shots</h6>
                      </div>
                      <div class="col-4 menu-item-price text-right">
                        <h6>80000Shs</h6>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Item ends -->
					<!-- Item starts --> */}
                  {/* <!-- Item ends --> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- //pricing -->
//   <!--/order-now--> */}
        <section class="order-sec py-5">
          <div class="container py-md-5">
            <div class="test-info text-center">
              <h3 class="tittle order">
                <span>CALL Jr MEDIA STUDIO TO BOOK An APPOINTMENT</span>Our team
                will call back immediately and Book the Appointment
              </h3>
              <h4 class="tittle my-2">123456789 </h4>

              <div class="read-more mx-auto m-0 text-center">
                <Link to="/contact" class="read-more scroll btn">
                  Click here
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* <!--//order-now-->

//  <!--/testimonials--> */}
        <section class="testimonials py-5" id="testimonials">
          <div class="container py-md-5">
            <h3 class="heading text-center mb-3 mb-sm-5">Client Reviews</h3>
            <div class="row mt-3">
              <div class="col-md-4 test-grid text-left px-lg-3">
                <div class="test-info">
                  <p>
                    Lorem Ipsum has been the industry's standard since the
                    1500s. Praesent ullamcorper dui turpis.
                  </p>
                  <h3 class="mt-md-4 mt-3 text-center">Birungi Tasha</h3>

                  <div class="test-img text-center mb-3">
                    <img
                      src="assets/images/test1.jpg"
                      class="img-fluid"
                      alt="user-pic"
                    />
                  </div>
                  <div class="mobl-footer test-soc text-center">
                    <ul class="list-unstyled">
                      <li>
                        <a href="/contact">
                          <span class="fa fa-facebook-f"></span>
                        </a>
                      </li>
                      <li class="mx-1">
                        <a href="/contact">
                          <span class="fa fa-twitter"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-md-4 test-grid text-left px-lg-3 py-sm-5 py-md-0 py-3">
                <div class="test-info">
                  <p>
                    Lorem Ipsum has been the industry's standard since the
                    1500s. Praesent ullamcorper dui turpis.
                  </p>
                  <h3 class="mt-md-4 mt-3 text-center"> Bwambale Joshua</h3>
                  <div class="test-img text-center mb-3">
                    <img
                      src="assets/images/test2.jpg"
                      class="img-fluid"
                      alt="user-pic"
                    />
                  </div>
                  <div class="mobl-footer test-soc text-center">
                    <ul class="list-unstyled">
                      <li>
                        <a href="/contact">
                          <span class="fa fa-facebook-f"></span>
                        </a>
                      </li>
                      <li class="mx-1">
                        <a href="/contact">
                          <span class="fa fa-twitter"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-md-4 test-grid text-left px-lg-3">
                <div class="test-info">
                  <p>
                    Lorem Ipsum has been the industry's standard since the
                    1500s. Praesent ullamcorper dui turpis.
                  </p>
                  <h3 class="mt-md-4 mt-3 text-center">Kashim Nairobi</h3>

                  <div class="test-img text-center mb-3">
                    <img
                      src="assets/images/test3.jpg"
                      class="img-fluid"
                      alt="user-pic"
                    />
                  </div>
                  <div class="mobl-footer test-soc text-center">
                    <ul class="list-unstyled">
                      <li>
                        <a href="/contact">
                          <span class="fa fa-facebook-f"></span>
                        </a>
                      </li>
                      <li class="mx-1">
                        <a href="/contact">
                          <span class="fa fa-twitter"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--//testimonials-->
// <!-- subscribe --> */}
        <section class="subscribe" id="subscribe">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-5 d-flex subscribe-left p-lg-5 py-sm-5 py-4">
                <div class="news-icon mr-3">
                  <span class="fa fa-paper-plane" aria-hidden="true"></span>
                </div>
                <div class="text">
                  <h3>Subscribe To Our Newsletter</h3>
                </div>
              </div>
              <div class="col-md-7 subscribe-right p-lg-5 py-sm-5 py-4">
                <form action="#" method="post">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email here"
                    required=""
                  />
                  <button class="btn1">
                    <span class="fa fa-paper-plane" aria-hidden="true"></span>
                  </button>
                </form>
                <p>we never share your email with anyone else</p>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- //subscribe -->
// <!-- footer --> */}
      </div>
    );
  }
}
export default Home;
