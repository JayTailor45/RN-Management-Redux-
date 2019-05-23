import React, {Component} from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import
{ Card,
  CardSection,
  Input,
  Button,
  Spinner
} from './common';

class LoginForm extends Component {

  onEmailChange(text) {
    this.props.emailChanged(text);
    console.log(this.props.email)
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPressed() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  renderError() {
    if(this.props.error){
      return(
          <View style={{backgroundColor: '#fff'}}>
            <Text style={styles.errorTextStyle}>
              {this.props.error}
            </Text>
          </View>
      )
    }
  }

  renderButton(){
    if (this.props.loading) {
      return <Spinner size='large' />
    }

    return(
        <Button onPress={this.onButtonPressed.bind(this)}>
          Login
        </Button>
    );
  }

  render() {
    return (
        <Card>
          <CardSection>
            <Input
              label={'Email'}
              placeholder={'your email'}
              onChangeText={this.onEmailChange.bind(this)}
              value={this.props.email}
            />
          </CardSection>
          <CardSection>
            <Input
              isPassword={true}
              label={'Password'}
              placeholder={'your password'}
              onChangeText={this.onPasswordChange.bind(this)}
              value={this.props.password}
            />
          </CardSection>
          {this.renderError()}
          <CardSection>
            {this.renderButton()}
          </CardSection>
        </Card>
    );
  }
}

const styles = StyleSheet.create({
  errorTextStyle: {
    alignSelf: 'center',
    fontSize: 20,
    color: '#f00'
  }
});

const mapStateToProps = state => {

  const { email, password, error, loading } = state.auth;

  return {
    email,
    password,
    error,
    loading
  }
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
