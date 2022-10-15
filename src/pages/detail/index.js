import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import FIREBASE from '../../config/FIREBASE';
export default class DetailKontak extends Component {
  constructor(props) {
    super(props);

    this.state = {
      kontak: {},
    };
  }

  componentDidMount() {
    FIREBASE.database()
      .ref('Kontak/' + this.props.route.params.id)
      .once('value', querySnapShot => {
        let data = querySnapShot.val() ? querySnapShot.val() : {};
        let kontakItem = {...data};
        this.setState({
          kontak: kontakItem,
        });
      });
  }
  render() {
    const {kontak} = this.state;
    return (
      <View style={styles.DetailKontak}>
        <Text style={styles.info}>Nama : {kontak.nama}</Text>
        <Text style={styles.info}>No HP : {kontak.nomorhp}</Text>
        <Text style={styles.info}>Alamat : {kontak.alamat}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  DetailKontak: {
    margin: 10,
    borderWidth: 2,
    backgroundColor: '#f0f8ff',
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
  info: {
    margin: 20,
    color: '#012456',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
