import React from 'react';

class Contacts extends React.Component {
  render() {
    return (
      <div className="tm-section-wrap bg-white">
        <section id="talk" className="row tm-section">
          <div className="col-xl-6 mb-5">
            <div className="tm-double-border-1 tm-border-gray">
              <div className="tm-double-border-2 tm-border-gray tm-box-pad">
                <h2 className="tm-color-primary tm-section-title mb-4">Talk to Us</h2>
                <p className="mb-4">
                  Sed aliquet, nibh ac hendrerit faucibus, tellus metus viverra
                  tellus, vel volutpat purus orci ac ex.
                      </p>
                <p className="mb-3">
                  120-240 Orci varius natoque penatibus, <br />
                        parturient montes, 10660 <br />
                        nasvetur ridiculus mus
                      </p>
              </div>
            </div>
          </div>
          <div className="col-xl-6 mb-5">
            <div className="tm-contact-form-wrap">
              <form action="" method="POST" className="tm-contact-form">
                <div className="form-group">
                  <input type="text" id="contact_name" name="contact_name" className="form-control rounded-0 border-top-0 border-right-0 border-left-0" placeholder="Your Name" required="" />
                </div>
                <div className="form-group">
                  <input type="email" id="contact_email" name="contact_email" className="form-control rounded-0 border-top-0 border-right-0 border-left-0" placeholder="Your Email" required="" />
                </div>

                <div className="form-group">
                  <textarea rows="4" id="contact_message" name="contact_message" className="form-control rounded-0 border-top-0 border-right-0 border-left-0" placeholder="Message..." required=""></textarea>
                </div>

                <div className="form-group mb-0">
                  <button type="submit" className="btn rounded-0 d-block ml-auto tm-btn-primary">
                    SEND
                        </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Contacts
