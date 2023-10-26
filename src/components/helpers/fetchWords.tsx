export const RapidAPIKey = import.meta.env.VITE_RapidAPIKey;

export const fetchNewWords = async () => {
    const url = "https://random-words5.p.rapidapi.com/getRandom?wordLength=5";
    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key": RapidAPIKey,
            "X-RapidAPI-Host": "random-words5.p.rapidapi.com",
        },
    };
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        return result;
    } catch (error) {
        console.error(error);
    }
};
