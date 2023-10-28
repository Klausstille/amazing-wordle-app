import Input from "./components/Input/Input.js";
import Footer from "./components/Footer/Footer.js";
import Header from "./components/Header/Header.js";
import Main from "./components/Main/Main.js";
import Tiles from "./components/Tiles/Tiles.js";
import Board from "./components/Board/Board.js";
import { fetchNewWords } from "./components/helpers/fetchWords.js";
import { useEffect, useState } from "react";
import { handleCheck } from "./components/helpers/handleCheck.js";
import { deleteInput } from "./components/helpers/deleteInput.js";
import { handleInput } from "./components/helpers/handleInput.js";
import { keyBoardCheck } from "./components/helpers/keyBoardCheck.js";
import { resetGame } from "./components/helpers/resetGame.js";

export interface Result {
    letters?: string[];
    colors?: ("bg-emerald-500" | "bg-[#4456e1]" | "bg-[#0d0d0d]")[];
    rows?: number;
    flipTiles?: boolean[];
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

    const [submitted, setSubmitted] = useState<boolean>(false);

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
        const usedLetters = new Set();
        result?.map((entry) => {
            usedLetters.add(entry.letters?.join(""));
        });
        const letters = [];
        for (const keyValue of usedLetters) {
            letters.push(keyValue);
        }
        setAllLetters([...letters.join("")]);

        const keyCheck = keyBoardCheck(result, rowCount, words);
        if (keyCheck) {
            const { matchingLetters, fullMatch } = keyCheck;
            setMatch(matchingLetters);
            if (fullMatch.length === 5) {
                const text = "yeah! you fuckin' won!";
                resetGame(text, setRowCount, setResult, setWords);
            }
            if (rowCount === 6 && fullMatch.length !== 5) {
                const text = "fuckin' loser! The answer was " + words;
                resetGame(text, setRowCount, setResult, setWords);
            }
        }
    }, [result, rowCount, words]);

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
            const { checkedResults, checkedRowCount, checkedLetters } =
                checkResult;
            setResult(checkedResults);
            setRowCount(checkedRowCount);
            setLetters(checkedLetters);
        }
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
