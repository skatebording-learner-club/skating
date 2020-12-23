
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import './App.css';
import Nav from './components/Home/Nav';
import Header from './components/Home/Header';
import Footer from './components/Home/Footer';
import TrickCard from './components/Trick/trickItem'
import Login from './components/Login';
import Signup from './components/Signup';
import AddTrick from './components/Trick/AddTrick';
import Trick from './components/Trick/trickList';


function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>


          <Nav />
          <Switch>
            <Route exact path={"/"} render={() => (<Header />)} />
            <Route exact path={"/myaccount"} render={() => (<Signup />)} />
            <Route exact path={"/sakters"} render={() => (<Login />)} />
            <Route exact path={"/AddTrick"} render={() => (<AddTrick />)} />
            <Route exact path={"/learn"} render={() => (<Trick />)} />

          </Switch>
          <Footer/>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
