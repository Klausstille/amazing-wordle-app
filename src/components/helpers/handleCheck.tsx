import { Result } from "../../App";

export const handleCheck = async (
    result: Result[],
    rowCount: number,
    words: string,
    letters: string[]
) => {
    if (result[rowCount]?.letters?.length !== 5) {
        return;
    }
    const word: string | undefined = result[rowCount]?.letters
        ?.join("")
        .toLowerCase();

    const checkWordExists = async (word: string) => {
        try {
            const response = await fetch(
                `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
            );
            const data = await response.json();
            if (data.title === "No Definitions Found") {
                return false;
            } else {
                return true;
            }
        } catch (error) {
            console.log("error", error);
        }
    };
    const wordExists = await checkWordExists(word || "");
    const correctPosColor = "bg-emerald-500";
    const wrongPosColor = "bg-[#4456e1]";
    const wrongLetterColor = "bg-[#0d0d0d]";
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
                flipTiles: new Array(5).fill(false),
            };
        } else {
            return entry;
        }
    });
    const checkedRowCount = wordExists ? rowCount + 1 : rowCount;
    const checkedLetters: string[] = [];

    return { checkedResults, checkedRowCount, checkedLetters };
};
