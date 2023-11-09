import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Tarjeta = ({ imagen, nombre, genero, estado, ocupacion }) => {
  return (
    <View style={styles.tarjeta}>
      <Image source={{ uri: imagen }} style={styles.imagen} />
      <View style={styles.detalles}>
        <Text style={styles.nombre}>{nombre}</Text>
        <Text>Género: {genero}</Text>
        <Text>Estado: {estado}</Text>
        <Text>Ocupación: {ocupacion}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tarjeta: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  imagen: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  detalles: {
    flex: 1,
  },
  nombre: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Tarjeta;
