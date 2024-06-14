import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, Typography, CardMedia, CardActionArea } from '@mui/material';

const ProductCard = ({ product }) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/product/${product.id}`, { state: { product } });
    };

    return (
        <Card>
            <CardActionArea onClick={handleCardClick}>
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
                        Price: ${product.price}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Rating: {product.rating}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default ProductCard;
