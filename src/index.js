import React from 'react';
import ReactDOM from 'react-dom';
// import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
// import Home from './components/Home';
// import NavMenu from './components/NavMenu';
// import FourOhFour from './components/404';
import './index.css';
import Fullpage from './components/Landing'
// import config from "./firebaseconfig"

// const firebase = require('firebase/app');
// require('firebase/database');

// firebase.initializeApp(config);
// console.log(firebase);

// var database = firebase.database();
// var ref = database.ref("postcards")

// ref.on('value', gotData, errData)

// function gotData(data) {
// console.log(`Heather look here >>>>>>>> ${data.val().Femo9MeefOLq5hOsc3CM[0].image_src}`)
// }

// function errData(err) {
//     console.log(err)
// }

// function fetchData() {
// fetch('https://postcards-aamm.firebaseio.com')
//   .then(response => response.json())
//   .then(data => console.log(`Data => ${data}`));
// }

// fetchData()




// console.log(`ref === ${ref}`)
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