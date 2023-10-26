export const handleCheck = (result, rowCount, words, letters) => {
    if (result[rowCount]?.letters?.length !== 5) {
        return;
    }
    console.log("RESULT", result);

    const correctColor = "bg-emerald-500";
    const wrongPosColor = "bg-[#4456e1]";
    const colors = result[rowCount]?.letters?.map((letter, index) => {
        if (letter == words.toUpperCase()[index]) {
            return correctColor;
        } else if (
            words.toUpperCase().includes(letter) &&
            letter !== words.toUpperCase()[index]
        ) {
            return wrongPosColor;
        } else {
            return null;
        }
    });
    const checkedResults = result?.map((entry) => {
        if (entry.rows === rowCount) {
            return {
                letters: letters,
                colors: colors,
                rows: entry.rows,
            };
        } else {
            return entry;
        }
    });
    const checkedRowCount = rowCount + 1;
    const checkedLetters = [];

    return { checkedResults, checkedRowCount, checkedLetters };
};
