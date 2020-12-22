import React, { Component } from "react";
import { NavLink } from "react-router-dom"
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';
class Signup extends Component {
  state = {
    fullName: '',
    email: '',
    password: ''
  }
  handleChangeInput = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value })
    console.log(this.state)
  }
  signup = (e) => {
    e.preventDefault();
    axios.post("/signupClient", this.state)
      .then((response) => {
        console.log(response)
        localStorage.setItem('login', response.data.token)
        localStorage.setItem('userId', response.data.userId)

      })
    this.setState({
      fullName: '',
      email: '',
      password: ''
    })

  }

  render() {
    // console.log(this.state)
    return (

      <section className="page-section" id="contact">
        <div class="container h-100">
          <div class="d-flex justify-content-center h-100">
            <div class="user_card">
              <div class="d-flex justify-content-center">
                <h3 id="form-title">REGISTER ACCOUNT</h3>
              </div>
              <div class="d-flex justify-content-center form_container">

                <form method="POST" action="">
                  <div class="input-group mb-3">
                    <div class="input-group-append">
                      <span class="input-group-text"><i class="fas fa-user"></i></span>
                    </div>
                    <input className="form-control" name="fullName" value={this.state.fullName} onChange={this.handleChangeInput} id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name." />
                  </div>
                  <div class="input-group mb-2">
                    <div class="input-group-append">
                      <span class="input-group-text"><i class="fas fa-envelope-square"></i></span>
                    </div>
                    <input className="form-control" name="email" value={this.state.email} onChange={this.handleChangeInput} id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address." />
                  </div>
                  <div class="input-group mb-2">
                    <div class="input-group-append">
                      <span class="input-group-text"><i class="fas fa-key"></i></span>
                    </div>
                    <input className="form-control" name="password" value={this.state.password} onChange={this.handleChangeInput} id="password" type="password" placeholder="Your password *" required="required" data-validation-required-message="Please enter your password address." />
                  </div>
                  <div class="d-flex justify-content-center mt-3 login_container">
                    <button onClick={this.signup} id=" join us " className="btn btn-primary btn-xl text-uppercase" type="submit">join us</button>
                  </div>
                </form>
              </div>

              <div class="mt-4">
                <div class="d-flex justify-content-center links">
                  Already have an account? <a href="/" class="ml-2">Login</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
    )
  }
}
export default Signup;

{/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP" crossorigin="anonymous"> */}
