import Input from "./components/Input/Input.js";
import Footer from "./components/Footer/Footer.js";
import Header from "./components/Header/Header.js";
import Main from "./components/Main/Main.js";
import Tiles from "./components/Tiles/Tiles.js";
import { useEffect, useState } from "react";

export interface Result {
    letters?: string[];
    colors?: ("bg-emerald-500" | "bg-amber-400" | null)[];
    rows?: number | undefined;
}

function App() {
    const words: string = "radio";
    const [letters, setLetters] = useState<string[]>([]);
    const [result, setResult] = useState<Result[]>([]);
    const [rowCount, setRowCount] = useState<number>(0);
    const [allLetters, setAllLetters] = useState<string[]>([]);
    const [match, setMatch] = useState<string[]>([]);

    const onUserInput = (letter: string) => {
        if (letters.length >= 5) {
            return;
        }
        setLetters([...letters, letter]);

        setResult(
            result[rowCount]
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
                  ]
        );
    };

    const onDeleteInput = () => {
        const newSetLetters: string[] = [...letters];
        newSetLetters.pop();
        setResult(
            result.map((entry) => {
                if (entry.rows === rowCount) {
                    return {
                        letters: newSetLetters,
                        colors: [],
                        rows: entry.rows,
                    };
                } else {
                    return entry;
                }
            })
        );
        setLetters(newSetLetters);
    };
    const onHandleCheck = () => {
        if (result[rowCount]?.letters?.length !== 5) {
            return;
        }
        const correctColor = "bg-emerald-500";
        const wrongPosColor = "bg-amber-400";
        const colors = result[rowCount]?.letters?.map((letter, index) => {
            if (letter == words.toUpperCase()[index]) {
                return correctColor;
            } else if (
                words.toUpperCase().includes(letter) &&
                letter !== words[index]
            ) {
                return wrongPosColor;
            } else {
                return null;
            }
        });
        setResult(
            result.map((entry) => {
                if (entry.rows === rowCount) {
                    return {
                        letters: letters,
                        colors: colors,
                        rows: entry.rows,
                    };
                } else {
                    return entry;
                }
            })
        );
        setRowCount(() => rowCount + 1);
        setMatch([
            ...match,
            ...letters.filter((letter) => words.toUpperCase().includes(letter)),
        ]);
        setLetters([]);
    };

    useEffect(() => {
        const usedLetters = new Set();
        result?.map((entry) => {
            usedLetters.add(entry.letters?.join(""));
        });
        const letters = [];
        for (const keyValue of usedLetters) {
            letters.push(keyValue);
        }
        setAllLetters([...letters.join("")]);
    }, [result]);

    return (
        <>
            <Header>
                <h1>Another Wordle</h1>
            </Header>

            <Main>
                {[...Array(6)].map((_, index) => (
                    <Tiles key={index} result={result[index]} />
                ))}
            </Main>

            <Footer>
                <Input
                    handleUserInput={onUserInput}
                    handleDeleteInput={onDeleteInput}
                    handleInputCheck={onHandleCheck}
                    allLetters={allLetters}
                    match={match}
                />
            </Footer>
        </>
    );
}

export default App;
