import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import axios from 'axios';

import Header from './src/components/Header';
import Footer from './src/components/Footer';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      peoples: []
    };
  }

  componentDidMount() {
    axios
      .get('https://randomuser.me/api/?results=50&?nat=eua')
      .then(response => {
        const { results } = response.data;
        this.setState({
          peoples: results
        });
      });
  }

  RenderList() {
    const textElements = this.state.peoples.map((people, i) => {
      return (
        <View style={styles.listContainer} key={i}>
          <Text style={styles.list}>{people.name.first}</Text>
        </View>
      );
    });

    return textElements;
  }

  render() {
    return (
      <ScrollView>
        <View>
         <Header title="Contacts"/>
         {this.RenderList()}
         <Footer count={this.state.peoples.length}/>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: '#ecf0f1',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#bdc3c7'
  },
  list: {
    color: '#000000',
    paddingLeft: 15,
    fontSize: 20,
    fontWeight: 'bold',
  }
})