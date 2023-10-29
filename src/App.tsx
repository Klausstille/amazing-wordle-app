import Intro from "./components/Intro/Intro.js";
import Input from "./components/Input/Input.js";
import Footer from "./components/Footer/Footer.js";
import Header from "./components/Header/Header.js";
import Main from "./components/Main/Main.js";
import Tiles from "./components/Tiles/Tiles.js";
import Board from "./components/Board/Board.js";
import Stats from "./components/Stats/Stats.js";
import IntroWrapper from "./components/Intro/IntroWrapper.js";
import InstructionWrapper from "./components/Instruction/InstructionWrapper.js";
import Instruction from "./components/Instruction/Instruction.js";
import StatsWrapper from "./components/StatsWrapper/StatsWrapper.js";
import NavWrapper from "./components/Nav/NavWrapper.js";
import Nav from "./components/Nav/Nav.js";
import { CSSTransition } from "react-transition-group";
import { fetchNewWords } from "./components/helpers/fetchWords.js";
import { useEffect, useState } from "react";
import { handleCheck } from "./components/helpers/handleCheck.js";
import { deleteInput } from "./components/helpers/deleteInput.js";
import { handleInput } from "./components/helpers/handleInput.js";
import { winwinCheck } from "./components/helpers/winwinCheck.js";
import { resetGame } from "./components/helpers/resetGame.js";
import useLocalStorageState from "use-local-storage-state";
import GetWindowDimensions from "./components/helpers/getWindowDimensions.js";

export interface Stats {
    game: Result[];
    isWin: boolean | null;
    word: string | null;
    lang: string | null;
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
        defaultValue: [{ game: [], word: null, lang: null, isWin: null }],
    });
    const [player, setPlayer] = useLocalStorageState<string>("player", {
        defaultValue: "",
    });
    const [lang, setLang] = useLocalStorageState<string>("lang", {
        defaultValue: "",
    });
    const { width } = GetWindowDimensions();
    const [showStats, setShowStats] = useState<boolean>(false);
    const [showInfo, setShowInfo] = useState<boolean>(
        width < 1024 ? false : true
    );

    const handleSubmitNameAndLang = (evt: SubmitEvent) => {
        evt.preventDefault();
        const form = evt.target as HTMLFormElement;
        const selectedLanguage: string = (
            form.elements as unknown as HTMLFormElement
        ).language.value;
        selectedLanguage === "english" ? setLang("en") : setLang("de");
        const nameInput =
            form.querySelector<HTMLInputElement>('input[name="name"]');
        if (nameInput) {
            const name: string = nameInput.value;
            setPlayer(name);
        }
    };

    useEffect(() => {
        const getNewWords = async () => {
            const word: string | void = await fetchNewWords({ lang });
            if (typeof word === "string") {
                setWords(word);
            }
        };
        getNewWords();
        console.log("Cheater... 🤥");
    }, [lang]);

    useEffect(() => {
        setResult([]);
        setRowCount(0);
    }, [lang]);

    console.log("words", words);

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
                        stats,
                        words,
                        lang
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
        const checkResult = await handleCheck(
            result,
            rowCount,
            words,
            letters,
            lang
        );
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

    useEffect(() => {
        width > 1024 && setShowInfo(true);
        width < 1024 && setShowInfo(false);
    }, [width]);

    const handleShowStats = () => {
        setShowStats(!showStats);
    };
    const handleShowInfo = () => {
        if (width < 1024) {
            setShowInfo(!showInfo);
        }
    };

    return (
        <>
            <CSSTransition
                in={player ? false : true}
                classNames="stats"
                timeout={300}
                unmountOnExit
            >
                <IntroWrapper>
                    <Intro handleSubmit={handleSubmitNameAndLang} />
                </IntroWrapper>
            </CSSTransition>
            <CSSTransition
                in={showStats}
                classNames="stats"
                timeout={300}
                unmountOnExit
            >
                <StatsWrapper handleShowStats={handleShowStats}>
                    <Stats stats={stats} player={player} lang={lang} />
                </StatsWrapper>
            </CSSTransition>

            {player && (
                <>
                    <NavWrapper>
                        <Nav
                            setShowInfo={setShowInfo}
                            setShowStats={setShowStats}
                            showStats={showStats}
                            showInfo={showInfo}
                            width={width}
                            lang={lang}
                            setLang={setLang}
                        />
                    </NavWrapper>
                    <Main>
                        <CSSTransition
                            in={showInfo}
                            classNames="stats"
                            timeout={300}
                            unmountOnExit
                        >
                            <InstructionWrapper handleShowInfo={handleShowInfo}>
                                <Instruction lang={lang} />
                            </InstructionWrapper>
                        </CSSTransition>
                        <Board>
                            {[...Array(6)].map((_, index) => (
                                <Tiles
                                    key={index}
                                    result={result[index]}
                                    isIncorrectWord={isIncorrectWord}
                                />
                            ))}
                        </Board>
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
                    </Main>
                    <Header>
                        <h1 className="sm:leading-[28rem] leading-[10rem] self-center font-avenir text-[40vw]">
                            Wordle
                        </h1>
                    </Header>
                </>
            )}
        </>
    );
}

export default App;
