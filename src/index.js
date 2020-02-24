import React from 'react';
import ReactDOM from 'react-dom';
// import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
// import Home from './components/Home';
// import NavMenu from './components/NavMenu';
// import FourOhFour from './components/404';
// import Landing from './App';
import './index.css';
import Fullpage from './components/Landing'
import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyD2Fyhvz8myMmYpRPJg6FtDCH4LuGT0lTo",
    authDomain: "postcards-aamm.firebaseapp.com",
    databaseURL: "https://postcards-aamm.firebaseio.com",
    projectId: "postcards-aamm",
    storageBucket: "postcards-aamm.appspot.com",
    messagingSenderId: "526900366108",
    appId: "1:526900366108:web:68d424777422f79f1848d9",
    measurementId: "G-9XN0S1CB2J"
};

firebase.initializeApp(config);

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

ReactDOM.render(<Fullpage />,document.getElementById('root'));