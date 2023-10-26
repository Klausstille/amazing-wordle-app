import { fetchNewWords } from "./fetchWords";

export const resetGame = (text: string, setRowCount, setResult, setWords) => {
    alert(text);
    setTimeout(() => {
        setRowCount(0);
        setResult([]);
        const getNewWords = async () => {
            const word: string | void = await fetchNewWords();
            if (typeof word === "string") {
                setWords(word);
            }
        };
        getNewWords();
    }, 1000);
};
