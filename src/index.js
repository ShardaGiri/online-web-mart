import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route,BrowserRouter as Router, Link } from 'react-router-dom';
import Customer from './Customer';
import Product from './Product';
import NotFound from './NotFound';
import BangleItems from './components/reducers/BangleItems';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import FAQ from './components/FAQ';


// const routing =(
//   <Router>
//     <div>
//       <ul>
//         <button type="button">
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//         </button>
//         <button type="button">
//           <li>
//             <Link to="/product">Product</Link>
//           </li>
//         </button>
//         <button type="button">
//           <li>
//             <Link to="/faq">FAQ</Link>
//           </li>
//         </button>
//       </ul>
//       <switch>
//       <Route exact path="/" component={App} />
//       <Route path="/product" component={Product} />
//       <Route path="/faq" component={FAQ} />
//       <Route component={NotFound} />
//       </switch>
//     </div>
//   </Router>
// )
const store = createStore(BangleItems);

ReactDOM.render( <Provider store={store}><App /></Provider>,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
