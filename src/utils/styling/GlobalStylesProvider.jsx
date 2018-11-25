import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';

const globalStyles = theme => ({
  '@global': {
    body: {
      margin: 0,
      padding: 0,
    },
  },
});

const GlobalStylesProvider = () => (<Fragment />);

export default withStyles(globalStyles)(GlobalStylesProvider);
