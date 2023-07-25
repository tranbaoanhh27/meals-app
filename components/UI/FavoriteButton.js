import { Pressable, StyleSheet } from "react-native";
import { View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import { Color } from "../../constants/colors";

const FavoriteButton = ({
    onLike = () => {},
    onDislike = () => {},
    color = "white",
    likedColor = Color.danger,
    size = 16,
    isLiked = false,
}) => {
    const [liked, setLiked] = useState(isLiked);

    const pressHandler = () => {
        setLiked((prev) => {
            if (prev) onDislike();
            else onLike();
            return !prev;
        });
    };

    return (
        <View style={styles.container}>
            <Pressable style={styles.pressable} onPress={pressHandler} android_ripple={{ color: "#ccc" }}>
                {!liked && <FontAwesome name="heart-o" size={size} color={color} />}
                {liked && <FontAwesome name="heart" size={size} color={likedColor} />}
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        overflow: "hidden",
        borderRadius: 16,
    },

    pressable: {
        padding: 8,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default FavoriteButton;
