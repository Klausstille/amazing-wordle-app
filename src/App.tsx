import Input from "./components/Input/Input.js";
import Footer from "./components/Footer/Footer.js";
import Header from "./components/Header/Header.js";
import Main from "./components/Main/Main.js";
import Tiles from "./components/Tiles/Tiles.js";
import Board from "./components/Board/Board.js";
import { fetchNewWords } from "./components/helpers/fetchWords.js";
import { useEffect, useState } from "react";

export interface Result {
    letters?: string[];
    colors?: ("bg-emerald-500" | "bg-[#ff8f00]" | null)[];
    rows?: number | undefined;
}

export interface Match {
    fullMatch: string[] | undefined;
    halfMatch: string[] | undefined;
}

function App() {
    const [words, setWords] = useState<string>("tiger");
    const [letters, setLetters] = useState<string[]>([]);
    const [result, setResult] = useState<Result[]>([]);
    const [rowCount, setRowCount] = useState<number>(0);
    const [allLetters, setAllLetters] = useState<string[]>([]);
    const [match, setMatch] = useState<Match[]>([]);

    useEffect(() => {
        const getNewWords = async () => {
            const word: string | void = await fetchNewWords();
            if (typeof word === "string") {
                setWords(word);
            }
        };
        getNewWords();
    }, []);

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
        setMatch([
            {
                fullMatch: [...fullMatch],
                halfMatch: [...halfMatch],
            },
        ]);
        if (fullMatch.length === 5) {
            resetGame("yeah! you fuckin' won!");
        }
        if (rowCount === 6 && fullMatch.length !== 5) {
            resetGame("fuckin' loser! The answer was " + words);
        }
    }, [result, rowCount, words]);

    const resetGame = (text: string) => {
        alert(text);
        setTimeout(() => {
            setRowCount(0);
            setResult([]);
            const getNewWords = async () => {
                const word: string | void = await fetchNewWords();
                if (typeof word === "string") {
                    setWords(word);
                }
            };
            getNewWords();
        }, 1000);
    };

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
        const wrongPosColor = "bg-[#ff8f00]";
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
        setLetters([]);
    };

    return (
        <>
            <Main>
                <Board>
                    {[...Array(6)].map((_, index) => (
                        <Tiles key={index} result={result[index]} />
                    ))}
                </Board>
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
            <Header>
                <h1 className="leading-none">
                    Wordle Wordle Wordle Wordle Wordle Wordle
                </h1>
            </Header>
        </>
    );
}

export default App;
