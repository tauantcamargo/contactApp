import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Header = props => {
  return(
    <View style={styles.topBar}>
      <Text style={styles.topBar__title}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  topBar: {
    marginTop: 24,
    backgroundColor: '#2c3e50',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center'
  },
  topBar__title: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default Header;

