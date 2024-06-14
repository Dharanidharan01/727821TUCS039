import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import AllProductsPage from './pages/AllProductsPage';
import ProductDetailPage from './pages/ProductDetail';
function App() {
    return (
        <Router>
            <Container>
                <Routes>
                    <Route path="/" element={<AllProductsPage />} />
                    <Route path="/productid" element={<ProductDetailPage />} />
                </Routes>
            </Container>
        </Router>
    );
}

export default App;