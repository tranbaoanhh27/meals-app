import { FlatList, StyleSheet, View } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealListItem from "../components/MealListItem";
import { useLayoutEffect } from "react";

const CategoryOverviewScreen = ({ route, navigation }) => {
    const categoryId = route.params.categoryId;
    if (!categoryId) navigation.navigate("Categories");

    useLayoutEffect(() => {
        const category = CATEGORIES.find((category) => category.id === categoryId);
        if (category)
            navigation.setOptions({
                title: category.title,
            });
    }, [categoryId, navigation]);

    const filteredMeals = MEALS.filter((meal) => meal.categoryIds.includes(categoryId));

    return (
        <View style={styles.screen}>
            <FlatList
                data={filteredMeals}
                keyExtractor={(meal) => meal.id}
                renderItem={(itemData) => <MealListItem meal={itemData.item} />}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
});

export default CategoryOverviewScreen;
