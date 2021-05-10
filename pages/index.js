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
    this.interval = setInterval(() => {
      this.setState({ backgroundImage: "url(/static/images/intro1.jpg)" }, () => {
        this.interval = setInterval(() => {
          this.setState({ backgroundImage: "url(/static/images/intro4.jpg)" })
        }, 8000);
      })
    }, 4000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <Layout>
        <div className="parent-container">
          <div style={{ backgroundImage: this.state.backgroundImage }} className="row landing-banner mt-100vh">
            
          </div>
        </div>
      </Layout>
    );
  }
}

export default index;