import React from 'react';
import {motion} from 'framer-motion';
import {
    BrowserRouter as Router, Switch, Route, Link, HashRouter, 
} from 'react-router-dom';
import Navbar from '../components/navbar/navbar';
import NoFount from '../components/noFont404/noFonut';
import BodyContent from '../components/body/bodyCotend';
import FormContactUs from '../components/contactUs/formContactUse/formContactUs';

const HomePage =()=>{

    
    return(
        <div>
        <HashRouter>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Navbar />
                        <BodyContent />
                    </Route>
                    <Route  path="/contactus/:plan?" component={FormContactUs} ></Route>
                    <Route  path="*" component={NoFount} />
                </Switch>
            </Router>
        </HashRouter>
       
        </div>
    );
}


export default HomePage;
