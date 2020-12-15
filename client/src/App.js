import Nav from './components/Home/Nav';
import Header from './components/Home/Header';
import Footer from './components/Home/Footer';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"

import './App.css';
import TrickCard from './components/Trick/trickItem'

function App() {
  return (
    <div className="App">
        <div>
          <BrowserRouter>
          

            <Nav />
            <Header/>
            <TrickCard/>
            <Footer/>
          
          </BrowserRouter>
        </div>
    </div>
  );
}

export default App;
