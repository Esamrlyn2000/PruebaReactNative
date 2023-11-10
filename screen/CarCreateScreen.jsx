import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import { AntDesign } from "@expo/vector-icons";
import axios from "axios";

const CarCreateScreen = ({ navigation }) => {
  const [nombre, setNombre] = useState("");
  const [marca, setMarca] = useState("");
  const [puertas, setPuertas] = useState("");
  const [color, setColor] = useState("");
  const [anio, setAnio] = useState("");
  const [fotos, setFotos] = useState([]);

  const limpiarDatos = () => {
    setNombre("");
    setMarca("");
    setPuertas("");
    setColor("");
    setAnio("");
    setFotos([]);
  };

  const handleCreateCar = () => {
      console.log({nombre, marca, puertas, color, anio, fotos});
      const config = {
        method: "post",
        url: `http://172.20.1.70:5000/autos`,
        data: {nombre, marca, puertas, color, anio, fotos},       
      };
      axios(config)
        .then((e) => {
          console.log(e.data);
          alert("Auto creado exitosamente");
          limpiarDatos();
          navigation.navigate('Home')
        })
        .catch((e) => {
          console.error(e);
          alert("Error al crear el auto");
        });
  };

  const handleAddImageUrl = () => {
    // Añadir la URL de la imagen al arreglo
    if (fotos.length < 5) {
      setFotos([...fotos, ""]);
    }
  };

  const handleRemoveImageUrl = (index) => {
    // Eliminar la URL de la imagen del arreglo
    const updatedImageUrls = [...fotos];
    updatedImageUrls.splice(index, 1);
    setFotos(updatedImageUrls);
  };

  const handleImageUrlChange = (index, url) => {
    // Actualizar la URL de la imagen en el arreglo
    const updatedImageUrls = [...fotos];
    updatedImageUrls[index] = url;
    setFotos(updatedImageUrls);
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header
        back
        title="Crear Nuevo Vehiculo"
        onBackPress={() => navigation.goBack()}
      />
      <ScrollView style={styles.container}>
        <Text style={styles.sectionTitle}>Detalles del Vehículo</Text>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Nombre:</Text>
          <TextInput
            style={styles.input}
            onChangeText={setNombre}
            value={nombre}
            placeholder="Ingrese el nombre del auto"
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Marca:</Text>
          <TextInput
            style={styles.input}
            onChangeText={setMarca}
            value={marca}
            placeholder="Ingrese la marca del auto"
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Cantidad de Puertas:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) =>
              setPuertas(text.replace(/[^0-9]/g, ""))
            }
            value={puertas}
            placeholder="Ingrese la cantidad de puertas"
            keyboardType="numeric"
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Color:</Text>
          <TextInput
            style={styles.input}
            onChangeText={setColor}
            value={color}
            placeholder="Ingrese el color del auto"
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Año del Vehículo:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) =>
              setAnio(text.replace(/[^0-9]/g, ""))
            }
            value={anio}
            placeholder="Ingrese el año del vehículo"
            keyboardType="numeric"
          />
        </View>

        <Text style={styles.sectionTitle}>Imágenes del Vehículo</Text>
        {fotos.map((url, index) => (
          <View key={index.toString()} style={styles.imageInputGroup}>
            <TextInput
              style={styles.input}
              onChangeText={(text) => handleImageUrlChange(index, text)}
              value={url}
              placeholder={`Ingrese URL de la imagen ${index + 1}`}
            />
            <TouchableOpacity onPress={() => handleRemoveImageUrl(index)}>
              <View style={styles.removeButton}>
                <AntDesign name="close" size={20} color="white" />
              </View>
            </TouchableOpacity>
          </View>
        ))}

        <View style={styles.buttonGroup}>
          <Button title="Crear Auto" onPress={handleCreateCar} />
          <TouchableOpacity onPress={handleAddImageUrl}>
            <View style={styles.addButton}>
              <AntDesign name="plus" size={24} color="white" />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  formGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    padding: 8,
    flex: 1,
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  addButton: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
  imageInputGroup: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  removeButton: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
});

export default CarCreateScreen;
