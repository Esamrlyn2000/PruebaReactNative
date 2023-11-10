import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, Animated, StyleSheet } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';

const SwipeToDeleteItem = ({ item, onDelete, onArchive, children }) => {
  const swipeableRef = useRef(null);

  const closeSwipeable = () => {
    if (swipeableRef.current) {
      swipeableRef.current.close();
    }
  };

  const renderRightActions = (_, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });

    return (
      <TouchableOpacity onPress={() => { onDelete(); closeSwipeable(); }}>
        <View style={styles.deleteButtonContainer}>
          <Animated.Text style={[styles.deleteButtonText, { transform: [{ scale }] }]}>
            Eliminar
          </Animated.Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderLeftActions = (_, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    });

    return (
      <TouchableOpacity onPress={() => { onArchive(); closeSwipeable(); }}>
        <View style={styles.archiveButtonContainer}>
          <Animated.Text style={[styles.archiveButtonText, { transform: [{ scale }] }]}>
            Modificar
          </Animated.Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <Swipeable
      renderRightActions={renderRightActions}
      renderLeftActions={renderLeftActions}
      overshootRight={false}
      overshootLeft={false}
      ref={swipeableRef}
    >
      <View style={styles.container}>
        {children}
      </View>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  deleteButtonContainer: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 10,
  },
  deleteButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 18,
  },
  archiveButtonContainer: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 10,
  },
  archiveButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 18,
  },
});

export default SwipeToDeleteItem;
