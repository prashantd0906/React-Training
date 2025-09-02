import '@fontsource/roboto';
import {ThemeProvider} from '@mui/material';
import React from 'react';
import './App.css';
import theme from './assets/Theme';
import Coffee from './Components/Coffee/Coffee';
import Hero from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Hero />
      <Coffee />
    </ThemeProvider>
  );
};

export default App;
