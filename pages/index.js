import React, { Component } from 'react';
import Head from 'next/head';
import Layout from '../components/layout';
import Router from 'next/router';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundImage: "url(/static/images/intro.jpg)"
    }
  }

  componentDidMount() {
    this.handleBackgroundImage();
  }

  // Change Backgroud Image funtion:
  handleBackgroundImage() {
    // this.interval = setTimeout(() => {
    //   this.setState({ backgroundImage: "url(/static/images/intro1.jpg)" }, () => {
    //     this.interval = setTimeout(() => {
    //       this.setState({ backgroundImage: "url(/static/images/intro4.jpg)" }, () => {
    //         this.interval = setTimeout(() => {
    //           this.setState({ backgroundImage: "url(/static/images/intro.jpg)" })
    //         }, 12000)
    //       })
    //     }, 8000);
    //   })
    // }, 4000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { backgroundImage } = this.state
    return (
      <Layout>
        <div className="parent-container">
          <div style={{ backgroundImage: this.state.backgroundImage }} className="row landing-banner mt-100vh">
            <div className="col-md-10 offset-md-1 col-lg-6 offset-xl-1 col-lg-2 d-flex align-items-center justify-content-lg-start justify-content-center">
              {backgroundImage === "url(/static/images/intro.jpg)" && <div className="home-content">
                <div className="d-flex align-items-start">
                  <h1 className="mb-3">
                    <span className="text-spac">OBJECTIVE</span> <br />
                  </h1>
                </div>
                <p className="mb-2">A versatile, <span className="first-span" >high-energy Website developer</span> with the distinction of executing projects of large
                magnitude within strict time schedule.</p>
              </div>}
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default index;