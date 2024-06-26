import Intro from "./components/Intro/Intro.js";
import Input from "./components/Input/Input.js";
import Footer from "./components/Footer/Footer.js";
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
import ModalComponent from "./components/Modal/ModalComponent.js";
import DialogModal from "./components/Alert/DialogModal.js";
import { CSSTransition } from "react-transition-group";
import { fetchNewWords } from "./components/helpers/fetchWords.js";
import { useEffect, useState } from "react";
import { handleCheck } from "./components/helpers/handleCheck.js";
import { deleteInput } from "./components/helpers/deleteInput.js";
import { handleInput } from "./components/helpers/handleInput.js";
import { handleHint } from "./components/helpers/handleHint.js";
import { winwinCheck } from "./components/helpers/winwinCheck.js";
import { resetGame } from "./components/helpers/resetGame.js";
import useLocalStorageState from "use-local-storage-state";
import GetWindowDimensions from "./components/helpers/getWindowDimensions.js";
// import PuffLoader from "react-spinners/PuffLoader";

export interface Stats {
    game: Result[];
    isWin: boolean | null;
    word: string | null;
    lang: string | null;
}
export interface Result {
    letters?: string[];
    colors?: (
        | "bg-emerald-500 text-white"
        | "bg-blue-500 text-white"
        | "bg-white text-gray-800"
    )[];
    rows?: number;
}
export interface Match {
    fullMatch: string[];
    halfMatch: string[];
    allFullMatch: string[];
    allHalfMatch: string[];
}
export interface Translation {
    source: string;
    target?: string;
}
export interface Hint {
    header: string;
    translations?: Translation[];
}

function App() {
    const [words, setWords] = useState<string>("happy");
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
    const [showModal, setShowModal] = useState<boolean>(false);
    const [hintText, setHintText] = useState<Hint>();
    const [open, setOpen] = useState<boolean>(false);
    const [switchLang, setSwitchLang] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
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

    useEffect(() => {
        if (!result) return;
        const usedLetters = new Set(
            result.map((entry) => entry.letters?.join(""))
        );
        const letters = [...usedLetters];
        setAllLetters([...letters.join("")]);
    }, [result]);

    useEffect(() => {
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
    }, [rowCount]);

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
        if (result[rowCount]?.letters?.length !== 5) {
            return;
        }
        setIsLoading(true);
        const checkResult = await handleCheck(
            result,
            rowCount,
            words,
            letters,
            lang
        );
        setIsLoading(false);
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

    const onHandleHint = async (alert: boolean) => {
        if (alert) {
            setOpen(true);
        } else {
            setIsLoading(true);
            const { wordHint } = await handleHint(words, lang);
            setHintText(wordHint);
            !showModal && setShowModal(true);
            setIsLoading(false);
        }
    };

    const handleClose = async (value: string) => {
        if (value === "AGREE") {
            if (switchLang) {
                setLang(lang === "en" ? "de" : "en");
            } else {
                setIsLoading(true);
                const { wordHint } = await handleHint(words, lang);
                setHintText(wordHint);
                !showModal && setShowModal(true);
                setIsLoading(false);
            }
            setSwitchLang(false);
            setOpen(false);
            setIsLoading(false);
        } else {
            setIsLoading(false);
            setSwitchLang(false);
            setOpen(false);
            return;
        }
    };

    return (
        <>
            {/* {isLoading && ( */}
            <div
                className={`fixed top-0 left-0 w-full h-full backdrop-blur-sm z-[9999] ${
                    isLoading ? "opacity-100" : "opacity-0"
                } transition-all duration-[0.5s] pointer-events-none`}
            >
                <h1 className="loading text-5xl max-sm:text-3xl fixed top-1/2 right-1/2 text-gray-800 font-bold">
                    MyWordle
                </h1>
            </div>
            {/* )} */}
            {open && (
                <DialogModal
                    switchLang={switchLang}
                    setSwitchLang={setSwitchLang}
                    open={open}
                    lang={lang}
                    handleClose={handleClose}
                    setIsOpen={setOpen}
                />
            )}
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
                    <ModalComponent
                        hint={hintText as Hint}
                        word={words}
                        setShowModal={setShowModal}
                        onHandleHint={onHandleHint}
                        showModal={showModal}
                    />
                    <Main>
                        <NavWrapper>
                            <Nav
                                setSwitchLang={setSwitchLang}
                                setOpen={setOpen}
                                setShowInfo={setShowInfo}
                                setShowStats={setShowStats}
                                showStats={showStats}
                                showInfo={showInfo}
                                width={width}
                                lang={lang}
                                onHandleHint={onHandleHint}
                                result={result}
                                player={player}
                            />
                        </NavWrapper>
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
                    {/* <Header>
                        <h1 className="self-center font-avenir text-[35vw] pt-20">
                            Wordle
                        </h1>
                    </Header> */}
                </>
            )}
        </>
    );
}

export default App;
