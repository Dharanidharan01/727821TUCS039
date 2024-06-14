import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from '@material-ui/core';
import AllProducts from './pages/AllProducts';
import ProductDetail from './pages/ProductDetail';

function App() {
    return (
        <Router>
            <Container>
                <Switch>
                    <Route path="/product/:id" component={ProductDetail} />
                    <Route path="/" component={AllProducts} />
                </Switch>
            </Container>
        </Router>
    );
}

export default App;
