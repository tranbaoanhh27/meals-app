import { FlatList, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import MealListItem from "../components/MealListItem";
import { useLayoutEffect } from "react";

const CategoryOverviewScreen = ({ route, navigation }) => {
    const categoryId = route.params.categoryId;
    if (!categoryId) navigation.navigate("Categories");

    const meals = JSON.parse(useSelector((store) => store.mealSlice.mealsString));
    const categories = JSON.parse(useSelector((store) => store.mealSlice.categoriesString));

    useLayoutEffect(() => {
        const category = categories.find((category) => category.id === categoryId);
        if (category)
            navigation.setOptions({
                title: category.title,
            });
    }, [categoryId, navigation]);

    const filteredMeals = meals.filter((meal) => meal.categoryIds.includes(categoryId));

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
