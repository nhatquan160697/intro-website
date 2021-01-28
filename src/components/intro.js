import React from 'react';
import imgHeader from '../layouts/img/dream-pulse-header.jpg'

class Intro extends React.Component {
  render() {
    return (
      <main role="main" className="ml-sm-auto col-12">
        <div
          className="parallax-window"
          data-parallax="scroll"
          data-image-src={imgHeader}>
          <div className="tm-section-wrap">
            <section id="intro" className="tm-section">
              <div className="tm-bg-white-transparent tm-intro">
                <h2 className="tm-section-title mb-5 text-uppercase tm-color-primary">Introducing Dream Pulse</h2>
                <p className="tm-color-gray">
                  This box alpha 30 percent. Left sidebar is a sticky element.
                  Right side Contents are scrolling up and down. This background has a
                  parallax effect.
                      </p>
                <p className="mb-0 tm-color-gray">
                  Dream Pulse is a Bootstrap 4.3.1 template designed for your websites. You can modify this layout as you like.
                      </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    );
  }
}

export default Intro