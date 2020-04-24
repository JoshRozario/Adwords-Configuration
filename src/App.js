import React from 'react';
import './App.css';
import Panel from './Components/Panel';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'



const theme = createMuiTheme({

  palette: {
    primary: {
              main: '#0a8fd0'
            },
    secondary: {
              main: '#2e3c57',
    }
  },
  status: {
    danger: 'orange',
  },
  shadows: Array(25).fill('none'),
  overrides: {
    MuiFormControlLabel: {
        label: {
            fontSize: '0.8rem',
        }
    }
}

});


function App() {

  return (
    <MuiThemeProvider theme = {theme}> 
      <Box style = {useStyles.mainRoot}>
          <Panel/>
      </Box>
    </MuiThemeProvider>

  );
}

export default App;

const useStyles =  {

  mainRoot: {
      padding: '10px 10px',
      display: 'flex',
      background: ' #3b5d7d',
  }

}
