import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios"

import  TrickCard from './trickItem '

class Trick extends Component {
    constructor(props) {
        super(props)
        this.state = {
          tricks: []
        }
      }
      componentDidMount = () => {    
          console.log("here orgid")
      }
      getTricks = (obj) => {
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(obj)
        };
        fetch('/retrieveTrick', requestOptions)
          .then(response => response.json())
          .then(data => this.setState({ tricks: data }));
      }
      
      handelOnClick = async (id, userId) => {
        axios.post('/goTrick', { _id: id, userId: userId })
          .then((response) => {
            console.log(response);
          })
        }

          render() {
            const {trickName} = this.state
            return (
                <div className="eventPage page-section " >
                  <div className="container ">
                    <div className="row" >
                      <div className="col-lg-12 text-center">
                      </div>
                    </div>
          
                    <div className="row" id="Card">
                    <TrickCard trickName={trickName} photo={photo} />
                    </div>
                  </div>
                </div>
              );
          }
    }
export default Trick;