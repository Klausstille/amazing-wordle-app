import { Result } from "../../App";

export const winwinCheck = (
    result: Result[],
    rowCount: number,
    words: string
) => {
    const fullMatch =
        result[rowCount - 1]?.letters?.filter(
            (letter, index) => letter == words.toUpperCase()[index]
        ) ?? [];

    const halfMatch =
        result[rowCount - 1]?.letters?.filter(
            (letter, index) =>
                words.toUpperCase()?.includes(letter) &&
                letter !== words.toUpperCase()[index]
        ) ?? [];

    const matchingLetters = [
        {
            fullMatch: [...fullMatch],
            halfMatch: [...halfMatch],
        },
    ];

    return { matchingLetters, fullMatch };
};
