import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import indigo from 'material-ui/colors/indigo';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },

  submitButton: {
    backgroundColor: indigo[500],
    color: '#fff',
    'margin-top': '30px',
  },

  formControl: {
    margin: theme.spacing.unit,
    width: '100%',
    'margin-bottom': '20px',
  },
  inputLabelFocused: {
    color: indigo[500],
  },
  inputInkbar: {
    '&:after': {
      backgroundColor: indigo[500],
    },
  },


 
});

class LogInForm extends React.Component{
    state = {
        username: {
            value: '',
            isValid: true,
        },
        password: {
            password: '',
            isValid: true,
        },
    }

    handleInputChange = (event) => {
        event.persist();
        const { name, value } = event.target;

        this.setState((prevState) => ({
            [name]: {
                ...prevState[name],
                value,
            },
        }));
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const { username, password } = this.state;

        console.log('Login:', username.value, password.value)
    }

    render() {
        const { classes } = this.props;
        const { username, password } = this.state;

        return(
            <form onSubmit={this.handleSubmit}>
            <TextField
                required
                fullWidth
                label="Username"
                placeholder="Type your username..."
                type="text"
                name="username"
                margin="normal"
                autoComplete="username"
                value={username.value}
                onChange={this.handleInputChange}
                error={!username.isValid}
            />
            <TextField
                required
                fullWidth
                label="Password"
                placeholder="Type your username..."
                type="password"
                name="password"
                margin="normal"
                autoComplete="current-password"
                value={password.value}
                onChange={this.handleInputChange}
                error={!password.isValid}
            />
            <Button
              type="submit"
              variant="raised"
              fullWidth
              className={classes.submitButton}
            >
              Login
            </Button>
          </form>
        )
    }

}

LogInForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LogInForm);
