import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Image, ScrollView, StyleSheet, Text, ToastAndroid, View } from "react-native";
import FavoriteButton from "../components/UI/FavoriteButton";
import { MealSliceActions } from "../redux/slices/mealSlice";

const MealDetailScreen = ({ route, navigation }) => {
    const meal = route.params.meal;
    if (!meal) navigation.navigate("Categories");

    const dispatch = useDispatch();
    const meals = JSON.parse(useSelector((store) => store.mealSlice.mealsString));

    const like = () => {
        dispatch(MealSliceActions.markMealAsFavorite({ mealId: meal.id }));
        ToastAndroid.show("Added to Favorite Meals!", ToastAndroid.LONG);
    };

    const dislike = () => {
        dispatch(MealSliceActions.markMealAsNotFavorite({ mealId: meal.id }));
        ToastAndroid.show("Removed from Favorite Meals!", ToastAndroid.LONG);
    };

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <FavoriteButton
                    isLiked={meals.find((item) => item.id === meal.id).isFavorite}
                    onLike={like}
                    onDislike={dislike}
                />
            ),
        });
    }, [navigation, FavoriteButton]);

    return (
        <View style={styles.screen}>
            <ScrollView contentContainerStyle={styles.container}>
                <Image source={{ uri: meal.imageUrl }} style={styles.image} />
                <Text style={styles.title}>{meal.title}</Text>
                <View style={styles.sectionTitleContainer}>
                    <Text style={styles.sectionTitle}>Ingredients</Text>
                </View>
                {meal.ingredients.map((ingredient) => (
                    <Ingredient key={ingredient} text={ingredient} />
                ))}
                <View style={styles.sectionTitleContainer}>
                    <Text style={styles.sectionTitle}>Instructions</Text>
                </View>
                {meal.steps.map((step, index) => (
                    <Step key={step} text={step} number={index + 1} />
                ))}
            </ScrollView>
        </View>
    );
};

const Ingredient = ({ text = "" }) => {
    return (
        <View style={styles.ingredientContainer}>
            <Text style={styles.ingredientText}>{text}</Text>
        </View>
    );
};

const Step = ({ text = "", number = 1 }) => {
    return (
        <View style={styles.stepContainer}>
            <View style={styles.stepNumberContainer}>
                <Text style={styles.stepNumberText}>{`Step ${number}`}</Text>
            </View>
            <View style={styles.stepTextContainer}>
                <Text style={styles.stepText}>{text}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },

    container: {
        alignItems: "center",
        paddingVertical: "10%",
    },

    image: {
        width: "80%",
        aspectRatio: "1.5",
        borderRadius: 16,
    },

    title: {
        fontWeight: "bold",
        fontSize: 32,
        textAlign: "center",
        color: "white",
        marginTop: 32,
        maxWidth: "80%",
    },

    sectionTitleContainer: {
        borderBottomColor: "#c08c6b",
        borderBottomWidth: 2,
        width: "80%",
        paddingBottom: 8,
        marginBottom: 16,
    },

    sectionTitle: {
        fontSize: 28,
        textAlign: "center",
        color: "#c08c6b",
        marginTop: 32,
    },

    ingredientContainer: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#c08c6b",
        width: "80%",
        paddingVertical: 16,
        marginVertical: 8,
        borderRadius: 16,
    },

    ingredientText: {
        color: "white",
        textAlign: "center",
    },

    stepContainer: {
        flexDirection: "row",
        backgroundColor: "#c08c6b",
        borderRadius: 16,
        width: "80%",
        marginVertical: 8,
        paddingVertical: 8,
    },

    stepNumberContainer: {
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRightWidth: 1,
        borderRightColor: "white",
    },

    stepNumberText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18,
    },

    stepTextContainer: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 10,
        paddingVertical: 8,
    },

    stepText: {
        color: "white",
        lineHeight: 20,
    },
});

export default MealDetailScreen;
