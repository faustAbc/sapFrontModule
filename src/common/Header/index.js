import React from 'react';
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
  }
})

const Header = ({ classes }) => (
  <header className={classes.root}>
    <Grid container justify="flex-start">
      <Typography className={classes.title}>
        AIforFit DOCs
      </Typography>
    </Grid>
  </header>
);

export default withStyles(styles)(Header);
