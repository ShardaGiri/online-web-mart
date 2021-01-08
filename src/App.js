
import './App.css';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import FAQ from './components/FAQ';
import Home from './components/Home';
import NavbarMain from './components/NavbarMain';
import Footer from './components/Footer';
import NotFound from './NotFound';
import ContactUs from './components/ContactUs';
import Bangle from './components/Bangle';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <h1>Home</h1>
        <ListComponent></ListComponent>
        <ul>{ListComponent}</ul>
      </header>
      <div><HookEx></HookEx></div>
      <div><HookCon></HookCon></div>
      <div><Example></Example></div> */}
      <Router>
      <div className="Header">
      <NavbarMain fixed="top"/>
      </div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/faq">
            <FAQ></FAQ>
          </Route>
          <Route path="/bangle">
            <Bangle></Bangle>
          </Route>
          <Route path="/cart">
            <Cart></Cart>
          </Route>
          <Route path="/contact">
            <ContactUs></ContactUs>
          </Route>
          <Route component={NotFound}></Route>
        </Switch>
        <div className="Footer">
            <Footer fixed="bottom"/>
        </div>

    </Router>
    </div>
  );
}

export default App;
