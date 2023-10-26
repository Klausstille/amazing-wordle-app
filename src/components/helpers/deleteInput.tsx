import { Result } from "../../App";

export const deleteInput = (
    result: Result[],
    letters: string[],
    rowCount: number
) => {
    const newSetOfLetters: string[] = [...letters];
    newSetOfLetters.pop();
    const results = result.map((entry) => {
        if (entry.rows === rowCount) {
            return {
                letters: newSetOfLetters,
                colors: [],
                rows: entry.rows,
            };
        } else {
            return entry;
        }
    });
    return { results, newSetOfLetters };
};
