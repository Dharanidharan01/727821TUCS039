// src/pages/ProductDetailPage.jsx

import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailPage = () => {
    const { id } = useParams();

    // Simulated product details
    const product = {
        id,
        name: "Product Name",
        company: "Product Company",
        category: "Product Category",
        price: "$100",
        rating: 4.5,
        discount: "10%",
        availability: true
    };

    return (
        <div>
            <h1>Product Detail</h1>
            <div>
                <p><strong>Name:</strong> {product.name}</p>
                <p><strong>Company:</strong> {product.company}</p>
                <p><strong>Category:</strong> {product.category}</p>
                <p><strong>Price:</strong> {product.price}</p>
                <p><strong>Rating:</strong> {product.rating}</p>
                <p><strong>Discount:</strong> {product.discount}</p>
                <p><strong>Availability:</strong> {product.availability ? 'Available' : 'Out of Stock'}</p>
            </div>
        </div>
    );
};

export default ProductDetailPage;
