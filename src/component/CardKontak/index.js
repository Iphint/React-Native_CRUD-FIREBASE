import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const CardKontak = ({id, kontakItem, navigation, removeData}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('Detail Kontak', {id: id})}>
      <View>
        <Text style={styles.nama}>{kontakItem.nama}</Text>
      </View>
      <View style={styles.action}>
        <TouchableOpacity style={styles.aksi}>
          <Text
            style={styles.edit}
            onPress={() => navigation.navigate('Edit Kontak', {id: id})}>
            Edit
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.delete} onPress={() => removeData(id)}>
            Hapus
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default CardKontak;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: 'white',
    marginBottom: 20,
    borderRadius: 20,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.22,
    shadowRadius: 10.24,
    elevation: 13,
  },
  nama: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'black',
  },
  nohp: {
    fontSize: 12,
    color: 'gray',
  },
  action: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  aksi: {
    marginHorizontal: 12,
  },
  edit: {
    color: 'green',
    fontWeight: 'bold',
    fontFamily: 'sans-serif-thin',
  },
  delete: {
    color: 'red',
    fontWeight: 'bold',
    fontFamily: 'sans-serif-thin',
  },
});
