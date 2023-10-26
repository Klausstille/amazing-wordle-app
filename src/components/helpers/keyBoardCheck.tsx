export const keyBoardCheck = (result, rowCount, words) => {
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
