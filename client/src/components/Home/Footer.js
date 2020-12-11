import React , {Component} from "react";
// import {Link,NavLink} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
class Footer extends Component {
    render(){
        
        return (
           <section> hiddar 
    <div>
        
        <footer className="footer">
        <div className="container">
        <div className="row align-items-center">
            <div className="col-md-4">
        <span className="copyright">Copyright &copy; Skaters 2020</span>
        </div>
        <div className="col-md-4">
        <ul className="list-inline social-buttons">
            <li className="list-inline-item">
            <a href="#something">
                <i className="fa fa-twitter"></i>
            </a>
            </li>
            <li className="list-inline-item">
            <a href="#something">
                <i className="fa fa-facebook-f"></i>
            </a>
            </li>
            <li className="list-inline-item">
            <a href="#something">
                <i className="fa fa-linkedin-in"></i>
            </a>
            </li>
        </ul>
        </div>
        <div className="col-md-4">
        <ul className="list-inline quicklinks">
            <li className="list-inline-item">
            <a href="#something">Privacy Policy</a>
            </li>
            <li className="list-inline-item">
            <a href="#something">Terms of Use</a>
            </li>
        </ul>
        <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off"></input>
  <label class="btn btn-outline-primary" for="btncheck1">Checkbox 1</label>
        </div>
    </div>
    </div>
    </footer>
</div>
</section>
        )
    }
}
export default Footer