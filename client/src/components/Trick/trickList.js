import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios"

import TrickCard from './trickItem'


class TrickCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tricks: []
    }
  }

  componentDidMount = () => {
    // this.getOrgEvents({ orgId: this.props.orgId })
      this.getTricks()
 
  }
// get Tricks
  getTricks = () => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };
    fetch('/retrieveTricks', requestOptions)
      .then(response => response.json())
      .then(data => {
        this.setState({ tricks: data })
        // console.log(this.state.events)
      })
  }

  handelOnClick = async (id, userId) => {
    // e.preventDefault();
    // console.log("ourCLient", this.state)
    axios.post('/addTrick', { _id: id})
      .then((response) => {
        console.log(response)
      })
  }

  render() {
    // const tricks = [{
    // tricks
    // }]


    return ( 
      <div className="eventPage page-section " >
        <div className="container ">
          <div className="row" >
            <div className="col-lg-12 text-center">
              <h3 className="wellcom"> trickssssss</h3><br /><br />
            </div>
          </div>
          <div className="row" id="tricksCard">{
         tricks.map(({ trickName,photo,description},index) =>
        <TrickCard trickName={trickName} photo={photo} description={description}/>
        )
          }
          </div>
        </div>
      </div>
    );
  }
}
export default TrickCard;
