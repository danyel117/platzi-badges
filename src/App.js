import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Layout from "./components/Layout"
import Badges from "./pages/Badges"
import BadgeNew from "./pages/BadgeNew"
import NotFound from './pages/NotFound'
function App() {
    return ( 
        <Router>
            <Layout>
                <Switch>
                    <Route exact path="/badges/new" component={BadgeNew}/>
                    <Route exact path="/badges" component={Badges}/>
                    <Route component={NotFound}/>
                </Switch>
            </Layout>
        </Router>
     );
}
 
export default App;