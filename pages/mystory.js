import React, { Component } from 'react';
import Layout from '../components/layout';
import { myService } from "../properties/services";

class mystory extends Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      address: '',
      showSignUp: true,
      data: []
    }
  }

  componentDidMount() {
    myService.sentHighlight('myStory');
    localStorage.setItem('highlight', 'myStory');
  }

  // handle Change Function:
  handleChange = (e) => {
    this.setState ({ [e.target.name] : e.target.value });
  }

  // HandleSubmit Function:
  handleSubmit = () => {
    const { firstName, lastName, email, password, address } = this.state
    const emailtest = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!firstName) {
      alert("Please enter your FirstName");
    } else if(!lastName) {
      alert("Please enter your LastName");
    } else if(!email) {
      alert("Please enter your Email");
    } else if(!emailtest.test(email)) {
      alert("please enter valid Email Address");
    } else if(!password) {
      alert("Please enter the password");
    } else if(!address) {
      alert("Please enter your address");
    } else {
      const params = {
        "firstName": firstName,
        "lastName": lastName,
        "email": email,
        "password": password,
        "address": address
      }
      console.log(params);
      localStorage.setItem("signupDetails", JSON.stringify(params));
      let data;
      if (localStorage.getItem("signupDetails")) {
        data = JSON.parse(localStorage.getItem("signupDetails"));
      }
      this.setState ({ showSignUp: false, data })
      alert("SignUp successfull");
    }
  }

  render() {
    const { data } = this.state
    return (
      <Layout>
        <div className="parent-container">
          <div className="row my-story">
            <div className="col-md-10 offset-md-1 col-lg-6 offset-xl-1 col-lg-2 d-flex align-items-center justify-content-lg-start justify-content-center">
              {this.state.showSignUp && <div className="form-graph row">
                <input type="text" className="form-control" placeholder="FirstName" name="firstName" value={this.state.firstName} onChange={(event) =>this.handleChange(event)}></input>
                <input type="text" className="form-control" placeholder="LastName" name="lastName" value={this.state.lastName} onChange={(event) =>this.handleChange(event)}></input>
                <input type="email" className="form-control" placeholder="Email" name="email" value={this.state.email} onChange={(event) =>this.handleChange(event)}></input>
                <input type="password" className="form-control" placeholder="Password" name="password" value={this.state.password} onChange={(event) =>this.handleChange(event)}></input>
                <textarea className="textArea" placeholder="Type your address" name="address" value={this.state.address} onChange={(event) =>this.handleChange(event)}></textarea>
                <button onClick={this.handleSubmit}>SignUp</button>
              </div>}
              {!this.state.showSignUp && <div>
                <h1>FirtName: {data.firstName}</h1>
                <h1>LastName: {data.lastName}</h1>
                <h1>Email: {data.email}</h1>
                <h1>Password: {data.password}</h1>
                <h1>Address: {data.address}</h1>
              </div>}
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default mystory;