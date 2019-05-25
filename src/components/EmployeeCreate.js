import React, {Component} from 'react'
import {Card, CardSection, Input, Button} from "./common";
import {employeeUpdate, employeeCreate, initEmployeeCreate} from '../actions';
import {connect} from 'react-redux';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component{

  componentWillMount() {
    this.props.initEmployeeCreate();
  }

  onButtonPress() {
    const {name, phone, shift} = this.props;

    this.props.employeeCreate({name, phone, shift})
  }

  render() {
    return(
        <Card>
          <EmployeeForm {...this.props}/>
          <CardSection>
            <Button onPress={this.onButtonPress.bind(this)}>
              Create
            </Button>
          </CardSection>

        </Card>
    )
  }
}

const mapStateToProps = (state) => {
  const {name, phone, shift} = state.employeeForm;

  return {name, phone, shift}
};

export default connect(mapStateToProps,{ employeeUpdate, employeeCreate, initEmployeeCreate })(EmployeeCreate);