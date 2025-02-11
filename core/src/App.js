import React, { Component } from "react";
import { SportsStoreDataStore } from "./data/DataStore";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes, Navigate } 
    from "react-router-dom";
import { ShopConnector } from "./shop/ShopConnector";

export default class App extends Component {

    render() {
        return <Provider store={ SportsStoreDataStore }>
            <Router>
                <Routes>
                    <Route path="/shop" component={ ShopConnector } />
                    <Navigate to="/shop" />
                </Routes>
            </Router>
        </Provider>
    }
}
