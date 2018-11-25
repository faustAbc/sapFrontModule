import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

const styles = theme => ({
  root: {
    background: theme.palette.primary.main,
    padding: theme.spacing.unit * 3
  },
  title: {
    color: '#FFF',
    fontWeight: 500,
    fontSize: 20,
  },
  server: {
    background: theme.palette.secondary.main,
    width: '70vw',
    minHeight: 150,
    marginBottom: theme.spacing.unit,
    padding: theme.spacing.unit * 2
  }
})

const Server = ({ classes, children, serverName }) => (
  <Grid container className={classes.server} direction="column">
    <Typography className={classes.title}>
      {serverName}
    </Typography>
    <Fragment>
      {children}
    </Fragment>
  </Grid>
);

export default withStyles(styles)(Server);
