import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@material-ui/core';

const ProductCard = ({ product }) => {
    return (
        <Card>
            <CardMedia
                component="img"
                alt={product.productName}
                height="140"
                image={`https://via.placeholder.com/150?text=${product.productName}`}
                title={product.productName}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {product.productName}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Company: {product.company}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Price: ${product.price}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Rating: {product.rating}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Discount: {product.discount}%
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Availability: {product.availability}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ProductCard;
