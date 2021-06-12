import React, { Component } from 'react';
import Header from "./Headercomponent";
import Footer from "./Footercomponent";
import Home from "./Homecomponent";
import { BrowserRouter as Router, Route, Switch, Redirect, withRouter } from 'react-router-dom';




class Main extends Component {

    render() {
        return (
            <div>
            <Router>
                <Header />

                        <Switch >
                            <Route exact path="/Home" component={Home} />
                            {/* <Route exact path="/Bedroom" component={Bedroom} />
                            <Route exact path="/Dining" component={Dining} />
                            <Route exact path="/Living" component={Living} />
                            <Route exact path="/Workplace" component={Workplace} />
                            <Route exact path="/Contact" component={Contact} /> */}

                            <Redirect to="/Home" />
                        </Switch>
                  
            </Router>
            <Footer />

        </div>
        );
    }
}

export default Main;