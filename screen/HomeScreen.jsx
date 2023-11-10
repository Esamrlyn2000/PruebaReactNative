import * as React from "react";
import { View, Text, Button, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import axios from "axios";
import Tarjeta from "../components/Tarjeta";
import { useFocusEffect } from "@react-navigation/native";

function HomeScreen({ navigation }) {
  const [data, setData] = React.useState([]);
  const getData = () => {
    axios
      .get("http://172.20.1.70:5000/autos")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useFocusEffect(
    React.useCallback(() => {
      getData();
    }, [])
  );

  const refresh = () => {
    getData();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Home" />
      <Button
        onPress={() => navigation.navigate("create")}
        title="Crear Auto"
        color="#25AFC0"
      />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.content}>
          <Text style={styles.homeText}>Home Screen</Text>
          {data.map((item, index) => (
            <Tarjeta
              key={index}
              id={item.id}
              imagen={item.fotos[0]}
              nombre={item.nombre}
              marca={item.marca}
              puertas={item.puertas}
              color={item.color}
              anio={item.anio}
              refresh={refresh}
            />
          ))}
          {/*<Button
            onPress={() => navigation.navigate("Sobre")}
            title="Ir a Sobre Nosotros"
            color="#25AFC0"
          />*/}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff", // Puedes ajustar el color de fondo según tus preferencias
  },
  scrollContainer: {
    flexGrow: 1,
  },
  content: {
    padding: 16,
  },
  homeText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
});

export default HomeScreen;
