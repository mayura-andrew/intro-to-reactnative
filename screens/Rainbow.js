import 'react-native-gesture-handler';
import {  NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Text, View, SafeAreaView, FlatList } from 'react-native';
import ColorBox from '../components/ColorBox';


const Color = props =>{
  return (
    <NavigationContainer>
    <View style = {styles.color}>
      <Text style = {styles.text}>{props.name}</Text>
    </View>
    </NavigationContainer>
  );
}


const RAINBOW = [
    { colorName: 'Red', hexCode: '#FF0000' },
    { colorName: 'Orange', hexCode: '#FF7F00' },
    { colorName: 'Yellow', hexCode: '#FFFF00' },
    { colorName: 'Green', hexCode: '#00FF00' },
    { colorName: 'Violet', hexCode: '#8B00FF' },
  ];
  

const Rainbow = () => {
  return (
    <SafeAreaView style={styles.container}>
    <FlatList style = {styles.container}
    data={RAINBOW}
    keyExtractor={item => item.hexCode}
    renderItem={({ item }) => ( <ColorBox hexCode={item.hexCode} colorName={item.colorName} />
    )}
    ListHeaderComponent={<Text style={styles.heading}>Rainbow</Text>} />
    </SafeAreaView>
  );
 
}


const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 40,
    paddingTop: 10
  },
  text:{
    color: "white",
    fontWeight: 'bold',
  },
  color:{
    padding: 10,
    marginBottom: 10,
    backgroundColor: "teal",
    alignItems: 'center',
  },
  heading:{
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  }
}
);

export default Rainbow;

