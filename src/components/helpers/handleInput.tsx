import { Result } from "../../App";

export const handleInput = (
    letter: string,
    letters: string[],
    result: Result[],
    rowCount: number
) => {
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
                      flipTiles: new Array(5).fill(false),
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
                  flipTiles: new Array(5).fill(false),
              },
          ];
    return { newSetOfLetters, results };
};
