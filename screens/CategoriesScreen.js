import { FlatList, StyleSheet, View } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridItem from "../components/CategoryGridItem";

const CategoriesScreen = () => {
    return (
        <View style={styles.screen}>
            <FlatList
                data={CATEGORIES}
                renderItem={(itemData) => <CategoryGridItem category={itemData.item} />}
                keyExtractor={(category) => category.id}
                numColumns={2}
            />
        </View>
    );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
    },
});
