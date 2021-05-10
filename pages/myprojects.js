import React, { Component } from 'react';
import Layout from '../components/layout';
import { myService } from "../properties/services";
import JsonData from '../data/myproject.json'

class myprojects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      my_projects: []
    }
  }

  componentDidMount() {
    if(JsonData) {
      this.setState ({ my_projects: JsonData?.project_details?.project })
    }
    myService.sentHighlight('myproject');
    localStorage.setItem('highlight', 'myproject');
  }

  render() {
    const { my_projects } = this.state
    return (
      <Layout>
        <div className="parent-container">
          <div style={{ backgroundImage: "url(/static/images/myproject.jpg)" }} className="row landing-myprojects">
            <div className="col-lg-6 offset-xl-1 d-flex myprojects align-items-center p-lg-0 px-3">
              <div className="col-lg-8 p-0">
                <div className="row m-0">
                  <h1><span className="span">Total Project</span> - {my_projects.length}</h1>
                  {my_projects.length > 0 && my_projects.map(x => {
                    return (
                      <div className="col-lg-9 p-0">
                        <dl className="my-4">
                          <dt><span className="first-span">Project</span></dt>
                          <dd>{x.id}</dd>
                          <dt><span className="first-span">Project Title</span></dt>
                          <dd>{x.title}</dd>
                          <dt><span className="first-span">Period</span></dt>
                          <dd>{x.period}</dd>
                          <dt><span className="first-span">Relationship</span></dt>
                          <dd>{x.relation}</dd>
                          <dt><span className="first-span">Position</span></dt>
                          <dd>{x.position}</dd>
                          <dt><span className="first-span">User Interface</span></dt>
                          <dd>{x.ui}</dd>
                          <dt><span className="first-span">Tools</span></dt>
                          <dd>{x.tool}</dd>
                          <dt><span className="first-span">Project Description</span></dt>
                          <dd>{x.desc}</dd>
                          <dt><span className="first-span">URL</span></dt>
                          <dd>{x.url}</dd>
                        </dl>
                        <hr />
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default myprojects;