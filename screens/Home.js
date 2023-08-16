import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, FlatList, RefreshControl } from "react-native";
import PalettePreview from "../components/PalettePreview";

const URL = 'https://color-palette-api.kadikraman.now.sh/palettes';

const Home = ({ navigation }) => {
    const [palettes, setPalettes] = useState([]);
    const [isRefreshing, setIsRefreshing] = useState(false);

    const handleFetchPalettes = useCallback(async () => {
        try {
            const response = await fetch(URL);
            if (response.ok) {
                const palettes = await response.json();
                setPalettes(palettes);
            }
        } catch (error) {
            console.error("Error fetching palettes:", error);
        }
    }, []);

    useEffect(() => {
        handleFetchPalettes();
    }, []);

    const handleRefresh = useCallback(async () => {
        setIsRefreshing(true);
        await handleFetchPalettes(); // Fetch new data
        setIsRefreshing(false); // Done refreshing
    }, [handleFetchPalettes]);

    return (
        <FlatList
            style={styles.list}
            data={palettes}
            keyExtractor={item => item.paletteName}
            renderItem={({ item }) => (
                <PalettePreview
                    onPress={() => navigation.push('ColorPalette', item)}
                    palette={item}
                />
            )}
            refreshControl={
                <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
            }
        />
    );
};

const styles = StyleSheet.create({
    list: {
        flex: 1,
        padding: 10,
        backgroundColor: 'white',
    },
});

export default Home;
