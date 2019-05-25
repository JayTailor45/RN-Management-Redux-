import React, { Component } from 'react';
import {connect} from 'react-redux';
import {employeesFetch} from '../actions';
import _ from 'lodash';
import ListItem from './ListItem';

import { View, Text, ListView } from 'react-native';

class EmployeeList extends Component {

  componentWillMount() {
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

  renderRow(employee) {
    return <ListItem employee={employee}/>
  }

  render() {
    return (
        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow}
        >

        </ListView>
    )
  }
}

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val,uid) => {
    return {...val,uid}
  });
  console.warn('Warn', employees)
  return {employees};
};

export default connect(mapStateToProps, { employeesFetch } )(EmployeeList);