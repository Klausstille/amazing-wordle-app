interface InstructionProps {
    lang: string;
}
interface Translation {
    title: string;
    howToPlay: string;
    guessWord: string;
    validWord: string;
    colorTiles: string;
    examples: string;
    letterInCorrectSpot: string;
    letterInWrongSpot: string;
    noLetterInWord: string;
    buttonsCorrect: string[];
    buttonsWrong: string[];
    buttonsNoMatch: string[];
}

export default function Instruction({ lang }: InstructionProps) {
    const translations: { [key: string]: Translation } = {
        en: {
            title: "MyWordle",
            howToPlay: "How To Play",
            guessWord: "Guess the word in 6 tries.",
            validWord: "Each guess must be a valid 5-letter word.",
            colorTiles:
                "The color of the tiles will show how close your guess was to the word.",
            examples: "EXAMPLES",
            letterInCorrectSpot: "T is in the word and in the correct spot.",
            letterInWrongSpot: "S is in the word but in the wrong spot.",
            noLetterInWord: "No letter in the word in any spot.",
            buttonsCorrect: ["T", "I", "G", "E", "R"],
            buttonsWrong: ["P", "I", "L", "L", "S"],
            buttonsNoMatch: ["V", "A", "G", "U", "E"],
        },
        de: {
            title: "MyWordle",
            howToPlay: "So spielt man",
            guessWord: "Rate das Wort in 6 Versuchen.",
            validWord:
                "Jeder Versuch muss ein gültiges 5-Buchstaben-Wort sein.",
            colorTiles:
                "Die Farbe der Kacheln zeigt an, wie nah Dein Tipp am gesuchten Wort ist.",
            examples: "BEISPIELE",
            letterInCorrectSpot: "T ist im Wort und an der richtigen Stelle.",
            letterInWrongSpot: "S ist im Wort, aber an der falschen Stelle.",
            noLetterInWord: "Kein Buchstabe im Wort an irgendeiner Stelle.",
            buttonsCorrect: ["T", "I", "G", "E", "R"],
            buttonsWrong: ["F", "U", "C", "H", "S"],
            buttonsNoMatch: ["W", "O", "L", "K", "E"],
        },
    };

    const translation = translations[lang];

    return (
        <>
            <h1 className="w-full lg:text-[6rem] text-[2rem] pt-2 font-avenir font-thin">
                {translation.title}
            </h1>
            <section className="text-center w-[340px]">
                <h2 className="font-black pt-8 text-center">
                    {translation.howToPlay}
                </h2>
                <h3 className="font-black">{translation.guessWord}</h3>
                <h3 className="font-bold text-center">
                    {translation.validWord}
                </h3>
                <h3 className="font-bold text-center">
                    {translation.colorTiles}
                </h3>
            </section>

            <section className="flex flex-col justify-center text-center">
                <h3 className="font-black py-3">{translation.examples}</h3>
            </section>
            <aside className="text-center flex gap-1 justify-center">
                {translation.buttonsCorrect.map(
                    (letter: string, idx: number) => (
                        <button
                            key={idx}
                            className={`w-10 h-10 text-white text-center text-sm ${
                                idx == 0 ? "bg-emerald-500" : ""
                            }`}
                        >
                            {letter}
                        </button>
                    )
                )}
            </aside>
            <h3 className="font-black py-1">
                {translation.letterInCorrectSpot}
            </h3>
            <aside className="text-center flex gap-1 justify-center">
                {translation.buttonsWrong.map((letter: string, idx: number) => (
                    <button
                        key={idx}
                        className={`w-10 h-10 text-white text-center text-sm ${
                            idx == 4 ? "bg-blue-500" : ""
                        }`}
                    >
                        {letter}
                    </button>
                ))}
            </aside>
            <h3 className="font-black py-1">{translation.letterInWrongSpot}</h3>
            <aside className="text-center flex gap-1 justify-center">
                {translation.buttonsNoMatch.map(
                    (letter: string, idx: number) => (
                        <button
                            key={idx}
                            className="w-10 h-10 text-white text-center text-sm"
                        >
                            {letter}
                        </button>
                    )
                )}
            </aside>
            <h3 className="font-black py-1">{translation.noLetterInWord}</h3>
            <p className="font-bold pt-4 tracking-wide text-center">
                Built with much ❤️ by{" "}
                <a
                    href="http://stillestudio.com"
                    target="blank"
                    className="text-white hover:text-white"
                >
                    Klaus Stille
                </a>{" "}
                <br></br>With React (Vite), Typescript, and TailwindCSS
            </p>
        </>
    );
}
