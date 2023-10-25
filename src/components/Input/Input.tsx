import { useState, useEffect } from "react";
import { Match } from "../../App";

type InputProps = {
    handleUserInput: (letter: string) => void;
    handleDeleteInput: () => void;
    handleInputCheck: () => void;
    allLetters: string[];
    match: Match[];
};

export default function Input({
    handleUserInput,
    handleDeleteInput,
    handleInputCheck,
    allLetters,
    match,
}: InputProps) {
    const [letters, setLetters] = useState<string[]>([]);
    useEffect(() => {
        const newLetters = [];
        for (let i = 65; i <= 90; i++) {
            newLetters.push(String.fromCharCode(i));
        }
        setLetters(newLetters);
    }, []);

    return (
        <>
            {letters?.map((letter) => {
                return (
                    <button
                        key={letter}
                        onClick={() => handleUserInput(letter)}
                        className={`input letter ${
                            (match[0]?.fullMatch?.includes(letter) &&
                                "bg-emerald-500") ||
                            (match[0]?.halfMatch?.includes(letter) &&
                                "bg-[#ff8f00]") ||
                            (allLetters?.includes(letter) &&
                                "bg-neutral-950") ||
                            "bg-neutral-800"
                        }`}
                    >
                        {letter}
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
