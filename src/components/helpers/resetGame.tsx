import { Dispatch, SetStateAction } from "react";
import { fetchNewWords } from "./fetchWords";
import { Result } from "../../App";
import { Stats } from "../../App";

export const resetGame = (
    isWin: boolean,
    setWords: Dispatch<SetStateAction<string>>,
    setStats: Dispatch<SetStateAction<Stats[]>>,
    result: Result[],
    stats?: Stats[]
) => {
    setStats([
        ...(stats || []),
        {
            game: [...result],
            isWin: isWin,
        },
    ]);

    const getNewWords = async () => {
        const word: string | void = await fetchNewWords();
        if (typeof word === "string") {
            setWords(word);
        }
    };
    getNewWords();
};
