import React from 'react';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  appFrame: {
    height: 430,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    width: `calc(100% - 320px)`,
  },
  'appBar-left': {
    marginLeft: 320,
  },
  'appBar-right': {
    marginRight: 320,
  },
  drawerPaper: {
    position: 'relative',
    width: 320,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
});

class PermanentDrawer extends React.Component {
  render() {
    const { classes } = this.props;

    return (
        <div className={classes.appFrame}>
          <AppBar
            position="absolute"
            className={(classes.appBar)}
          >
            <Toolbar>
              <Typography variant="title" color="inherit" noWrap>
                DogeCodes React
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
                variant="permanent"
                classes={{
                paper: classes.drawerPaper,
                }}
            >
                <div className={classes.toolbar} />
                <Divider />
            </Drawer>
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Typography>{'You think water moves fast? You should see ice.'}</Typography>
          </main>
        </div>
    );
  }
}

export default withStyles(styles)(PermanentDrawer);
