import React from 'react';
import gallery01 from '../layouts/img/gallery/01.jpg'

class Work extends React.Component {
  render() {
    return (
      <div className="tm-section-wrap bg-white">
        <section id="work" className="row tm-section">
          <div className="col-12">
            <div className="w-100 tm-double-border-1 tm-border-gray">
              <div className="tm-double-border-2 tm-border-gray tm-box-pad">
                <div className="tm-gallery-wrap">
                  <h2 className="tm-color-primary tm-section-title mb-4 ml-2">Our Work</h2>
                  <div className="tm-gallery">
                    <div className="tm-gallery-item">
                      <figure className="effect-bubba">
                        <img src={gallery01} alt="" className="img-fluid" />
                        <figcaption>
                          <h2>Fresh <span>Bubba</span></h2>
                          <p>Bubba likes to appear out of thin air.</p>
                          <a href="img/gallery/large/01.jpg">View more</a>
                        </figcaption>
                      </figure>
                    </div>
                    <div className="tm-gallery-item">
                      <figure className="effect-bubba">
                        <img src="img/gallery/02.jpg" alt="" className="img-fluid" />
                        <figcaption>
                          <h2>Fresh <span>Bubba</span></h2>
                          <p>Bubba likes to appear out of thin air.</p>
                          <a href="img/gallery/large/02.jpg">View more</a>
                        </figcaption>
                      </figure>
                    </div>
                    <div className="tm-gallery-item">
                      <figure className="effect-bubba">
                        <img src="img/gallery/03.jpg" alt="" className="img-fluid" />
                        <figcaption>
                          <h2>Fresh <span>Bubba</span></h2>
                          <p>Bubba likes to appear out of thin air.</p>
                          <a href="img/gallery/large/03.jpg">View more</a>
                        </figcaption>
                      </figure>
                    </div>
                    <div className="tm-gallery-item">
                      <figure className="effect-bubba">
                        <img src="img/gallery/04.jpg" alt="" className="img-fluid" />
                        <figcaption>
                          <h2>Fresh <span>Bubba</span></h2>
                          <p>Bubba likes to appear out of thin air.</p>
                          <a href="img/gallery/large/04.jpg">View more</a>
                        </figcaption>
                      </figure>
                    </div>
                    <div className="tm-gallery-item">
                      <figure className="effect-bubba">
                        <img src="img/gallery/05.jpg" alt="" className="img-fluid" />
                        <figcaption>
                          <h2>Fresh <span>Bubba</span></h2>
                          <p>Bubba likes to appear out of thin air.</p>
                          <a href="img/gallery/large/05.jpg">View more</a>
                        </figcaption>
                      </figure>
                    </div>
                    <div className="tm-gallery-item">
                      <figure className="effect-bubba">
                        <img src="img/gallery/06.jpg" alt="" className="img-fluid" />
                        <figcaption>
                          <h2>Fresh <span>Bubba</span></h2>
                          <p>Bubba likes to appear out of thin air.</p>
                          <a href="img/gallery/large/06.jpg">View more</a>
                        </figcaption>
                      </figure>
                    </div>
                    <div className="tm-gallery-item">
                      <figure className="effect-bubba">
                        <img src="img/gallery/07.jpg" alt="" className="img-fluid" />
                        <figcaption>
                          <h2>Fresh <span>Bubba</span></h2>
                          <p>Bubba likes to appear out of thin air.</p>
                          <a href="img/gallery/large/07.jpg">View more</a>
                        </figcaption>
                      </figure>
                    </div>
                    <div className="tm-gallery-item">
                      <figure className="effect-bubba">
                        <img src="img/gallery/08.jpg" alt="" className="img-fluid" />
                        <figcaption>
                          <h2>Fresh <span>Bubba</span></h2>
                          <p>Bubba likes to appear out of thin air.</p>
                          <a href="img/gallery/large/08.jpg">View more</a>
                        </figcaption>
                      </figure>
                    </div>
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

export default Work
