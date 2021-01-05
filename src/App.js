import './App.css';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import AllJwellery from './components/AllJwellery/AllJwellery'
import Home from './components/Home/Home'
import Offers from './components/Offers/Offers'
import PageNotFound from './PageNotFound';
import NavbarMain from './components/Navbar/NavbarMain';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
    <Router>
      <NavbarMain/>
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
          <Route component={PageNotFound}></Route>
        </Switch>
        <div className="Footer">
            <Footer fixed="bottom"/>
        </div>

    </Router>
    </div>
  );
}

export default App;
