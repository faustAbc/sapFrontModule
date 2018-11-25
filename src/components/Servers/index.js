
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Server from 'common/Server';
import Query from '../../common/Server/Query';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: theme.spacing.unit * 1
  },
})

const Servers = ({ classes, servers, queries }) => (
  <div className={classes.root}>
    {servers.map(e => (
      <Server
        key={e.id}
        serverName={e.name}
      >
        <Query queries={queries} />
      </Server>
    ))}
  </div>
);

export default withStyles(styles)(Servers);
