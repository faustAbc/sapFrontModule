import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Servers from 'components/Servers';
import { servers, queries } from 'utils/mocks';

const styles = {}

const Main = () => (
  <Servers servers={servers} queries={queries} />
);

export default withStyles(styles)(Main);



