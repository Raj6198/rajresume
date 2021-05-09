import React, { Component } from 'react';
import Head from 'next/head';
import Layout from '../components/layout';
import Router from 'next/router';

class index extends Component {

  render() {
    return (
      <Layout>
        <div className="parent-container">
          <div>
            <div className="row landing-banner mt-100vh">
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default index;