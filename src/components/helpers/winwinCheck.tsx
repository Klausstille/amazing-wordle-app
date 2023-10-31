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

    const allFullMatch = result
        .map((entry) =>
            (entry.letters || [])
                .map((letter, index) =>
                    letter === words.toUpperCase()[index] ? letter : ""
                )
                .join("")
        )
        .join("");

    const allHalfMatch = result
        .map((entry) =>
            (entry.letters || [])
                .map((letter, index) => {
                    const isHalfMatch =
                        words.toUpperCase()?.includes(letter) &&
                        letter !== words.toUpperCase()[index];
                    return isHalfMatch ? letter : "";
                })
                .filter((letter) => !allFullMatch?.includes(letter))
                .join("")
        )
        .join("");

    const matchingLetters = [
        {
            fullMatch: [...fullMatch],
            halfMatch: [...halfMatch],
            allFullMatch: [...allFullMatch],
            allHalfMatch: [...allHalfMatch],
        },
    ];

    return { matchingLetters, fullMatch };
};
