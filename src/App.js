
import Header from '../src/Components/common/Header'
import Main from "./Pages/Main";
import React from "react";
import Profile from "./Pages/Profile";
import Nft from "./Pages/NFT";
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
                    <Route exact path="/">
                        <Main />
                    </Route>
                    <Route path="/u/:username">
                       <Profile />
                    </Route>
                    <Route path="/nft/:postHashHex">
                       <Nft />
                    </Route>


               </Switch>

                   
           </Router>
        )

}

export default App
