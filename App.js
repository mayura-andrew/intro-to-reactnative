import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Text, View, SafeAreaView } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style = {styles.SafeArea}>
    <View style ={styles.container}>
      <Text>Working on something new:) Let's goooo</Text>
    </View>
    <View style ={styles.container1}>
      <Text>Working on something new:) Let's goooo</Text>
    </View>
    <View style ={styles.container2}>
      <Text>Working on something new:) Let's goooo</Text>
    </View>
    <View style ={styles.container3}>
      <Text>Working on something new:) Let's goooo</Text>
    </View>

    </SafeAreaView>
  );
 
}

const styles = StyleSheet.create({
  container: {
    // marginTop: 50,
    // paddingTop: 50, 
    // paddingBottom: 50,
    // paddingLeft:30,
    // paddingRight:30,

    paddingVertical: 2,
    paddingHorizontal: 2,
    marginVertical: 1,
    marginHorizontal: 1,
    backgroundColor: 'cyan',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  container1: {
    // marginTop: 50,
    // paddingTop: 50, 
    // paddingBottom: 50,
    // paddingLeft:30,
    // paddingRight:30,

    paddingVertical: 30,
    paddingHorizontal: 30,
    marginVertical: 10,
    marginHorizontal: 10,
    backgroundColor: 'red',
    alignItems: 'blue',
    justifyContent: 'center',
    flex: 1,
  },
  container2: {
    // marginTop: 50,
    // paddingTop: 50, 
    // paddingBottom: 50,
    // paddingLeft:30,
    // paddingRight:30,

    paddingVertical: 30,
    paddingHorizontal: 30,
    marginVertical: 10,
    marginHorizontal: 10,
    backgroundColor: 'magenta',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  container3: {
    // marginTop: 50,
    // paddingTop: 50, 
    // paddingBottom: 50,
    // paddingLeft:30,
    // paddingRight:30,
    marginVertical: 10,
    marginHorizontal: 10,
    paddingVertical: 30,
    paddingHorizontal: 30,
    backgroundColor: '#cb4b16',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  SafeArea:{
    flex:1,
  }
  

});

export default App;

