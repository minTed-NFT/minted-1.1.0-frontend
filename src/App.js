import logo from './logo.svg';

import Main from "./Pages/Main";
import React,{ Component } from "react";
import Profile from "./Pages/Profile";
//import Main from "./Pages/Main";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


function App(){

        return(
           <Router>
                   <Route path="/">
                       <Main />
                   </Route>
                   <Route path="/profile/:id">
                       <Profile />
                   </Route>
           </Router>
        )

}

export default App
