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

class SignUpForm extends React.Component {
    state = {
        username: {
            value: '',
            isValid: true,
        },
        password: {
            password: '',
            isValid: true,
        },
        repeatedPassword: {
            value: '',
            isValid: true,
        },
    }

    validate = () => {
        const { password, repeatedPassword } = this.state;
        const isValid = password.value === repeatedPassword.value;

        this.setState({
            password: { ...password, isValid},
            repeatedPassword: { ...repeatedPassword, isValid},
        });

        return isValid;
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

        if(!this.validate()) {
            return;
        }

        const { username, password, repeatedPassword } = this.state;

        console.log('Sign up:', username.value, password.value, repeatedPassword.value)
    }

    render() {
        const { classes } = this.props;
        const { username, password, repeatedPassword } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
            <TextField
                required
                fullWidth
                label="Username"
                placeholder="Type your username..."
                type="text"
                margin="normal"
                name="username"
                autoComplete="username"
                value={username.value}
                onChange={this.handleInputChange}
                error={!username.isValid}
            />
            <TextField
                required
                fullWidth
                label="Password"
                placeholder="Type your password..."
                type="password"
                margin="normal"
                name="password"
                autoComplete="new-password"
                value={password.value}
                onChange={this.handleInputChange}
                error={!password.isValid}
            />
            <TextField
                required
                fullWidth
                label="Repeat password"
                placeholder="Repeat your password..."
                type="password"
                margin="normal"
                name="repeatedPassword"
                autoComplete="new-password"
                value={repeatedPassword.value}
                onChange={this.handleInputChange}
                error={!repeatedPassword.isValid}
            />
            <Button
                    type="submit"
                    variant="raised"
                    fullWidth
                    className={classes.submitButton}
                >
                    Sign Up
                </Button>
            </form>
        );
    }
}

SignUpForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignUpForm);
