import React, { Component } from 'react';
import Head from 'next/head';
import Layout from '../components/layout';
import Router from 'next/router';
import JsonData from '../data/profdetails.json'

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundImage: "url(/static/images/intro.jpg)",
      proff_details: []
    }
  }

  componentDidMount() {
    if(JsonData) {
      this.setState ({ proff_details: JsonData?.Professional_details?.object })
    }
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

  handleProfession = () => {
    this.setState({ backgroundImage: "" });
  }

  render() {
    const { backgroundImage, proff_details } = this.state
    return (
      <Layout>
        <div className="parent-container">
          <div style={{ backgroundImage: this.state.backgroundImage }} className="row landing-banner mt-100vh">
            <div className="">
                <div onClick={this.backDelivery}><h3 className="back-bottom"><img className="mr-3" src="/static/images/bottom-back.png" />Back</h3></div>
            </div>
            <div className="col-md-10 offset-md-1 col-lg-6 offset-xl-1 col-lg-2 d-flex align-items-center justify-content-lg-start justify-content-center">
              {backgroundImage === "url(/static/images/intro.jpg)" && <div className="home-content">
                <div className="d-flex align-items-start">
                  <h1 className="mb-3">
                    <span className="text-spac">OBJECTIVE</span> <br />
                  </h1>
                </div>
                <p className="mb-2">A versatile, <span className="first-span" >high-energy Website developer</span> with the distinction of executing projects of large
                magnitude within strict time schedule. <span onClick={this.handleProfession} className="second-span">Professional Experience</span></p>
              </div>}
              {backgroundImage === "" && <div className="prof-content">
                <div className="d-flex align-items-start">
                  <h1 className="mb-3">
                    <span className="text-Prof">Professional Experience:</span> <br />
                  </h1>
                </div>
                {proff_details.map(x => {
                  return (
                    <p className="mb-2 prof">* {x.val}</p>
                  )
                })}
              </div>}
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default index;