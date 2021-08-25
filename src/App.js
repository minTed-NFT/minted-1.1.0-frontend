
import Header from './Components/Header'
import Main from "./Pages/Main";
import React from "react";
import Profile from "./Pages/Profile";
//import Main from "./Pages/Main";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";


function App(){

        return(
           <Router>
               <Header />
               <Switch>
                    <Route  path="/">
                        <Main />
                    </Route>
                    <Route path="/profile/:id">
                       <Profile />
                    </Route>

               </Switch>

                   
           </Router>
        )

}

export default App
