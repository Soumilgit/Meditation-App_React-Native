export interface MeditationType {
    id: number;
    title: string;
    image: string;
    audio: string;
}

export const MEDITATION_DATA: MeditationType[] = [
    {
        id: 1,
        title: "Top of the World",
        image: "trees.webp",
        audio: "trees.mp3",
    },
    {
        id: 2,
        title: "Watery",
        image: "river.webp",
        audio: "river.mp3",
    },
    {
        id: 3,
        title: "End of Daytime",
        image: "meditate-under-tree.webp",
        audio: "meditate-under-tree.mp3",
    },
    {
        id: 4,
        title: "Coastal",
        image: "beach.webp",
        audio: "beach.mp3",
    },
    {
        id: 5,
        title: "End of a Day",
        image: "yosemite-stars.webp",
        audio: "yosemite-stars.mp3",
    },
    {
        id: 6,
        title: "Falls",
        image: "waterfall.webp",
        audio: "waterfall.mp3",
    },
];

export const AUDIO_FILES: { [key: string]: any } = {
    "trees.mp3": require("@/assets/audio/trees.mp3"),
    "river.mp3": require("@/assets/audio/river.mp3"),
    "meditate-under-tree.mp3": require("@/assets/audio/meditate-under-tree.mp3"),
    "beach.mp3": require("@/assets/audio/beach.mp3"),
    "yosemite-stars.mp3": require("@/assets/audio/yosemite-stars.mp3"),
    "waterfall.mp3": require("@/assets/audio/waterfall.mp3"),
};
