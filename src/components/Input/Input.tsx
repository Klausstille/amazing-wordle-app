import { useState, useEffect } from "react";
import { Match } from "../../App";

type InputProps = {
    handleUserInput: (letter: string) => void;
    handleDeleteInput: () => void;
    handleInputCheck: () => void;
    allLetters: string[];
    match: Match[];
    words: string;
};

export default function Input({
    handleUserInput,
    handleDeleteInput,
    handleInputCheck,
    allLetters,
    match,
    words,
}: InputProps) {
    const [letters, setLetters] = useState<string[]>([]);
    const main = document.body.querySelector(".main");

    useEffect(() => {
        const qwertzLayout = [
            "Q",
            "W",
            "E",
            "R",
            "T",
            "Z",
            "U",
            "I",
            "O",
            "P",
            "A",
            "S",
            "D",
            "F",
            "G",
            "H",
            "J",
            "K",
            "L",
            "Y",
            "X",
            "C",
            "V",
            "B",
            "N",
            "M",
        ];
        setLetters(qwertzLayout);
    }, []);

    const buttonClasses =
        "input grid items-center justify-center relative font-avenir sm:h-10 h-14";

    const colors = {
        fullMatch: "hover:bg-emerald-500 bg-emerald-500 text-white",
        halfMatch: "hover:bg-blue-500 bg-blue-500 text-white",
        neutral: "hover:bg-white bg-white text-gray-800",
        default: "hover:bg-[#ebebeb] bg-[#ebebeb] text-gray-800",
    };

    useEffect(() => {
        const handleKeyDown = (evt: KeyboardEvent) => {
            const keyInput = evt.key.toUpperCase();
            if (letters.includes(keyInput)) {
                handleUserInput(keyInput);
            } else if (keyInput === "BACKSPACE") {
                handleDeleteInput();
            } else if (keyInput === "ENTER") {
                handleInputCheck();
            }
        };
        main && document.body.addEventListener("keydown", handleKeyDown);
        return () => {
            main && document.body.removeEventListener("keydown", handleKeyDown);
        };
    }, [handleUserInput, handleDeleteInput, handleInputCheck, letters, main]);

    return (
        <>
            {letters?.map((letter) => {
                const isHalfMatch = match[0]?.allHalfMatch?.includes(letter);
                const isFullMatch = match[0]?.allFullMatch?.includes(letter);
                const isNoMatch = allLetters?.includes(letter);
                return (
                    <button
                        key={letter}
                        onClick={() => handleUserInput(letter)}
                        className={`${
                            (isHalfMatch && colors["halfMatch"]) ||
                            (isFullMatch && colors["fullMatch"]) ||
                            (isNoMatch &&
                                colors["neutral"] &&
                                "bg-gray-300 hover:bg-gray-300") ||
                            colors["default"]
                        } ${buttonClasses}`}
                    >
                        <span>{letter}</span>
                        <span className="text-[10px] absolute top-2 max-sm:hidden max-lg:right-3 max-xl:right-2 right-3">
                            {isFullMatch
                                ? words.toUpperCase().indexOf(letter) + 1
                                : ""}
                        </span>
                    </button>
                );
            })}
            <button
                className={`${buttonClasses} col-span-2 ${colors["default"]}`}
                onClick={handleDeleteInput}
            >
                <img src="./delete.svg" alt="delete" className="delete" />
            </button>
            <button
                className={`${buttonClasses} col-span-2 ${colors["default"]}`}
                onClick={handleInputCheck}
            >
                ENTER
            </button>
        </>
    );
}
