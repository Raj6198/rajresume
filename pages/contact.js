import React, { Component } from 'react';
import Layout from '../components/layout';
import { myService } from "../properties/services";

class contact extends Component {

  componentDidMount() {
    myService.sentHighlight('contact');
    localStorage.setItem('highlight', 'myStory');
  }

  render() {
    return (
      <Layout>
        <div className="parent-container">
          <div style={{ backgroundImage: "url(/static/images/contact-us.jpg)" }} className="row landing-banner">
            <div className="col-lg-6 offset-xl-2 d-flex contactus align-items-center p-lg-0 px-3">
              <div className="col-lg-8 p-0">
                <div className="row m-0">
                  <h1>Contact Us</h1>
                  <div className="col-lg-9 p-0">
                      <h3 className="my-4 mx-4">Rajkumar K</h3>
                      <h3 className="my-4 mx-4">+91-8838608624</h3>
                      <h3 className="my-4 mx-4">kannanrajkumar1698@gmail.com</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default contact;