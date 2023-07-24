import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "./screens/CategoriesScreen";
import CategoryOverviewScreen from "./screens/CategoryOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";

const NavigationStack = createNativeStackNavigator();

export default function App() {
    return (
        <>
            <StatusBar style="light" />
            <View style={styles.screen}>
                <NavigationContainer>
                    <NavigationStack.Navigator
                        screenOptions={{
                            animation: "slide_from_right",
                            headerStyle: {
                                backgroundColor: "#181818",
                            },
                            headerTitleAlign: "center",
                            contentStyle: {
                                backgroundColor: "#1f1f1f",
                            },
                            headerTintColor: "white",
                        }}>
                        <NavigationStack.Screen name="Categories" component={CategoriesScreen} />
                        <NavigationStack.Screen name="Category Overview" component={CategoryOverviewScreen} />
                        <NavigationStack.Screen name="Meal Details" component={MealDetailScreen} />
                    </NavigationStack.Navigator>
                </NavigationContainer>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
});
