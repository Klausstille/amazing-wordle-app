import { fetchNewWords } from "./fetchWords";
import { Result } from "../../App";
import { Dispatch, SetStateAction } from "react";

export const resetGame = (
    text: string,
    setRowCount: Dispatch<SetStateAction<number>>,
    setResult: Dispatch<SetStateAction<Result[]>>,
    setWords: Dispatch<SetStateAction<string>>
) => {
    setTimeout(() => {
        setRowCount(0);
        setResult([]);
        const getNewWords = async () => {
            const word: string | void = await fetchNewWords();
            if (typeof word === "string") {
                setWords(word);
            }
            alert(text);
        };
        getNewWords();
    }, 1000);
};
