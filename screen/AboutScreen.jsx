import * as React from "react";
import { View, Text, Button } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from "../components/Header";

function AboutScreen({navigation}) {
  return (
    <SafeAreaView>
      <View>
        <Header title="Sobre Nosotros" back onBackPress={() => navigation.goBack()} />
        <View >
          <Text>Sobre Nostros</Text>
          <Button
            onPress={() => alert("KLK Palomo")}
            title="Press me"
            color="#25AFC0"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default AboutScreen;