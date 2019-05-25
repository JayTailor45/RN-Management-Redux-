import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Card,CardSection,Button, Confirm} from './common';
import EmployeeForm from './EmployeeForm';
import {employeeUpdate, employeeSave, employeeDelete} from '../actions';
import _ from 'lodash';
import Communications from 'react-native-communications';
import {Modal, StyleSheet, Text, View} from "react-native";

class EmployeeEdit extends Component {

  state = {
    showModal: false
  };

  componentWillMount() {
    // Populate form value for each properties
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({prop,  value})
    });
  }

  onUpdateClicked() {
    const {name, phone, shift} = this.props;
    this.props.employeeSave({name, phone, shift, uid: this.props.employee.uid})
  }

  onTextPress() {
    const {phone, shift} = this.props;
    Communications.text(phone,`Your upcoming shift is on ${shift}.`)
  }

  onCancel() {
    this.setState({showModal: false})
  }

  onAccept() {
    const {uid} = this.props.employee;
    this.props.employeeDelete(uid)
  }

  render() {
    return (
      <Card>
        <EmployeeForm/>
        <CardSection>
          <Button onPress={this.onUpdateClicked.bind(this)}>
            Save changes
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.onTextPress.bind(this)}>
            Text Schedule
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={() => this.setState({showModal: true})}>
            Fire employee
          </Button>
        </CardSection>

        <Modal
            animationType='fade'
            onRequestClose={() => {}} // required to pass on android
            transparent
            visible={this.state.showModal}
        >
          <View style={styles.containerStyle}>
            <CardSection style={styles.cardSectionStyle}>
              <Text style={styles.textStyle}>Are you sure you want to delete this?</Text>
            </CardSection>
            <CardSection>
              <Button
                  onPress={()=> {
                    employeeDelete({uid: this.props.employee.uid})
                  }}
              >
                Yes
              </Button>
              <Button onPress={()=> this.setState({showModal: false})}>No</Button>
            </CardSection>
          </View>
        </Modal>
      </Card>
    )
  }

}

const styles = StyleSheet.create({
  cardSectionStyle: {
    justifyContent: 'center'
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40
  },
  containerStyle: {
    backgroundColor: 'rgba(0,0,0,0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  }
});

const mapStateToProps = state => {
  const {name, phone, shift} = state.employeeForm;
  return {name, phone, shift}
};
export default connect(mapStateToProps,{ employeeUpdate, employeeSave, employeeDelete })(EmployeeEdit);