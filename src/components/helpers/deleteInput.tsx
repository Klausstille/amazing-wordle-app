export const deleteInput = (result, letters, rowCount) => {
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
