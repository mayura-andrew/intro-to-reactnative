import react from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Home = ({navigation}) => {
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.push('ColorPalette')}>
            <Text>Solarized</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.push('Rainbow')}>
            <Text>Rainbow</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.push('FrontMasters')}>
            <Text>Front Masters</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home;