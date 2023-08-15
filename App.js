import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Text, View, SafeAreaView, FlatList } from 'react-native';
import ColorBox from './components/ColorBox';


const Color = props =>{
  return (
    <View style = {styles.color}>
      <Text style = {styles.text}>{props.name}</Text>
    </View>
  );
}

const COLORS = [
  { colorName: 'Base03', hexCode: '#002b36' },
  { colorName: 'Base02', hexCode: '#073642' },
  { colorName: 'Base01', hexCode: '#586e75' },
  { colorName: 'Base00', hexCode: '#657b83' },
  { colorName: 'Base0', hexCode: '#839496' },
  { colorName: 'Base1', hexCode: '#93a1a1' },
  { colorName: 'Base2', hexCode: '#eee8d5' },
  { colorName: 'Base3', hexCode: '#fdf6e3' },
  { colorName: 'Yellow', hexCode: '#b58900' },
  { colorName: 'Orange', hexCode: '#cb4b16' },
  { colorName: 'Red', hexCode: '#dc322f' },
  { colorName: 'Magenta', hexCode: '#d33682' },
  { colorName: 'Violet', hexCode: '#6c71c4' },
  { colorName: 'Blue', hexCode: '#268bd2' },
  { colorName: 'Cyan', hexCode: '#2aa198' },
  { colorName: 'Green', hexCode: '#859900' },
];


const App = () => {
  return (
    <SafeAreaView style={styles.container}>
    <FlatList style = {styles.container}
    data={COLORS}
    keyExtractor={item => item.hexCode}
    renderItem={({ item }) => ( <ColorBox hexCode={item.hexCode} colorName={item.colorName} />
    )}
    ListHeaderComponent={<Text style={styles.heading}>Solarized</Text>} />
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

export default App;

