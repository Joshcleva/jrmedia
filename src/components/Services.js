import React, { Component } from "react";
class Services extends Component {
  render() {
    return (
      <div>
        <section class="inner-page-banner" id="home"></section>

        <div class="breadcrumb-agile">
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Photography
            </li>
          </ol>
        </div>

        <section class="what-we-do py-5">
          <div class="container py-md-5">
            <h3 class="heading text-center mb-3 mb-sm-5">Our PhotoShop</h3>
            <div class="row what-we-do-grid">
              <div class="col-lg-3 col-md-6 pr-0 pl-md-3 pl-0">
                <img
                  src="assets/images/sp1.jpg"
                  class="img-fluid"
                  alt="pic-shop"
                />
              </div>
              <div class="col-lg-3 col-md-6 bg-grid-clr">
                <h4 class="mt-md-0 my-2">FASHION X STYLES</h4>
                <p class="">
                  Sed ut perspiciatis undert sed omnis natus error .
                </p>
              </div>
              <div class="col-lg-3 col-md-6 pr-0 pl-md-3 pl-0 mt-lg-0 mt-4">
                <img
                  src="assets/images/sp2.jpg"
                  class="img-fluid"
                  alt="pic-shop"
                />
              </div>
              <div class="col-lg-3 col-md-6 bg-grid-clr mt-lg-0 mt-md-4">
                <h4 class="mt-md-0 my-2">BLACK IS BEAUTY</h4>
                <p class="">
                  Sed ut perspiciatis undert sed omnis natus error .
                </p>
              </div>

              <div class="col-lg-3 col-md-6 pr-0 pl-md-3 pl-0 mt-lg-5 mt-4">
                <img
                  src="assets/images/sp3.jpg"
                  class="img-fluid"
                  alt="pic-shop"
                />
              </div>
              <div class="col-lg-3 col-md-6 bg-grid-clr mt-lg-5 mt-md-4">
                <h4 class="mt-md-0 my-2">MEMORIES</h4>
                <p class="">
                  Sed ut perspiciatis undert sed omnis natus error .
                </p>
              </div>
              <div class="col-lg-3 col-md-6 pr-0 pl-md-3 pl-0 mt-lg-5 mt-4">
                <img
                  src="assets/images/sp4.jpg"
                  class="img-fluid"
                  alt="pic-shop"
                />
              </div>
              <div class="col-lg-3 col-md-6 bg-grid-clr mt-lg-5 mt-md-4">
                <h4 class="mt-md-0 my-2">HOLIDAY SHOTS</h4>
                <p class="">
                  Sed ut perspiciatis undert sed omnis natus error .
                </p>
              </div>
            </div>
          </div>
        </section>

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

                  <div class="test-img mb-3 text-center">
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
                  <h3 class="mt-md-4 mt-3 text-center" text-center>
                    {" "}
                    Bwambale Joshua
                  </h3>
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
                  <h3 class="mt-md-4 mt-3 text-center">Kashimu Nairobi</h3>

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
      </div>
    );
  }
}
export default Services;
