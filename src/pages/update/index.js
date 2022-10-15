import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';
import {InputData} from '../../component';
import FIREBASE from '../../config/FIREBASE';

export default class EditKontak extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nama: '',
      nomorhp: '',
      alamat: '',
    };
  }
  componentDidMount() {
    FIREBASE.database()
      .ref('Kontak/' + this.props.route.params.id)
      .once('value', querySnapShot => {
        let data = querySnapShot.val() ? querySnapShot.val() : {};
        let kontakItem = {...data};
        this.setState({
          nama: kontakItem.nama,
          nomorhp: kontakItem.nomorhp,
          alamat: kontakItem.alamat,
        });
      });
  }

  onChangeText = (namaState, value) => {
    this.setState({
      [namaState]: value,
    });
  };

  onSubmit = () => {
    if (this.state.nama && this.state.nomorhp && this.state.alamat) {
      const kontakReferensi = FIREBASE.database().ref(
        'Kontak/' + this.props.route.params.id,
      );
      const kontak = {
        nama: this.state.nama,
        nomorhp: this.state.nomorhp,
        alamat: this.state.alamat,
      };
      kontakReferensi
        .update(kontak)
        .then(data => {
          Alert.alert('Sukses', 'Kontak terupdate');
          this.props.navigation.replace('Home');
        })
        .catch(error => {
          console.log('error');
        });
    } else {
      Alert.alert('Error', 'Nama, nomor hp, dan Alamat wajib di isi');
    }
  };

  render() {
    return (
      <View style={styles.pages}>
        <InputData
          label="Nama :"
          onChangeText={this.onChangeText}
          value={this.state.nama}
          namaState="nama"
        />
        <InputData
          label="No HP :"
          keyboardType={'number-pad'}
          onChangeText={this.onChangeText}
          value={this.state.nomorhp}
          namaState="nomorhp"
        />
        <InputData
          label="Alamat :"
          isTextArea={true}
          onChangeText={this.onChangeText}
          value={this.state.alamat}
          namaState="alamat"
        />
        <TouchableOpacity style={styles.tombol} onPress={() => this.onSubmit()}>
          <Text style={styles.textTombol}>Update</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    margin: 30,
  },
  tombol: {
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 5,
    marginTop: 15,
  },
  textTombol: {
    color: 'blue',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
});
