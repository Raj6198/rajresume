import React, { Component } from 'react';
import Layout from '../components/layout';
import { myService } from "../properties/services";

class mystory extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    myService.sentHighlight('myStory');
    localStorage.setItem('highlight', 'myStory');
  }

  render() {
    return (
      <Layout>
        <div className="parent-container">
          <div className="row my-story">

          </div>
        </div>
      </Layout>
    );
  }
}

export default mystory;