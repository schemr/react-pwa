import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

class AppShell extends Component {
  render() {
    return (
        <div>
            <AppBar position="static" color="default">
                <Toolbar>
                <Typography variant="title" color="inherit">
                    Title
                </Typography>
                </Toolbar>
            </AppBar>
            <div>
                {this.props.children}
            </div>
        </div>
    );
  }
};

export default AppShell;