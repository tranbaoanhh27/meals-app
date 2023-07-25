import { useSelector } from "react-redux";
import { View, FlatList, StyleSheet, Text } from "react-native";
import MealListItem from "../components/MealListItem";

const FavoriteMealsScreen = () => {
    const meals = JSON.parse(useSelector((store) => store.mealSlice.mealsString));
    const favoriteMeals = meals.filter((meal) => meal.isFavorite);
    return (
        <View style={styles.screen}>
            {favoriteMeals.length > 0 && (
                <FlatList
                    data={favoriteMeals}
                    keyExtractor={(meal) => meal.id}
                    renderItem={(itemData) => <MealListItem meal={itemData.item} />}
                />
            )}
            {favoriteMeals.length <= 0 && <Text style={styles.text}>You have not marked any meal as favorite!</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },

    text: {
        marginTop: 24,
        fontSize: 18,
        color: "white",
        textAlign: "center",
    },
});

export default FavoriteMealsScreen;
