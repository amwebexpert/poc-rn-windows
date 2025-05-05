import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>react-native-windows</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: `center`,
    alignItems: `center`,
  },
  title: {
    textAlign: `center`,
    fontSize: 24,
    borderWidth: 1,
    borderColor: `red`,
    paddingHorizontal: 8,
    maxWidth: 600,
  },
});

export default App;
