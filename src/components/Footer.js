import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Footer = props => {
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.text}>Contacts count: {props.count}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: '#bdc3c7',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default Footer;