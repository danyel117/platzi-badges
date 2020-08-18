import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Layout from "./components/Layout"
import Badges from "./pages/Badges"
import BadgeNew from "./pages/BadgeNew"
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import BadgeEdit from './pages/BadgeEdit'
import BadgeDetails from './pages/BadgeDetails'
function App() {
    return ( 
        <Router>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/badges/new" component={BadgeNew}/>
                    <Route exact path="/badges/:badgeId/edit" component={BadgeEdit}/>
                    <Route exact path="/badges/:badgeId" component={BadgeDetails}/>
                    <Route exact path="/badges" component={Badges}/>
                    <Route component={NotFound}/>
                </Switch>
            </Layout>
        </Router>
     );
}
 
export default App;