import React, { useState, useCallback } from "react";
import { View, Text, Image, StyleSheet, ScrollView, RefreshControl } from "react-native";
import Carousel from "react-native-snap-carousel";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import { Ionicons } from "@expo/vector-icons"; // Asegúrate de tener instalada la librería @expo/vector-icons

const AutoScreen = ({ route, navigation }) => {
  const { auto } = route.params;
  const [isRefreshing, setIsRefreshing] = useState(false);

  const renderCarouselItem = ({ item }) => (
    <View style={styles.carouselItem}>
      <Image source={{ uri: item }} style={styles.carouselImage} />
    </View>
  );

  const onRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        back
        title={auto.nombre}
        onBackPress={() => navigation.goBack()}
        rightComponent={
          <Ionicons
            name="refresh-outline"
            size={24}
            color="#fff"
            style={styles.refreshIcon}
            onPress={onRefresh}
          />
        }
      />
      <View style={styles.content}>
        <Carousel
          data={auto.fotos}
          renderItem={renderCarouselItem}
          sliderWidth={300}
          itemWidth={300}
        />
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />}
        >
          <View style={styles.detailsContainer}>
            <Text style={styles.name}>{auto.nombre}</Text>
            <Text style={styles.brand}>{auto.marca}</Text>
            <Text style={styles.doors}>Puertas: {auto.puertas}</Text>
            <Text style={styles.color}>Color: {auto.color}</Text>
            <Text style={styles.year}>Año: {auto.anio}</Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    alignItems: "center",
  },
  carouselItem: {
    borderRadius: 8,
    overflow: "hidden",
  },
  carouselImage: {
    width: 300,
    height: 200,
  },
  detailsContainer: {
    padding: 16,
    marginTop: 16,
    alignItems: "center",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },
  brand: {
    fontSize: 18,
    marginBottom: 8,
    color: "#555",
  },
  doors: {
    fontSize: 16,
    marginBottom: 8,
    color: "#777",
  },
  color: {
    fontSize: 16,
    marginBottom: 8,
    color: "#777",
  },
  year: {
    fontSize: 16,
    color: "#777",
  },
  scrollContainer: {
    flexGrow: 1,
  },
  refreshIcon: {
    marginRight: 16,
  },
});

export default AutoScreen;
