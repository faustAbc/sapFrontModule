import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';

const styles = theme => ({
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
  title: {
    background: '#00000040',
  }
});

class Query extends Component {
  constructor() {
    super();
    this.state = {}
  }

  handleClick = name => event => {
    console.log(event.target);
    this.setState(state => ({ [name]: !state[name] }));
  };

  render() {
    const { queries, classes } = this.props;
    console.log(this.state);
    return (
      <List>
        {queries.map(q => (
          <Fragment key={q.id}>
            <ListItem button onClick={this.handleClick(q.id)} className={classes.title}>
              <ListItemText inset primary={q.name} />
            </ListItem>
            <Collapse in={this.state[q.id]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem className={classes.nested}>
                  <ListItemText inset primary={q.answer} />
                </ListItem>
              </List>
            </Collapse>
          </Fragment>
        ))}
      </List>
    );
  }
}

export default withStyles(styles)(Query);
