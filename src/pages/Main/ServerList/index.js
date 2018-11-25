import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core';

const styles = {

}
class ServerList extends Component {
  handleClick = event => {

  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { servers, classes } = this.props;

    return (
      <List>
        {servers.map(server => (
          <ListItem
            key={server.id}
            button
            onClick={this.handleClick(server.id)}
            className={classes.title}
          >
            <ListItemText inset primary={server.name} />
          </ListItem>
        ))}
      </List>
    );
  }
}

export default withStyles(styles)(ServerList);
