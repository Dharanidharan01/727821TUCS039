// src/pages/AllProductsPage.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const AllProductsPage = () => {
    // Simulated list of products
    const products = [
        {
            id: 1,
            name: "Product 1",
            company: "Company A",
            category: "Category X",
            price: "$50",
            rating: 4.2,
            discount: "5%",
            availability: true
        },
        {
            id: 2,
            name: "Product 2",
            company: "Company B",
            category: "Category Y",
            price: "$80",
            rating: 4.7,
            discount: "15%",
            availability: false
        },
        // Add more products as needed
    ];

    return (
        <div>
            <h1>All Products</h1>
            <div>
                {products.map(product => (
                    <div key={product.id}>
                        <Link to={`/product/${product.id}`}>
                            <p><strong>Name:</strong> {product.name}</p>
                            <p><strong>Company:</strong> {product.company}</p>
                            <p><strong>Category:</strong> {product.category}</p>
                            <p><strong>Price:</strong> {product.price}</p>
                            <p><strong>Rating:</strong> {product.rating}</p>
                            <p><strong>Discount:</strong> {product.discount}</p>
                            <p><strong>Availability:</strong> {product.availability ? 'Available' : 'Out of Stock'}</p>
                        </Link>
                        <hr />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllProductsPage;
