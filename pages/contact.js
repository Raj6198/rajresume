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
        
      </Layout>
    );
  }
}

export default contact;