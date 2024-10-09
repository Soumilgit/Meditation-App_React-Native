import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";
import React from "react";
import {
    FlatList,
    ImageBackground,
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";

import MEDITATION_IMAGES from "@/constants/meditation-images";

import { MEDITATION_DATA, MeditationType } from "@/constants/MeditationData";
import AppGradient from "@/components/AppGradient";

const Page = () => {
    return (
        <View className="flex-1">
            <AppGradient
                // Background Linear Gradient
                colors={["#84343c", "#000000", "#f88934"]}
            >
                <View className="mb-6">
                    <Text className="text-white-200 mb-3 font-bold text-4xl text-left">
                        Welcome Soumil
                    </Text>
                    <Text className="text-white-100 text-xl font-medium">
                        Start your meditation practice today
                    </Text>
                </View>
                <View>
                    <FlatList
                        data={MEDITATION_DATA}
                        contentContainerStyle={styles.list}
                        keyExtractor={(item) => item.id.toString()}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <Pressable
                                onPress={() =>
                                    router.push(`/meditate/${item.id}`)
                                }
                                className="h-48 my-3 rounded-md overflow-hidden"
                            >
                                <ImageBackground
                                    source={MEDITATION_IMAGES[item.id - 1]}
                                    resizeMode="cover"
                                    style={styles.backgroundImage}
                                >
                                    <LinearGradient
                                       
                                        colors={[
                                            "transparent",
                                            "#ffffff",
                                        ]}
                                        style={styles.gradient}
                                    >
                                        <Text className="text-white-100 text-3xl font-bold text-center">
                                            {item.title}
                                        </Text>
                                    </LinearGradient>
                                </ImageBackground>
                            </Pressable>
                        )}
                    />
                </View>
            </AppGradient>
            <StatusBar style="light" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        borderRadius: 10,
        justifyContent: "center",
    },
    gradient: {
        alignItems: "center",
        height: "100%",
        justifyContent: "center",
        width: "100%",
    },
    list: {
        paddingBottom: 150,
    },
});

export default Page;