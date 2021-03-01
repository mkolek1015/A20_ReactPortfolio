import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact" class="s-contact target-section">

        <div class="row s-contact__header">
            <div class="column large-12">
                <h3 class="section-header-allcaps">Say Hello</h3>
            </div>
        </div>

        <div class="row s-contact__content">

            <div class="column large-7 medium-12">

                <h4 class="huge-text">
                Have a new project in mind? Let's collaborate and build something awesome. 
                Let's turn that idea to an even greater product.
                </h4>

            </div>

            <div class="column large-4 medium-12">

                <div class="row contact-infos">
                    <div class="column large-12 medium-6 tab-12">
                        <div class="contact-block">
                            <h5 class="contact-block__header">
                                Email
                            </h5>
                            <p class="contact-block__content">
                                <a class="mailtoui" href="mailto:mkolek7@yahoo.com">mkolek7@yahoo.com</a>
                            </p>
                        </div> 
                        {/* <!-- end contact-block --> */}
                    </div>
                    <div class="column large-12 medium-6 tab-12">
                        <div class="contact-block">
                            <h5 class="contact-block__header">
                                Phone
                            </h5>
                            <p class="contact-block__content">
                                <a href="tel:+2034170261">+203 417 0261</a>
                            </p>
                        </div> 
                        {/* <!-- end contact-block --> */}
                    </div>

                    <div class="column large-12">
                        <a href="mailto:mkolek7@yahoo.com" class="mailtoui btn btn--primary h-full-width">Let's Talk</a>
                    </div>
                </div> 
                {/* <!-- end contact-infos --> */}

            </div>
        </div> 
        {/* <!-- s-contact__content --> */}

    </section> 
    // <!-- end s-contact -->
    );
  }
}