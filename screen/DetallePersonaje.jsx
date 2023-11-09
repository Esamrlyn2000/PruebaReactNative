import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header';

const DetallesScreen = ({ route }) => {
  // Obtén los parámetros de la ruta
  const { imagen, nombre, genero, estado, ocupacion, historia } = route.params;

  return (
    <View style={styles.container}>
      <Header title={nombre} />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.detalleContainer}>
          <View style={styles.imagenContainer}>
            <Image source={{ uri: imagen }} style={styles.imagen} />
          </View>
          <View style={styles.detalles}>
            <Text style={styles.nombre}>{nombre}</Text>
            <Text>Género: {genero}</Text>
            <Text>Estado: {estado}</Text>
            <Text>Ocupación: {ocupacion}</Text>
            <Text>Historia: {historia}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    padding: 16,
  },
  detalleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imagenContainer: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  imagen: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  detalles: {
    flex: 1,
  },
  nombre: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default DetallesScreen;
