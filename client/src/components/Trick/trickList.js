import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios"

import  TrickCard from './trickItem'

class Trick extends Component {
    constructor(props) {
        super(props)
      }

      state = {
        tricks: []
      }

      componentDidMount (){    
        axios.get("/retrieveTricks")
        .then((res)=>{
          var {data} = res ;
          console.log(data)
          this.setState({
            tricks:data
          })
         console.log(this.state)
        })
      }

      // console.log(this.state,"asd belal")

      // getTricks = (obj) => {
      //   const requestOptions = {
      //     method: 'POST',
      //     headers: { 'Content-Type': 'application/json' },
      //     body: JSON.stringify(obj)
      //   };
      //   fetch('/retrieveTricks', requestOptions)
      //     .then(response => response.json())
      //     .then(data => this.setState({ tricks: data }));
      // }
      
      // handelOnClick = async (id, trickId) => {
      //   axios.post('/goTrick', { _id: id, trickId: trickId })
      //     .then((response) => {
      //       console.log(response);
      //     })
      //   }

          render() {
            var allTricks = this.state.tricks.map((trick)=>{
              console.log(trick);
              return  <TrickCard trickName={trick.trickName} description={trick.description} />
            })
            console.log(allTricks,"done")
            return (
                <div className="page-section " >
                  <div className="container ">
                    <div className="row" >
                      <div className="col-lg-12 text-center">
                      </div>
                    </div>
          
                    <div className="row" id="Card">
                    {allTricks}
                    </div>
                  </div>
                </div>
              );
          }
    }
export default Trick;