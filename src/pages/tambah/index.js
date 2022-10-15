import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';
import {InputData} from '../../component';
import FIREBASE from '../../config/FIREBASE';

export default class TambahKontak extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nama: '',
      nomorhp: '',
      alamat: '',
    };
  }

  onChangeText = (namaState, value) => {
    this.setState({
      [namaState]: value,
    });
  };

  onSubmit = () => {
    if (this.state.nama && this.state.nomorhp && this.state.alamat) {
      const kontakReferensi = FIREBASE.database().ref('Kontak');
      const kontak = {
        nama: this.state.nama,
        nomorhp: this.state.nomorhp,
        alamat: this.state.alamat,
      };
      kontakReferensi
        .push(kontak)
        .then(data => {
          Alert.alert('Sukses', 'Kontak telah tersimpan');
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
          placeholder="masukan nama"
          onChangeText={this.onChangeText}
          value={this.state.nama}
          namaState="nama"
        />
        <InputData
          label="No HP :"
          placeholder="masukan nomor Hp"
          keyboardType={'number-pad'}
          onChangeText={this.onChangeText}
          value={this.state.nomorhp}
          namaState="nomorhp"
        />
        <InputData
          label="Alamat :"
          placeholder="masukan alamat"
          isTextArea={true}
          onChangeText={this.onChangeText}
          value={this.state.alamat}
          namaState="alamat"
        />
        <TouchableOpacity style={styles.tombol} onPress={() => this.onSubmit()}>
          <Text style={styles.textTombol}>Submit</Text>
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
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    marginTop: 15,
  },
  textTombol: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
});
