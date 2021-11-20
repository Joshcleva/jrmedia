import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player/lazy";

class About extends Component {
  render() {
    return (
      <div>
        {/* <!-- banner --> */}
        <section class="inner-page-banner" id="home"></section>
        {/* <!-- //banner -->
<!-- page details --> */}
        <div class="breadcrumb-agile">
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              About Us
            </li>
          </ol>
        </div>
        {/* <!-- //page details -->
	<!--about-mid --> */}
        <section class="banner-bottom py-5" id="exp">
          <div class="container py-md-5">
            <h3 class="heading text-center mb-3 mb-sm-5">
              About Jr Media Studio
            </h3>
            <div class="row mid-grids mt-lg-5 mt-3">
              <div class="col-md-5 content-w3pvt-img">
                <img src="assets/images/ab1.jpg" alt="ceo-image" class="img-fluid" />
              </div>
              <div class="col-md-7 content-left-bottom entry-w3ls-info text-left mt-3">
                <h5 class="mt-1">PHOTOGRAHY </h5>
                <h4>
                  We snap with experience
                  <br />
                  perfection & agility
                </h4>
                <p class="mt-2 text-left">
                  Integer pulvinar leo id viverra feugiat.Pellentesque libero
                  justo, semper at tempus vel, ultrices in sed ligula. Nulla
                </p>
              </div>
            </div>
            <div class="row mid-grids mt-lg-5 mt-3 py-3">
              <div class="col-md-7 content-left-bottom entry-w3ls-info text-left mt-3">
                <h5 class="mt-1">VIDEOGRAPHY</h5>
                <h4>
                  experience in Visual
                  <br />
                  for 15 years
                </h4>
                <p class="mt-2 text-left">
                  Integer pulvinar leo id viverra feugiat.Pellentesque libero
                  justo, semper at tempus vel, ultrices in sed ligula. Nulla
                </p>
              </div>
              <div class="col-md-5 content-w3pvt-img mt-lg-0 mt-3">
                <ReactPlayer
                  controls={true}
                  fluid={true}
                  width="auto"
                  height="300px"
                  url="https://www.youtube.com/watch?v=eG3zJDG6Stg"
                />
              </div>
            </div>
          </div>
        </section>
        {/* <!-- //about-mid -->
<!-- states --> */}
        <section class="stats-count">
          <div class="overlay py-5">
            <div class="container py-md-5">
              <div class="row text-center">
                <div class="col-lg-3 col-md-3 col-sm-3 col-6 my-3 number-wthree-info ">
                  <h5>867 +</h5>
                  <h6 class="pt-2">clients</h6>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-3 col-6 my-3 number-wthree-info">
                  <h5>1282 +</h5>
                  <h6 class="pt-2">photos</h6>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-3 col-6 my-3 number-wthree-info">
                  <h5>153 +</h5>
                  <h6 class="pt-2">videos</h6>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-3 col-6 my-3 number-wthree-info">
                  <h5>125</h5>
                  <h6 class="pt-2">Awards</h6>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--//states -->

 <!--//team --> */}
        <section class="banner-bottom  py-5">
          <div class="container py-md-5">
            <h3 class="heading text-center mb-3 mb-sm-5">Our Team</h3>
            <div class="row mt-lg-5 mt-4">
              <div class="col-md-4 team-gd text-center">
                <div class="team-img mb-4">
                  <img
                    src="assets/images/t1.jpg"
                    class="img-fluid"
                    alt="user-image"
                  />
                </div>
                <div class="team-info">
                  <h3 class="mt-md-4 mt-3">JACKROSS media</h3>
                  <p>C.E.O jr MEDIA studio</p>
                  <ul class="list-unstyled team-icons mt-4">
                    <li>
                      <a href="/contact" class="t-icon">
                        <span class="fa fa-facebook-f"></span>
                      </a>
                    </li>
                    <li>
                      <a href="/contact" class="t-icon">
                        <span class="fa fa-twitter"></span>
                      </a>
                    </li>
                    <li>
                      <a href="/contact" class="t-icon">
                        <span class="fa fa-dribbble"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-md-4 team-gd second text-center my-md-0 my-5">
                <div class="team-img mb-4">
                  <img
                    src="assets/images/t2.jpg"
                    class="img-fluid"
                    alt="user-image"
                  />
                </div>
                <div class="team-info">
                  <h3 class="mt-md-4 mt-3">ISHABELLAH GaGa</h3>
                  <p>SENIOR Photo & Video Grapher</p>
                  <ul class="list-unstyled team-icons mt-4">
                    <li>
                      <a href="/contact" class="t-icon">
                        <span class="fa fa-facebook-f"></span>
                      </a>
                    </li>
                    <li>
                      <a href="/contact" class="t-icon">
                        <span class="fa fa-twitter"></span>
                      </a>
                    </li>
                    <li>
                      <a href="/contact" class="t-icon">
                        <span class="fa fa-dribbble"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-4 team-gd text-center">
                <div class="team-img mb-4">
                  <img
                    src="assets/images/t3.png"
                    class="img-fluid"
                    alt="user-image"
                  />
                </div>
                <div class="team-info">
                  <h3 class="mt-md-4 mt-3">JOSH PROGRAMER</h3>
                  <p>Graphics & Web Designer</p>
                  <ul class="list-unstyled team-icons mt-4">
                    <li>
                      <a href="/contact" class="t-icon">
                        <span class="fa fa-facebook-f"></span>
                      </a>
                    </li>
                    <li>
                      <a href="/contact" class="t-icon">
                        <span class="fa fa-twitter"></span>
                      </a>
                    </li>
                    <li>
                      <a href="/contact" class="t-icon">
                        <span class="fa fa-dribbble"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default About;
