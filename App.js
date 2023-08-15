import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Text, View, SafeAreaView } from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
    <View style ={styles.container}>
      <Text style = {styles.text}>Working on something new:) Let's goooo</Text>
    </View>
    <View style ={styles.container}>
      <Text style={styles.heading}>Here are some boxex of different colors</Text>
    <View style ={[styles.box, styles.cyanbox]}>
      <Text>Working on something new:) Let's goooo</Text>
    </View>
    <View style ={[styles.box, styles.blueBox]}>
      <Text>Working on something new:) Let's goooo</Text>
    </View>
    <View style ={[styles.box, styles.magenta]}>
      <Text>Working on something new:) Let's goooo</Text>
    </View>
    <View style ={[styles.box, styles.orange]}>
      <Text>Working on something new:) Let's goooo</Text>
    </View>
    </View>
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
  box:{
    padding: 10,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  cyanbox:{
    backgroundColor: '#2aa198',
  },
  blueBox:{
    backgroundColor: '#268bd2',
  },
  magenta: {
    backgroundColor: '#d33682',
  },
  orange: {
    backgroundColor: '#cb4b16',
  }}
);

export default App;

