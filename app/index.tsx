import { View, Text, Image, ImageBackground } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import CustomButton from "@/components/CustomButton";
import AppGradient from "@/components/AppGradient";
import { useRouter } from "expo-router";
import Animated, {
    FadeInDown,
    FadeInUp,
    withSpring,
} from "react-native-reanimated";

import beachImage from "@/assets/meditation-images/beach.webp";

const App = () => {
    const router = useRouter();

    return (
        <View className="flex-1">
            <ImageBackground
                source={beachImage}
                resizeMode="cover"
                className="flex-1"
            >
                <AppGradient
                    // Background Linear Gradient
                    colors={["rgba(0,0,0,0.2)", "rgba(0,0,0,0.2)"]}
                >
                    <SafeAreaView className="flex flex-1 px-1 justify-between">
                        <Animated.View
                            entering={FadeInDown.delay(90)
                                .mass(0.5)
                                .stiffness(60)
                                .springify(15)}
                        >
                            <Text className="text-center text-black font-bold text-4xl">
                                Simple Meditation
                            </Text>
                            <Text className="text-center text-grey font-regular text-2xl mt-3">
                                Simplifying Meditation for Everyone
                            </Text>
                        </Animated.View>

                        <Animated.View
                            entering={FadeInDown.delay(90)
                                .mass(0.5)
                                .stiffness(60)
                                .springify(15)}
                        >
                            <CustomButton
                                onPress={() => router.push("/nature-meditate")}
                                title="Get Started"
                            />
                        </Animated.View>

                        <StatusBar style="light" />
                    </SafeAreaView>
                </AppGradient>
            </ImageBackground>
        </View>
    );
};

export default App;
