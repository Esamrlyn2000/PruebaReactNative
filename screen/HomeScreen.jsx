import * as React from "react";
import { View, Text, Button, ScrollView, StyleSheet  } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import axios from "axios";
import Tarjeta from "../components/Tarjeta";

function HomeScreen({ navigation }) {
    const [data, setData] = React.useState([]);
    const getData = () => {
        axios.get("https://apisimpsons.fly.dev/api/personajes?limit=50").then((res) => {
            setData(res.data.docs);
        });
        
    };
    React.useEffect(() => {
        getData();
    }, []);
    return (
        <SafeAreaView style={styles.container}>
          <Header title="Home" />
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.content}>
              <Text style={styles.homeText}>Home Screen</Text>
              {data.map((item, index) => (
                <Tarjeta
                  key={index}
                  imagen={item.Imagen}
                  nombre={item.Nombre}
                  genero={item.Genero}
                  estado={item.Estado}
                  ocupacion={item.Ocupacion}
                />
              ))}
              <Button
                onPress={() => navigation.navigate('Sobre')}
                title="Ir a Sobre Nosotros"
                color="#25AFC0"
              />
            </View>
          </ScrollView>
        </SafeAreaView>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff', // Puedes ajustar el color de fondo según tus preferencias
    },
    scrollContainer: {
      flexGrow: 1,
    },
    content: {
      padding: 16,
    },
    homeText: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 16,
    },
  });

export default HomeScreen;
