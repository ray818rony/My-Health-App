import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Home,Dashboard, SignIn, Calendar} from './components'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}

from 'react-router-dom';


// 
import './index.css';

// 

import { FirebaseAppProvider, AuthCheck } from 'reactfire'; // New Import
import 'firebase/auth'; // NEW IMPORT
import { store } from './redux/store';
import { Provider } from 'react-redux';
// 
import  firebaseConfig  from './firebaseConfig'
// 
import {Donate} from'./components/Donate';
import { View } from './components/View/view';
// 
ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}> {/* New Provider */}
    <Provider store = { store }>
    <Router>
      <Switch>

        <Route exact path='/'>
          <Home title={'Change'}/>
        </Route>
        <Route exact path='/donate'>
          <Donate />
        </Route>
        {/*  */}
        <Route exact path='/View'>
          <View/>
        </Route>
        {/*  */}
        <Route exact path='/Calendar'>
          <Calendar />
        </Route>
    
{/* View is yet to be made. */}
{/* <home title={'Connect'} */}
{/* should look like that to load the whole page */}
        <Route path='/dashboard'>
          <Dashboard></Dashboard>
        </Route>

        <Route path='/signin'>
          <SignIn></SignIn>
        </Route>

      </Switch>
    </Router>
    </Provider>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();






// ReactDOM.render(
//   <React.StrictMode>
//     <Router>
    
//     </Router>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
