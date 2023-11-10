import { Animated } from 'react-native';

const transitionConfig = {
  transition: {
    duration: 500,
    timing: Animated.timing,
    easing: Animated.Easing.easeInOutExpo,
  },
  screenInterpolator: ({ scene }) => {
    const { position } = scene;
    const opacity = position.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    });

    const translateY = position.interpolate({
      inputRange: [0, 1],
      outputRange: [100, 0],
    });

    return { opacity, transform: [{ translateY }] };
  },
};

export default transitionConfig;