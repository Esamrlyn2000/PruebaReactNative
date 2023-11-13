import React, { useState, useCallback } from "react";
import { View, Text, Button, ScrollView, StyleSheet, TouchableOpacity, RefreshControl } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import axios from "axios";
import Tarjeta from "../components/Tarjeta";
import { useFocusEffect } from "@react-navigation/native";

function HomeScreen({ navigation }) {
  const [data, setData] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const getData = () => {
    axios
      .get("http://172.20.1.70:5000/autos")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsRefreshing(false);
      });
  };

  const onRefresh = () => {
    setIsRefreshing(true);
    getData();
  };

  useFocusEffect(
    useCallback(() => {
      getData();
    }, [])
  );

  const goToAuto = (item) => {
    navigation.navigate("auto", { auto: item });
  };

  const renderAutos = () => {
    return data.map((item, index) => (
      <Tarjeta
        key={index}
        id={item.id}
        imagen={item.fotos[0]}
        nombre={item.nombre}
        marca={item.marca}
        puertas={item.puertas}
        color={item.color}
        anio={item.anio}
        refresh={getData}
        onClick={() => goToAuto(item)}
      />
    ));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Home" />
      <View style={styles.buttonContainer}>
        <Button onPress={() => navigation.navigate("create")} title="Crear Auto" color="#25AFC0" />
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />}
      >
        <View style={styles.content}>
          <Text style={styles.homeText}>Lista de Autos</Text>
          {renderAutos()}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  buttonContainer: {
    margin: 16,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  content: {
    padding: 16,
  },
  homeText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});

export default HomeScreen;
