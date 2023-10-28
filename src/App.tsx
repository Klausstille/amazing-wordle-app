import Input from "./components/Input/Input.js";
import Footer from "./components/Footer/Footer.js";
import Header from "./components/Header/Header.js";
import Main from "./components/Main/Main.js";
import Tiles from "./components/Tiles/Tiles.js";
import Board from "./components/Board/Board.js";
import Stats from "./components/Stats/Stats.js";
import { CSSTransition } from "react-transition-group";
import StatsWrapper from "./components/StatsWrapper/StatsWrapper.js";
import { fetchNewWords } from "./components/helpers/fetchWords.js";
import { useEffect, useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import { handleCheck } from "./components/helpers/handleCheck.js";
import { deleteInput } from "./components/helpers/deleteInput.js";
import { handleInput } from "./components/helpers/handleInput.js";
import { winwinCheck } from "./components/helpers/winwinCheck.js";
import { resetGame } from "./components/helpers/resetGame.js";

export interface Stats {
    game: Result[];
    isWin: boolean;
}
export interface Result {
    letters?: string[];
    colors?: ("bg-emerald-500" | "bg-[#4456e1]" | "bg-[#0d0d0d]")[];
    rows?: number;
}
export interface Match {
    fullMatch: string[];
    halfMatch: string[];
}

function App() {
    const [words, setWords] = useState<string>("tiger");
    const [letters, setLetters] = useState<string[]>([]);
    const [result, setResult] = useState<Result[]>([]);
    const [rowCount, setRowCount] = useState<number>(0);
    const [allLetters, setAllLetters] = useState<string[]>([]);
    const [match, setMatch] = useState<Match[]>([]);
    const [isIncorrectWord, setIncorrectWord] = useState<boolean>(false);
    const [stats, setStats] = useLocalStorageState<Stats[]>("game-stats", {
        defaultValue: [],
    });
    const [showStats, setShowStats] = useState<boolean>(false);

    useEffect(() => {
        const getNewWords = async () => {
            const word: string | void = await fetchNewWords();
            if (typeof word === "string") {
                setWords(word);
            }
        };
        getNewWords();
        console.log("Cheater... 🤥");
    }, []);

    useEffect(() => {
        if (!result) return;
        const usedLetters = new Set(
            result.map((entry) => entry.letters?.join(""))
        );
        const letters = [...usedLetters];
        setAllLetters([...letters.join("")]);

        const winCheck = winwinCheck(result, rowCount, words);
        if (winCheck) {
            const { matchingLetters, fullMatch } = winCheck;
            setMatch(matchingLetters);

            if (
                fullMatch.length === 5 ||
                (rowCount === 6 && fullMatch.length !== 5)
            ) {
                setTimeout(() => {
                    resetGame(
                        fullMatch.length === 5,
                        setWords,
                        setStats,
                        result,
                        stats
                    );
                    setShowStats(true);
                    setRowCount(0);
                    setResult([]);
                }, 2000);
            }
        }
    }, [result]);

    const onUserInput = (letter: string) => {
        const userInput = handleInput(letter, letters, result, rowCount);
        if (userInput) {
            const { newSetOfLetters, results } = userInput;
            setResult(results);
            setLetters(newSetOfLetters);
        }
    };

    const onDeleteInput = () => {
        const inputDelete = deleteInput(result, letters, rowCount);
        if (inputDelete) {
            const { results, newSetOfLetters } = inputDelete;
            setResult(results);
            setLetters(newSetOfLetters);
        }
    };

    const onHandleCheck = async () => {
        const checkResult = await handleCheck(result, rowCount, words, letters);
        if (checkResult) {
            const {
                checkedResults,
                checkedRowCount,
                checkedLetters,
                isIncorrectWord,
            } = checkResult;
            setResult(checkedResults);
            setRowCount(checkedRowCount);
            setLetters(checkedLetters);
            setIncorrectWord(isIncorrectWord);
            setTimeout(() => {
                setIncorrectWord(false);
            }, 1000);
        }
    };

    const handleShowStats = () => {
        setShowStats(!showStats);
    };

    return (
        <>
            <CSSTransition
                in={showStats && stats && result}
                classNames="stats"
                timeout={300}
                unmountOnExit
            >
                <StatsWrapper>
                    <Stats
                        stats={stats}
                        handleShowStats={handleShowStats}
                        words={words}
                    />
                </StatsWrapper>
            </CSSTransition>

            <Main>
                <Board>
                    {[...Array(6)].map((_, index) => (
                        <Tiles
                            key={index}
                            result={result[index]}
                            isIncorrectWord={isIncorrectWord}
                        />
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
                    words={words}
                />
            </Footer>
            <Header>
                <h1 className="sm:leading-[28rem] leading-[10rem] self-center">
                    Wordle
                </h1>
            </Header>
        </>
    );
}

export default App;
