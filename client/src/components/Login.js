import React, { Component } from "react";
import axios from 'axios'
import { NavLink } from "react-router-dom"
import './login.css';


const token = ''
class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.handelOnClick = this.handelOnClick.bind(this)
    this.handleChangeInput = this.handleChangeInput.bind(this)
  }
  handleChangeInput = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value })

    console.log(this.state)
  }

  handelOnClick = async (e) => {
    console.log(this.state)
    e.preventDefault();
    // console.log("ourCLient", this.state)
    axios.post('/signinClient', this.state)
      .then((response) => {
        console.log(response)
        localStorage.setItem('login', response.data.token)
        // window.location.reload()
        window.location.replace('/')
      })
  }


  render() {
    const { email, password } = this.state
    return (
      <section className="page-section" id="contact">
        <div class="container h-100">
          <div class="d-flex justify-content-center h-100">
            <div class="user_card">
              <div class="d-flex justify-content-center">
                <h3 id="form-title">Login</h3>
              </div>
              <div class="d-flex justify-content-center form_container">

                <form method="POST" action="">
                  <div class="input-group mb-3">
                    <div class="input-group-append">
                      <span class="input-group-text"><i class="fas fa-user"></i></span>
                    </div>
                    <input onChange={this.handleChangeInput} name='email' value={email} className="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address." />
                  </div>
                  <div class="input-group mb-2">
                    <div class="input-group-append">
                      <span class="input-group-text"><i class="fas fa-envelope-square"></i></span>
                    </div>
                    <input onChange={this.handleChangeInput} value={password} name='password' className="form-control" id="password" type="password" placeholder="Your Password *" required="required" data-validation-required-message="Please enter your Password." /><br /><br />
                  </div>
                  <div className="clearfix"></div>
                  <div className="col-lg-12 text-center">
                    <div id="success"></div>
                    <button onClick={this.handelOnClick} id=" join us " class="btn btn-primary btn-xl text-uppercase" type="submit">Login</button>
                  </div>


                </form>
              </div>

              <div class="mt-4">
                <div class="d-flex justify-content-center links">
                  Already have an account? <a href="{% url 'login' %}" class="ml-2">Login</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >

    )
  }
}


export default Login;
