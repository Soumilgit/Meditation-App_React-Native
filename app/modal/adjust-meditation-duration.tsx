import AppGradient from "@/components/AppGradient";
import CustomButton from "@/components/CustomButton";
import { TimerContext } from "@/context/TimerContext";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useContext } from "react";
import { Pressable, Text, View } from "react-native";

const AdjustMeditationDuration = () => {
    const { setDuration } = useContext(TimerContext);

    const handlePress = (duration: number) => {
        setDuration(duration);
        router.back();
    };

    return (
        <View className="flex-1 relative">
            <AppGradient
                // Background Linear Gradient
                colors={["#ffb22c", "#ffd35a", "#fd9b63"]}
            >
                <Pressable
                    onPress={() => router.back()}
                    className="absolute top-5 left-8 z-9"
                >
                    <AntDesign name="leftcircleo" size={50} color="white" />
                </Pressable>
                <View className="justify-center h-4/5">
                    <View>
                        <Text className="text-center font-bold text-3xl text-grey mb-8">
                            Adjust your meditation duration
                        </Text>
                    </View>

                    <View>
                        <CustomButton
                            title="10 seconds"
                            onPress={() => handlePress(10)}
                            containerStyles="mb-5"
                        />
                        <CustomButton
                            title="5 minutes"
                            onPress={() => handlePress(5 * 60)}
                            containerStyles="mb-5"
                        />
                        <CustomButton
                            title="10 minutes"
                            onPress={() => handlePress(10 * 60)}
                            containerStyles="mb-5"
                        />
                        <CustomButton
                            title="15 minutes"
                            onPress={() => handlePress(15 * 60)}
                            containerStyles="mb-5"
                        />
                    </View>
                </View>
            </AppGradient>
        </View>
    );
};

export default AdjustMeditationDuration;
