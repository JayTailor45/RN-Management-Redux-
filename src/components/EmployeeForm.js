import React, {Component} from 'react';
import {Picker, StyleSheet, Text, View} from 'react-native'
import {CardSection, Input} from "./common";
import {employeeUpdate} from '../actions';
import {connect} from 'react-redux';

class EmployeeForm extends Component {

  render() {
    return (
        <View>
          <CardSection>
            <Input
                label={'Name'}
                placeholder={'Employee name'}
                value={this.props.name}
                onChangeText={value => this.props.employeeUpdate({prop: 'name', value})}
            />
          </CardSection>

          <CardSection>
            <Input
                label={'Phone'}
                placeholder={'9997979995'}
                value={this.props.phone}
                onChangeText={value => this.props.employeeUpdate({prop: 'phone', value})}
            />
          </CardSection>

          <CardSection>
            <Text style={styles.pickerTextStyle}>
              Shift
            </Text>
            <Picker
                style={{flex: 1, flexDirection: 'column'}}
                selectedValue={this.props.shift}
                onValueChange={value => this.props.employeeUpdate({prop: 'shift', value})}
            >
              <Picker.Item label='Monday' value='Monday'/>
              <Picker.Item label='Tuesday' value='Tuesday'/>
              <Picker.Item label='Wednesday' value='Wednesday'/>
              <Picker.Item label='Thursday' value='Thursday'/>
              <Picker.Item label='Friday' value='Friday'/>
              <Picker.Item label='Saturday' value='Saturday'/>
              <Picker.Item label='Sunday' value='Sunday'/>
            </Picker>
          </CardSection>
        </View>
    )
  }

}

const styles = StyleSheet.create({
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20,
    position: 'absolute',
    marginTop: 16,
    marginLeft: 5
  }
});

const mapStateToProps = (state) => {
  const { name, phone, shift} = state.employeeForm;
  return {name, phone, shift};
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);