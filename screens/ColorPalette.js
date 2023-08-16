import 'react-native-gesture-handler';
import {  NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Text, View, SafeAreaView, FlatList } from 'react-native';
import ColorBox from '../components/ColorBox';


const ColorPalette = ({route}) =>{
    const { colors } = route.params;

    return (
        <FlatList
        style = {styles.container}
        data={colors}
        keyExtractor={item => item.hexCode}
        renderItem={({ item }) => ( <ColorBox hexCode={item.hexCode} colorName={item.colorName} />
        )}
        />
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
    color: 'black',
    marginBottom: 10,

  }
}
);

export default ColorPalette;

