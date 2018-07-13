import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class PeopleList extends React.Component {
  return (
    <View>
      <Text>Contacts count: {props.count}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: '#95a5a6',
    height: 40,
    alignItems: 'center',
  },
  text: {
    color: '#fff'
  }
});