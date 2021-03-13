import React from 'react';
import { Router } from 'react-router-dom';
import { createMuiTheme , ThemeProvider} from '@material-ui/core/styles';

import Routes from './routes';
import history from './services/history';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#282B30",
    },
    secondary: {
      main: "#604B89",
    },
    textPrimary: {
      main: "#FFFFFF"
    }
  },
});


function App() {
  return (
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <Routes history={history} />
      </ThemeProvider>
    </Router>
  );
}

export default App;
