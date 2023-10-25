export const fetchNewWords = async () => {
    const url = "https://random-words5.p.rapidapi.com/getRandom?wordLength=5";
    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key":
                "4ed22a4a99mshd54a9034ffb1e20p191d44jsn806fc45cae54",
            "X-RapidAPI-Host": "random-words5.p.rapidapi.com",
        },
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        return result;
        // setWords(result);
    } catch (error) {
        console.error(error);
    }
};
