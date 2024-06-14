import React, { useEffect, useState } from 'react';
import { getProducts } from '../services/api';
import ProductCard from '../components/ProductCard';
import { Grid, TextField, Button, MenuItem } from '@material-ui/core';

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState('Laptop');
    const [company, setCompany] = useState('AMZ');
    const [top, setTop] = useState(10);
    const [minPrice, setMinPrice] = useState(1);
    const [maxPrice, setMaxPrice] = useState(10000);

    useEffect(() => {
        fetchProducts();
    }, [category, company, top, minPrice, maxPrice]);

    const fetchProducts = async () => {
        const products = await getProducts(company, category, top, minPrice, maxPrice
