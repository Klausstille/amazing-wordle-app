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
        const newLetters = [];
        for (let i = 65; i <= 90; i++) {
            newLetters.push(String.fromCharCode(i));
        }
        setLetters(newLetters);
    }, []);

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
                return (
                    <button
                        key={letter}
                        onClick={() => handleUserInput(letter)}
                        className={`input letter ${
                            (match[0]?.fullMatch?.includes(letter) &&
                                "hover:bg-emerald-500 bg-emerald-500") ||
                            (match[0]?.halfMatch?.includes(letter) &&
                                "hover:bg-[#4456e1] bg-[#4456e1]") ||
                            (allLetters?.includes(letter) &&
                                "hover:bg-neutral-950 bg-neutral-950") ||
                            "bg-neutral-800"
                        } relative font-avenir`}
                    >
                        {match[0]?.fullMatch?.includes(letter) && (
                            <>
                                <span>{letter}</span>
                                <span className="text-[10px] absolute top-0 right-1 sm:top-1 sm:right-2">
                                    {words.toUpperCase().indexOf(letter) + 1}
                                </span>
                            </>
                        )}
                        {!match[0]?.fullMatch?.includes(letter) && letter}
                    </button>
                );
            })}
            <button
                className="input grid col-span-2 bg-neutral-900"
                onClick={handleDeleteInput}
            >
                delete
            </button>
            <button
                className="input grid col-span-2 bg-neutral-900"
                onClick={handleInputCheck}
            >
                submit
            </button>
        </>
    );
}
