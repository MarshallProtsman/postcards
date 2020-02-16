import React from 'react';
import ReactDOM from 'react-dom';
// import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
// import Home from './components/Home';
// import NavMenu from './components/NavMenu';
// import FourOhFour from './components/404';
import './index.css';
import Fullpage from './components/Landing'

// import Landing from './App';

// const routing = (

// {/* <Router>
//       <div>
//       <NavMenu />
//       <Switch>
//         <Route exact path="/" component={Fullpage} />
//         <Route exact path="/home" component={Home} />
//         {/* <Route exact path="/sandbox" component={Sandbox} /> */}
// //         <Route component={ FourOhFour } />
// //         </Switch> 
// //       </div>
// //     </Router>
// //   ) */}

ReactDOM.render(<Fullpage />, document.getElementById('root'));
