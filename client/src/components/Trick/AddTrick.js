import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

class TrickAddForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
        trickName: '',
        photo: '',
        description: '',
    }
    this.handelOnClick = this.handelOnClick.bind(this)
    this.handleChangeInput = this.handleChangeInput.bind(this)

  }
  handleChangeInput(e) {
    this.setState({ [e.target.name]: e.target.value })
    console.log(e.target.value)
  }
  handelOnClick = async (e) => {
    e.preventDefault();
    console.log(this.state)
    // console.log("ourCLient", this.state)
    axios.post('/addTrick', this.state)
      .then((response) => {
        console.log(response)
        this.setState({
            trickName: '',
            photo: '',
            description: '',
        })
      })
  }
  render() {

    return (

      <section className="page-section" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase"> Share your Trick  ♥ </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <form id="contactForm" name="sentMessage" novalidate="novalidate">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input className="form-control" value={this.state.trickName} onChange={this.handleChangeInput} id="tilie" name="trickName" type="text" placeholder="Trick Name *" required="required" data-validation-required-message="Please enter Your Trick Name  ." />
                      <p className="help-block text-danger"></p>
                    </div>

                    <div className="form-group">
                      <input className="form-control" value={this.state.description} onChange={this.handleChangeInput} id="description" name="description" type="text" placeholder="Description *" required="required" data-validation-required-message="Please enter description of your trick." />
                      <p className="help-block text-danger"></p>
                    </div>


                  </div>



                  <div className="clearfix"></div>
                  <div className="col-lg-12 text-center">
                    <div id="success"></div>
                    <button id=" Add Form " onClick={this.handelOnClick} className="btn btn-primary btn-xl text-uppercase" type="submit">Add Trick</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

    )
  }
}


export default TrickAddForm;