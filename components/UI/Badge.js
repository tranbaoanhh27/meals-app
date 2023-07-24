import { StyleSheet, View, Text } from "react-native";

const Badge = ({ text = "Badge", backgroundColor = "red", textColor = "white", fontSize = 12 }) => {
    return (
        <View style={[styles.container, { backgroundColor }]}>
            <Text style={{ color: textColor, fontSize }}>{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 8,
    },
});

export default Badge;
