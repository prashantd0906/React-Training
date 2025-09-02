import {Box, Button, Container, Stack, Typography} from '@mui/material';
import React from 'react';
import EspressoCoffee from '../../assets/images/espresso-coffee.png';

const Hero: React.FC = () => {
  return (
    <Container id="home">
      <Stack
        direction={{xs: 'column', md: 'row'}}
        spacing={2}
        sx={{
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '85vh',
        }}
      >
        <Box
          sx={{
            width: {xs: '100%', md: '50%'},
            padding: '3rem 0',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            gap: '.5rem',
            alignItems: 'center',
          }}
        >
          <Typography variant="h1" sx={{fontSize: {xs: '3rem', md: '4rem'}}}>
            Coffee For All
          </Typography>
          <Typography variant="h4" sx={{fontSize: {xs: '1rem', md: '1.5rem'}}}>
            The Coffee Evolution Starts Now
          </Typography>
          <Button variant="contained" color="secondary" href="#coffee">
            Order Now
          </Button>
        </Box>

        <Box
          sx={{
            width: {xs: '100%', md: '50%'},
            pr: {xs: 0, md: 4},
            textAlign: 'center',
          }}
        >
          <img
            src={EspressoCoffee}
            alt="Espresso Coffee Drink"
            style={{width: '100%', borderRadius: '8px'}}
          />
        </Box>
      </Stack>
    </Container>
  );
};

export default Hero;
