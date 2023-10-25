import { useState, useEffect } from "react";
import Main from "../Main/Main";

type InputProps = {
    handleUserInput: (letter: string) => void;
    handleDeleteInput: () => void;
    handleInputCheck: () => void;
    allLetters: string[];
    match: string[];
};

export default function Input({
    handleUserInput,
    handleDeleteInput,
    handleInputCheck,
    allLetters,
    match,
}: InputProps) {
    const [letters, setLetters] = useState<string[]>([]);
    console.log("MATCH", match);

    useEffect(() => {
        const newLetters = [];
        for (let i = 65; i <= 90; i++) {
            newLetters.push(String.fromCharCode(i));
        }
        setLetters(newLetters);
    }, []);

    return (
        <>
            <section className="grid grid-cols-input-mobile sm:grid-cols-input gap-2">
                {letters?.map((letter) => {
                    return (
                        <button
                            key={letter}
                            onClick={() => handleUserInput(letter)}
                            className={`input letter ${
                                (match?.includes(letter) && "bg-emerald-700") ||
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
            </section>
        </>
    );
}
