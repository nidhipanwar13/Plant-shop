import React, { Component } from 'react';
import Header from "./Headercomponent";
import Footer from "./Footercomponent";
import Home from "./Homecomponent";
import Cacti from "./Cacticomponent";
import Plant from "./Plantcomponent";
import Succulent from './Succulentcomponent';
import Privacy from './Privacycomponent';
import Shipping from './Shippingcomponent';
import FAQ from './FAQcomponent';


import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, Redirect, withRouter } from 'react-router-dom';


class Main extends Component {

    render() {
        return (
            <div>
                                    <Header />

                <Router>
                   
                    <Switch >
                        <Route exact path="/Home" component={Home} />
                        <Route exact path="/Cacti" component={Cacti} />
                        <Route exact path="/Plant" component={Plant} />
                        <Route exact path="/Succulent" component={Succulent} />
                        <Route exact path="/Privacy" component={Privacy} />
                        <Route exact path="/Shipping" component={Shipping} />
                        <Route exact path="/FAQ" component={FAQ} />




                        <Redirect to="/Home" />
                    </Switch>

                </Router>
                <Footer />

            </div>
        );
    }
}

export default Main;