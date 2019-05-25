import React, {Component} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import { CardSection } from './common/CardSection';
import {Actions} from "react-native-router-flux";

class ListItem extends Component {

  onEmployeeSelect() {
    Actions.employeeEdit({employee: this.props.employee});
  }

  render () {
    const {name} = this.props.employee;
    return(
        <TouchableOpacity onPress={this.onEmployeeSelect.bind(this)}>
          <CardSection>
            <Text style={styles.titleStyle}>
              {name}
            </Text>
          </CardSection>
        </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
});



export default ListItem;
