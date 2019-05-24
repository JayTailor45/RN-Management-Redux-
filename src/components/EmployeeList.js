import React, { Component } from 'react';
import {connect} from 'react-redux';
import {employeesFetch} from '../actions';
import _ from 'lodash';

import { View, Text, ListView } from 'react-native';

class EmployeeList extends Component {

  componentWillMount(): void {
    this.props.employeesFetch();
    this.createDataSource(this.props)
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps)
  }

  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1,r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(employees)
  }

  render() {
    return (
        <View>
          <Text>Employee</Text>
          <Text>Employee</Text>
          <Text>Employee</Text>
          <Text>Employee</Text>
          <Text>Employee</Text>
          <Text>Employee</Text>
        </View>
    )
  }
}

const mapStateToProps = state => {
  // const employees = _.map()
};

export default connect(mapStateToProps, { employeesFetch } )(EmployeeList);