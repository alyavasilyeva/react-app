import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper'

import LogInForm from './LogInForm';
import SignUpForm from './SingUpForm';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 2 }}  >
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
    formWrap: {
        width: '500px',
        margin: '10% auto',
    },

    formTab: {
        width: '50%',
        color: '#000',
        'text-transform': 'uppercase',
    },

    formBar: {
        'background-color': '#fff',
    },

    // formContainer: {
    //     backgroundColor: '#fff',
    //     'box-shadow': '0 14px 28px rgba(0,0,0,0.25)',
    // },
});

class SimpleTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
        <Paper className={classes.formWrap}>
            <AppBar className={classes.formBar} position="static">
                <Tabs value={value} onChange={this.handleChange}>
                    <Tab className={classes.formTab} label="Login" />
                    <Tab className={classes.formTab} label="Sign up" />
                </Tabs>
            </AppBar>
            {value === 0 && <TabContainer>
                <LogInForm/>
                </TabContainer>}
            {value === 1 && <TabContainer>
                <SignUpForm/>
                </TabContainer>}
        </Paper>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);
