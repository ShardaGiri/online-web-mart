import './App.css';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import AllJwellery from './components/AllJwellery/AllJwellery'
import Home from './components/Home/Home'
import Offers from './components/Offers/Offers'
import PageNotFound from './PageNotFound';
import NavbarMain from './components/Navbar/NavbarMain';
import Footer from './components/Footer/Footer';
import ContactUs from './components/ContactUs/ContactUs';
import Cart from './components/Cart.js';
import Bangle from './components/Bangle.js';
import FAQ from './components/FAQ';
function App() {
  return (
    <div className="App">
    <Router>
     <div className="Header">
      <NavbarMain/>
      </div>
      <div className="Body">
              <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/allJwellery">
            <AllJwellery></AllJwellery>
          </Route>
          <Route path="/offers">
            <Offers></Offers>
          </Route>
          <Route path="/ContactUs">
            <ContactUs></ContactUs>
          </Route>
          <Route path="/Cart">
            <Cart></Cart>
          </Route>
          <Route path="/Bangles">
            <Bangle></Bangle>
          </Route>
          <Route path="/FAQ">
            <FAQ></FAQ>
          </Route>
          <Route component={PageNotFound}></Route>
        </Switch>
        </div>
        <div className="Footer">
            <Footer fixed="bottom"/>
        </div>

    </Router>
    </div>
  );
}

export default App;
