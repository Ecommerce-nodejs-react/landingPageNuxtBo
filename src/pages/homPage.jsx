import React from 'react';
import {motion} from 'framer-motion';
import {
    BrowserRouter as Router, Switch, Route, Link
} from 'react-router-dom';
import Navbar from '../components/navbar/navbar';
import NoFount from '../components/noFont404/noFonut';
import BodyContent from '../components/body/bodyCotend';

const HomePage =()=>{

    return(
        <div>
        <Router>
            <Switch>
                <Route exact path="/">
                    <Navbar />
                    <BodyContent />
                </Route>
                <Route  path="*" component={NoFount} />
            </Switch>
        </Router>
        
        </div>
    );
}


export default HomePage;
