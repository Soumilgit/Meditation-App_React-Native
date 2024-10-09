import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Content = ({ children }: any) => {
    return <SafeAreaView style={[styles.container]}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16, // Approximate conversion of TailwindCSS px-5
        paddingVertical: 10, // Approximate conversion of TailwindCSS py-3
    },
});

export default Content;
