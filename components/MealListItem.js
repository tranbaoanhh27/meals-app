import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Meal from "../models/meal";
import Badge from "./UI/Badge";
import { Color } from "../constants/colors";
import { useNavigation } from "@react-navigation/native";

const MealListItem = ({ meal = new Meal() }) => {
    const navigation = useNavigation();

    let complexityColor;

    switch (meal.complexity) {
        case "simple":
            complexityColor = Color.success;
            break;
        case "hard":
            complexityColor = Color.warning;
            break;
        default:
            complexityColor = Color.danger;
            break;
    }

    const navigateToMealDetails = () => {
        navigation.navigate("Meal Details", { meal });
    };

    return (
        <View style={styles.container}>
            <Pressable style={styles.pressable} android_ripple={{ color: "#ccc" }} onPress={navigateToMealDetails}>
                <Image source={{ uri: meal.imageUrl }} style={styles.image} />
                <View style={styles.info}>
                    <Text style={styles.title}>{meal.title}</Text>
                    <Text style={{ fontSize: 12, marginEnd: 4 }}>{`About ${meal.duration} mins`}</Text>
                    <View style={styles.tags}>
                        <Badge text={meal.complexity} backgroundColor={complexityColor} />
                        {meal.isGlutenFree && <Badge text="Gluten Free" backgroundColor="#cd0847" />}
                        {meal.isVegan && <Badge text="Vegan" backgroundColor="#089318" />}
                        {meal.isLactoseFree && <Badge text="Lactose Free" backgroundColor="#5b89df" />}
                    </View>
                </View>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        minHeight: 100,
        backgroundColor: "white",
        marginHorizontal: "5%",
        marginVertical: 16,
        borderRadius: 16,
        elevation: 10,
        overflow: "hidden",
    },

    pressable: {
        flex: 1,
        alignItems: "center",
        height: "100%",
    },

    image: {
        width: "100%",
        height: 150,
    },

    info: {
        flex: 1,
        height: "100%",
        justifyContent: "space-evenly",
        paddingVertical: 12,
    },

    title: {
        fontWeight: "bold",
        fontSize: 18,
        lineHeight: 24,
    },

    tags: {
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "flex-start",
        marginTop: 16,
        gap: 4,
        alignItems: "center",
    },
});

export default MealListItem;
