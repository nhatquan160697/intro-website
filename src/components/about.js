import React from 'react';

class About extends React.Component {
  render() {
    return (
      <div className="tm-section-wrap bg-white">
        <section id="about" className="row tm-section">
          <div className="col-xl-6">
            <div className="tm-section-half">
              <div><i className="fas fa-6x fa-balance-scale mb-5 tm-section-icon"></i></div>
              <h2 className="tm-section-title tm-color-primary mb-5">About Us</h2>
              <p className="mb-5">
                When first section is scrolled up, BG image will be
                disappeared with a parallax effect. Donec ac tempor tellus, a
                eleifend ligula. Fusce vitae sem sed purus euismod
                condimentum.
                  </p>
              <p>
                Sed at orci non metus tristique suscipit vitae in nibh. Sed
                rutrum odio ac est hendrerit, at vestibulum felis condimentum.
                  </p>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="tm-section-half">
              <div><i className="far fa-6x fa-building mb-5 tm-section-icon"></i></div>
              <h2 className="tm-section-title tm-color-primary mb-5">Company Profile</h2>
              <p className="mb-5">
                You can use this template for your commercial websites or for your clients.
                You are NOT allowed to re-post this template as a downloadable ZIP file
                on your template collection sites. It is illegal.
                  </p>
              <p>
                Suspendisse fermentum orci eget lorem euismod suscipit. Morbi
                condimentum odio metus, at finibus dolor sollicitudin quis.
                Curabitur eu congue erat.
                  </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default About
