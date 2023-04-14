import { StyleSheet, View } from 'react-native';
import Arma from './src/components/Teste'

export default function App() {
  return (
    <View style={styles.container}>
      <Arma />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color : 'white',
    fontSize: '20px',
    fontWeight: 'bold'
  }
});
