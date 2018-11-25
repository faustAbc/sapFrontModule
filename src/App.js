import React, { Fragment } from 'react';
import Header from 'common/Header';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './utils/styling/theme';
import GlobalStylesProvider from 'utils/styling/GlobalStylesProvider';
import { BrowserRouter } from "react-router-dom";
import Main from './pages/Main';

const App = () => (
  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <Fragment>
        <GlobalStylesProvider />
        <Header />
        <Main />
      </Fragment>
    </MuiThemeProvider>
  </BrowserRouter>
);

export default App;
