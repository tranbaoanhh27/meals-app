import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CategoriesScreen from "./screens/CategoriesScreen";
import CategoryOverviewScreen from "./screens/CategoryOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import FavoriteMealsScreen from "./screens/FavoriteMealsScreen";
import { Entypo, Fontisto } from "@expo/vector-icons";
import { Provider } from "react-redux";
import { dataStore } from "./redux/store";

const NavigationStack = createNativeStackNavigator();
const NavigationDrawer = createDrawerNavigator();

const HomeDrawerScreen = () => {
    return (
        <NavigationDrawer.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#181818",
                },
                headerTitleAlign: "center",
                sceneContainerStyle: {
                    backgroundColor: "#1f1f1f",
                },
                drawerStyle: { backgroundColor: "#181818" },
                drawerActiveBackgroundColor: "#c08c6b",
                drawerInactiveTintColor: "white",
                drawerActiveTintColor: "white",
                headerTintColor: "white",
            }}>
            <NavigationDrawer.Screen
                name="Categories"
                component={CategoriesScreen}
                options={{
                    drawerIcon: ({ color, size }) => <Entypo name="home" size={size} color={color} />,
                }}
            />
            <NavigationDrawer.Screen
                name="Favorite Meals"
                component={FavoriteMealsScreen}
                options={{
                    drawerIcon: ({ color, size }) => <Fontisto name="favorite" size={size} color={color} />,
                }}
            />
        </NavigationDrawer.Navigator>
    );
};

export default function App() {
    return (
        <Provider store={dataStore}>
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
                        <NavigationStack.Screen
                            name="Home"
                            component={HomeDrawerScreen}
                            options={{
                                headerShown: false,
                            }}
                        />
                        <NavigationStack.Screen name="Category Overview" component={CategoryOverviewScreen} />
                        <NavigationStack.Screen name="Meal Details" component={MealDetailScreen} />
                    </NavigationStack.Navigator>
                </NavigationContainer>
            </View>
        </Provider>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
});
