import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; //don't need to specify localhost url in axios http address
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
   typography: {
      fontFamily: "'Ubuntu', sans-serif",
   },
});

ReactDOM.render(
   <BrowserRouter>
      <MuiThemeProvider theme={theme}>
         <App />
      </MuiThemeProvider>
   </BrowserRouter>,
   document.getElementById('root')
);
