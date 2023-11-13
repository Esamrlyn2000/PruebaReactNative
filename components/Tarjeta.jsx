import React from 'react';
import { GestureHandlerRootView, TouchableOpacity } from 'react-native-gesture-handler';
import { View, Text, Image, StyleSheet } from 'react-native';
import SwipeToDeleteItem from './Swipeable';
import axios from 'axios';

const Tarjeta = ({ id, imagen, nombre, marca, puertas, color, anio, refresh, onClick }) => {
  const handleDelete = () => {
    const config = {
      method: "delete",
      url: `http://172.20.1.70:5000/autos/${id}}`,
    };
    axios(config)
      .then(() => {
        alert("Auto eliminado exitosamente");
        refresh();
      })
      .catch((error) => {
        console.error(error);
        alert("Error al eliminar el auto");
      });
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SwipeToDeleteItem onDelete={() => handleDelete()}>
        <TouchableOpacity onPress={onClick}>
          <View style={styles.tarjeta}>
            <Image source={{ uri: imagen }} style={styles.imagen} />
            <View style={styles.detalles}>
              <Text style={styles.nombre}>{nombre}</Text>
              <Text>Marca: {marca}</Text>
              <Text>Cantidad de puertas: {puertas}</Text>
              <Text>Color: {color}</Text>
              <Text>Año del Vehiculo: {anio}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </SwipeToDeleteItem>
    </GestureHandlerRootView>
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
  rightActions: {
    width: 100,
    justifyContent: 'flex-end',
  },
});

export default Tarjeta;
