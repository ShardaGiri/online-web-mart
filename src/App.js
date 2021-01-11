import './App.css';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home'
import PageNotFound from './components/PageNotFound/PageNotFound';
import NavbarMain from './components/Navbar/NavbarMain';
import Footer from './components/Footer/Footer';
import ContactUs from './components/ContactUs/ContactUs';
import Cart from './components/Cart.js';
import Bangle from './components/Bangle/Bangle.js';
import FAQ from './components/FAQ';
import ProductDetails from './components/Bangle/ProductDetails';
import TermsCond from './components/TermsCond';
import PrivacyPolicy from './components/PrivacyPolicy';
import TryAtHome from './components/TryAtHome';
function App() {
  return (
    <div className="App">
    <Router>
     <div className="Header-Top">
      <NavbarMain/>
      </div>
     
      <div className="Body">
              <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/ContactUs">
            <ContactUs></ContactUs>
          </Route>
          <Route path="/ProductDetails/:title" component={ProductDetails} >
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
          <Route path="/TermsCond">
            <TermsCond></TermsCond>
          </Route>
          <Route path="/Privacy">
            <PrivacyPolicy></PrivacyPolicy>
          </Route>
          <Route path="/TryAtHOme">
            <TryAtHome></TryAtHome>
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
