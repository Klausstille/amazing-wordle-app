export const handleInput = (letter: string, letters, result, rowCount) => {
    if (letters.length >= 5) {
        return;
    }
    const newSetOfLetters = [...letters, letter];
    const results = result[rowCount]
        ? result.map((entry) => {
              if (entry.rows === rowCount) {
                  return {
                      letters: [...letters, letter],
                      colors: [],
                      rows: rowCount,
                  };
              } else {
                  return entry;
              }
          })
        : [
              ...result,
              {
                  letters: [letter],
                  colors: [],
                  rows: rowCount,
              },
          ];
    return { newSetOfLetters, results };
};
