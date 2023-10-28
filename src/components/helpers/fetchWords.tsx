// const { RapidAPIKey } = import.meta.env.VITE_RapidAPIKey;
const wordsArray = [
    "Apple",
    "Table",
    "Chair",
    "Light",
    "House",
    "Water",
    "Queen",
    "Snake",
    "Smile",
    "Happy",
    "Beach",
    "Music",
    "Dance",
    "Clock",
    "Earth",
    "Plant",
    "Grass",
    "Ocean",
    "Storm",
    "Cloud",
    "River",
    "Brave",
    "Green",
    "Sport",
    "Stone",
    "Brush",
    "Sweet",
    "Space",
    "Child",
    "Tiger",
    "Lemon",
    "Maple",
    "Smile",
    "Black",
    "White",
    "Amber",
    "Chess",
    "Olive",
    "Eagle",
    "Peace",
    "Lemon",
    "Bread",
    "Queen",
    "Shell",
    "Storm",
    "Chair",
    "Flame",
    "Night",
    "Crown",
];

export const fetchNewWords = async () => {
    const randomWord =
        wordsArray[Math.floor(Math.random() * wordsArray.length)];
    return randomWord;
};

// export const fetchNewWords = async () => {
//     const url = "https://random-words5.p.rapidapi.com/getRandom?wordLength=5";
//     const options = {
//         method: "GET",
//         headers: {
//             "X-RapidAPI-Key": RapidAPIKey,
//             "X-RapidAPI-Host": "random-words5.p.rapidapi.com",
//         },
//     };
//     try {
//         const response = await fetch(url, options);
//         const result = await response.text();
//         return result;
//     } catch (error) {
//         console.error(error);
//     }
// };
