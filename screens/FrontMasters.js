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


const FRONTEND_MASTERS = [
    { colorName: 'Red', hexCode: '#c02d28' },
    { colorName: 'Black', hexCode: '#3e3e3e' },
    { colorName: 'Grey', hexCode: '#8a8a8a' },
    { colorName: 'White', hexCode: '#ffffff' },
    { colorName: 'Orange', hexCode: '#e66225' },
];

const FrontMasters = () => {
  return (
    <SafeAreaView style={styles.container}>
    <FlatList style = {styles.container}
    data={FRONTEND_MASTERS}
    keyExtractor={item => item.hexCode}
    renderItem={({ item }) => ( <ColorBox hexCode={item.hexCode} colorName={item.colorName} />
    )}
    ListHeaderComponent={<Text style={styles.heading}>Front Masters</Text>} />
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

export default FrontMasters;

