import React from 'react';

class Clients extends React.Component {
  render() {
    return (
      <div className="tm-section-wrap bg-white">
        <section id="clients" className="row tm-section">
          <div className="col-12 tm-section-pad">
            <div className="tm-flex-item-left">
              <div className="tm-w-80">
                <h2 className="tm-color-primary tm-section-title mb-4">Our Clients</h2>
                <p className="mb-5">
                  Aenean est augue, iaculis ut arcu a, cursus tempus eros.
                  Maecenas ut efficitur lectus, vel commodo nibh. Vivamus
                  consequat massa non euismod facilisis. Morbi assumsan non libero
                  a vehicula. Donec blandit suscipit magna sit amet elementum.
                        </p>
              </div>

              <div className="row tm-clients-images">
                <div className="col-xl-3 col-lg-6 col-md-4 col-sm-6 tm-img-wrap">
                  <a href="https://google.com">
                    <img src="img/client-1.png" alt="" className="img-fluid tm-client-img" />
                  </a>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-4 col-sm-6 tm-img-wrap">
                  <a href="https://facebook.com">
                    <img src="img/client-2.png" alt="" className="img-fluid tm-client-img" />
                  </a>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-4 col-sm-6 tm-img-wrap">
                  <a href="https://twitter.com">
                    <img src="img/client-3.png" alt="" className="img-fluid tm-client-img" />
                  </a>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-4 col-sm-6 tm-img-wrap">
                  <a href="https://instagram.com">
                    <img src="img/client-4.png" alt="" className="img-fluid tm-client-img" />
                  </a>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-4 col-sm-6 tm-img-wrap">
                  <a href="https://google.com">
                    <img src="img/client-5.png" alt="" className="img-fluid tm-client-img" />
                  </a>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-4 col-sm-6 tm-img-wrap">
                  <a href="https://facebook.com">
                    <img src="img/client-6.png" alt="" className="img-fluid tm-client-img" />
                  </a>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-4 col-sm-6 tm-img-wrap">
                  <a href="https://twitter.com">
                    <img src="img/client-7.png" alt="" className="img-fluid tm-client-img" />
                  </a>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-4 col-sm-6 tm-img-wrap">
                  <a href="https://instagram.com">
                    <img src="img/client-8.png" alt="" className="img-fluid tm-client-img" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Clients
