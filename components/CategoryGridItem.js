import { Pressable, StyleSheet, Text, View, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Category from "../models/category";

const CategoryGridItem = ({ category = new Category("c1", "None", "red") }) => {
    const navigation = useNavigation();

    const navigateToCategoryOverview = () => {
        navigation.navigate("Category Overview", { categoryId: category.id });
    };

    return (
        <View style={styles.container}>
            <Pressable
                style={[styles.pressable, { backgroundColor: category.color }]}
                android_ripple={{ color: "#ccc" }}
                onPress={navigateToCategoryOverview}>
                <Text style={styles.categoryTitle}>{category.title}</Text>
            </Pressable>
        </View>
    );
};

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    container: {
        overflow: "hidden",
        width: deviceWidth * 0.4,
        height: deviceWidth * 0.4,
        borderRadius: 16,
        margin: 16,
        elevation: 10,
    },

    pressable: {
        flex: 1,
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center",
        width: deviceWidth * 0.4,
        height: deviceWidth * 0.4,
        borderRadius: 16,
    },

    categoryTitle: {
        fontWeight: "bold",
        fontSize: 20,
    },
});

export default CategoryGridItem;
