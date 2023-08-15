import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Text, View, SafeAreaView } from 'react-native';
import ColorBox from './components/ColorBox';
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
    <SafeAreaView>
    <ColorBox hexCode="#2aa198" colorName="Cyan"/>
    <ColorBox hexCode="#268bd2" colorName="Blue"/>
    <ColorBox hexCode="green" colorName="green"/>
    <ColorBox hexCode="green" colorName="green"/>
    <ColorBox hexCode="green" colorName="green"/>
    </SafeAreaView>
    </SafeAreaView>
  );
 
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 40,
  },
  heading:{
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
}
);

export default App;

