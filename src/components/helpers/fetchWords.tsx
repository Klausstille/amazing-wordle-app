// const RapidAPIKey = import.meta.env.VITE_RapidAPIKey;
const englishWordsArray = [
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
const germanWordsArray = [
    "Apfel",
    "Wolke",
    "Tiger",
    "Socke",
    "Hafen",
    "Eiche",
    "Zebra",
    "Fisch",
    "Liebe",
    "Schlaf",
    "Reise",
    "Rente",
    "Kabel",
    "Kugel",
    "Melon",
    "Glanz",
    "Motor",
    "Brief",
    "Seife",
    "Hunde",
    "Milch",
    "Venus",
    "Seide",
    "Ernte",
    "Tasse",
    "Decke",
    "Fluss",
    "Kreis",
    "Messe",
    "Mauer",
    "Jause",
    "Tisch",
    "Flote",
    "Kiste",
    "Vogel",
    "Tanne",
    "Pferd",
    "Kette",
    "Lampe",
    "Wagen",
    "Qualm",
    "Kette",
    "Sicht",
    "Zunge",
    "Hände",
    "Pfand",
    "Karte",
    "Fabel",
    "Pfote",
    "Anker",
    "Salat",
    "Recht",
    "Brust",
    "Pflug",
    "Laser",
    "Tinte",
    "Faden",
    "Traum",
    "Kreuz",
    "Kiosk",
    "Glanz",
    "Hertz",
    "Brand",
    "Schal",
    "Clown",
    "Stift",
    "Feder",
    "Hands",
    "Tafel",
    "Unrat",
    "Quark",
    "Prinz",
    "Ruder",
    "Flirt",
    "Sorge",
    "Ernte",
    "Knabe",
    "Kugel",
    "Saite",
    "Teich",
    "Zange",
];

interface fetchProps {
    lang: string;
}
export const fetchNewWords = async ({ lang }: fetchProps) => {
    if (lang === "en") {
        const randomWord =
            englishWordsArray[
                Math.floor(Math.random() * englishWordsArray.length)
            ];
        return randomWord;
    } else if (lang === "de") {
        const randomWord =
            germanWordsArray[
                Math.floor(Math.random() * germanWordsArray.length)
            ];
        return randomWord;
    }
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
