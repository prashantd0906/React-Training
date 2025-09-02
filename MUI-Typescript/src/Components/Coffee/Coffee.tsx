import React from 'react';
import products from '../../assets/Coffee';
import type {Product} from '../../assets/Coffee';
import {
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
} from '@mui/material';

const Coffee: React.FC = () => {
  return (
    <Box sx={{my: '5rem'}} id="coffee">
      <Typography variant="h5" sx={{textAlign: 'center', mb: 4}}>
        Featured Coffee
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 3,
          justifyContent: 'center',
        }}
      >
        {products.map((product: Product) => (
          <Box
            key={product.id}
            sx={{
              width: {xs: '100%', sm: '45%', md: '30%'},
              maxWidth: 345,
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Card sx={{textAlign: 'center', p: 2, width: '100%'}}>
              <CardMedia
                component="img"
                height="140"
                image={product.image}
                alt={product.name}
                sx={{objectFit: 'cover'}}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{my: 1}}>
                  {product.description}
                </Typography>
                <Typography variant="h6" color="primary" sx={{mb: 2}}>
                  ${product.price.toFixed(2)}
                </Typography>
                <Button variant="contained" color="secondary" fullWidth>
                  Buy Now
                </Button>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Coffee;
