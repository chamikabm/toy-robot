import React from 'react';
import {
  CssBaseline,
  ThemeProvider,
} from '@mui/material';
import theme from './themes';
import AllRoutes from './routes';

const App = () => {

  return (
    <ThemeProvider
      theme={theme}
    >
      <CssBaseline />
      <AllRoutes />
    </ThemeProvider>
  );
};

export default App;
