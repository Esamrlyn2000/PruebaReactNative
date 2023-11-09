import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Header = ({ title, back, onBackPress, onEditPress }) => {
  return (
    <View style={styles.header}>
      {back && (
        <TouchableOpacity style={styles.iconContainer} onPress={onBackPress}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity style={styles.iconContainer} onPress={onEditPress}>
        <Ionicons name="person-circle-sharp" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#eee",
    padding: 10,
  },
  iconContainer: {
    padding: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
};

export default Header;
