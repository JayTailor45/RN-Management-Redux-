import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Card, CardSection, Button} from './common';
import EmployeeForm from './EmployeeForm';
import {employeeUpdate, employeeSave, employeeDelete} from '../actions';
import _ from 'lodash';
import Communications from 'react-native-communications';
import {Alert} from "react-native";

class EmployeeEdit extends Component {

  componentWillMount() {
    // Populate form value for each properties
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({prop, value})
    });
  }

  onUpdateClicked() {
    const {name, phone, shift} = this.props;
    this.props.employeeSave({name, phone, shift, uid: this.props.employee.uid})
  }

  onTextPress() {
    const {phone, shift} = this.props;
    Communications.text(phone, `Your upcoming shift is on ${shift}.`)
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
            <Button onPress={() => {
              Alert.alert('Delete employee', 'Are you sure want to delete '+this.props.name+' ?', [
                {text: 'Yes', onPress: () => employeeDelete({uid: this.props.employee.uid})},
                {text: 'No', onPress: () => {}}
              ]);
            }}>
              Fire employee
            </Button>
          </CardSection>
        </Card>
    )
  }

}

const mapStateToProps = state => {
  const {name, phone, shift} = state.employeeForm;
  return {name, phone, shift}
};
export default connect(mapStateToProps, {employeeUpdate, employeeSave, employeeDelete})(EmployeeEdit);