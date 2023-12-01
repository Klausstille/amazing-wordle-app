import { Result } from "../../App";

export const handleCheck = async (
    result: Result[],
    rowCount: number,
    words: string,
    letters: string[],
    lang: string
) => {
    const word: string | undefined = result[rowCount]?.letters
        ?.join("")
        .toLowerCase();

    const checkWordExists = async (word: string) => {
        const url = `/api/dictionary?word=${word}`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            if (response.status === 200) {
                const results = data.filter(
                    (entry: Record<string, string>) => entry?.lang === lang
                );
                if (results.length > 0) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        } catch (error) {
            console.log("error", error);
        }
    };
    const wordExists = await checkWordExists(word || "");
    const isIncorrectWord: boolean = wordExists ? false : true;
    const correctPosColor = "bg-emerald-500";
    const wrongPosColor = "bg-blue-500";
    const wrongLetterColor = "bg-neutral-950";
    const colors = result[rowCount]?.letters?.map((letter, index) => {
        if (letter == words.toUpperCase()[index]) {
            return correctPosColor;
        } else if (
            words.toUpperCase().includes(letter) &&
            letter !== words.toUpperCase()[index]
        ) {
            return wrongPosColor;
        } else {
            return wrongLetterColor;
        }
    });
    const checkedResults = result?.map((entry) => {
        if (entry.rows === rowCount) {
            return {
                letters: wordExists ? letters : [],
                colors: wordExists ? colors : [],
                rows: entry.rows,
            };
        } else {
            return entry;
        }
    });
    const checkedRowCount = wordExists ? rowCount + 1 : rowCount;
    const checkedLetters: string[] = [];

    return { checkedResults, checkedRowCount, checkedLetters, isIncorrectWord };
};
