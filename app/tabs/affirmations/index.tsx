import GuidedAffirmationsGallery from "@/components/GuidedAffirmationsGallery";
import AFFIRMATION_GALLERY from "@/constants/affirmation-gallary";
import images from "@/constants/affirmation-images";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Page = () => {
    const insets = useSafeAreaInsets();

    return (
        <View className="flex-1">
            <LinearGradient
                // Background Linear Gradient
                colors={["#CDC1FF", "#E4B1F0", "#a790af"]}
                className="px-5"
                style={{ paddingTop: insets.top }}
            >
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text className="text-black-50 text-3xl font-bold">
                        Change your beliefs with affirmations
                    </Text>
                    <View>
                        {AFFIRMATION_GALLERY.map((g) => (
                            <GuidedAffirmationsGallery
                                key={g.title}
                                title={g.title}
                                products={g.data}
                            />
                        ))}
                    </View>
                </ScrollView>
            </LinearGradient>
            <StatusBar style="light" />
        </View>
    );
};

const galleryData = [
    {
        title: "Positivity",
        data: [
            {
                id: 1,
                name: "test",
                image: images.img1,
            },
            {
                id: 2,
                name: "test",
                image: images.img2,
            },
            {
                id: 3,
                name: "test",
                image: images.img3,
            },
            {
                id: 4,
                name: "test",
                image: images.img4,
            },
        ],
    },
    {
        title: "Reduce Anxiety",
        data: [
            {
                id: 1,
                name: "test",
                image: images.img11,
            },
            {
                id: 2,
                name: "test",
                image: images.img12,
            },
            {
                id: 3,
                name: "test",
                image: images.img13,
            },
            {
                id: 4,
                name: "test",
                image: images.img14,
            },
        ],
    },
    {
        title: "Success",
        data: [
            {
                id: 1,
                name: "test",
                image: images.img21,
            },
            {
                id: 2,
                name: "test",
                image: images.img22,
            },
            {
                id: 3,
                name: "test",
                image: images.img23,
            },
            {
                id: 4,
                name: "test",
                image: images.img24,
            },
        ],
    },
    
];

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
    },
});

export default Page;
