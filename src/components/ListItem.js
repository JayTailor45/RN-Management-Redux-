import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';
import { CardSection } from './common/CardSection';

class ListItem extends Component {
  render () {
    const {name} = this.props.employee;

    console.log('username  ',name)

    return(
      <CardSection>
        <Text style={styles.titleStyle}>
          {name}
        </Text>
      </CardSection>
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
