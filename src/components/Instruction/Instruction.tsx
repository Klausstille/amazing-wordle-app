interface InstructionProps {
    lang: string;
}
export default function Instruction({ lang }: InstructionProps) {
    return (
        <>
            {lang === "en" ? (
                <>
                    <h1 className="w-full lg:text-[6rem] text-[2rem] pt-2 font-avenir font-thin">
                        MyWordle
                    </h1>
                    <h2 className="font-black pt-8 text-center">How To Play</h2>
                    <h3 className="font-black">Guess the word in 6 tries.</h3>
                    <h3 className="font-bold">
                        Each guess must be a valid 5-letter word.
                    </h3>
                    <h3 className="font-bold text-center">
                        The color of the tiles will change to show how <br></br>
                        close your guess was to the word.
                    </h3>
                    <section className="flex flex-col justify-center text-center">
                        <h3 className="font-black py-3">EXAMPLES</h3>
                        <aside className="text-center flex gap-1 justify-center">
                            <button className="w-10 h-10 text-white bg-emerald-500 text-center text-sm">
                                T
                            </button>
                            <button className="w-10 h-10 text-whitetext-center text-sm">
                                I
                            </button>
                            <button className="w-10 h-10 text-white text-center text-sm">
                                G
                            </button>
                            <button className="w-10 h-10 text-white text-center text-sm">
                                E
                            </button>
                            <button className="w-10 h-10 text-white text-center text-sm">
                                R
                            </button>
                        </aside>
                        <h3 className="font-black py-1">
                            T is in the word and in the correct spot.
                        </h3>
                        <aside className="text-center flex gap-1 justify-center pt-2">
                            <button className="w-10 h-10 text-white text-center text-sm">
                                P
                            </button>
                            <button className="w-10 h-10 text-white text-center text-sm">
                                I
                            </button>
                            <button className="w-10 h-10 text-white text-center text-sm">
                                L
                            </button>
                            <button className="w-10 h-10 text-white text-center text-sm">
                                L
                            </button>
                            <button className="w-10 h-10 text-white bg-[#4456e1] text-center text-sm">
                                S
                            </button>
                        </aside>
                        <h3 className="font-black py-1">
                            S is in the word but in the wrong spot.
                        </h3>
                        <aside className="text-center flex gap-1 justify-center pt-2">
                            <button className="w-10 h-10 text-white text-center text-sm">
                                V
                            </button>
                            <button className="w-10 h-10 text-white text-center text-sm">
                                A
                            </button>
                            <button className="w-10 h-10 text-white text-center text-sm">
                                G
                            </button>
                            <button className="w-10 h-10 text-white text-center text-sm">
                                U
                            </button>
                            <button className="w-10 h-10 text-white text-center text-sm">
                                E
                            </button>
                        </aside>
                        <h3 className="font-black py-1">
                            No letter in the word in any spot.
                        </h3>
                    </section>
                    <p className="font-bold pt-4 tracking-wide text-center">
                        Built with much ❤️ by{" "}
                        <a
                            href="http://stillestudio.com"
                            target="blank"
                            className="text-white hover:text-white"
                        >
                            Klaus Stille
                        </a>{" "}
                        <br></br>With React (Vite), Typescript and TailwindCSS
                    </p>
                </>
            ) : (
                <>
                    <h1 className="w-full lg:text-[6rem] text-[2rem] pt-2 font-avenir font-thin">
                        MyWordle
                    </h1>
                    <h2 className="font-black pt-8 text-center">
                        So spielt man
                    </h2>
                    <h3 className="font-black">
                        Rate das Wort in 6 Versuchen.
                    </h3>
                    <h3 className="font-bold text-center">
                        Jeder Versuch muss ein gültiges <br></br>{" "}
                        5-Buchstaben-Wort sein.
                    </h3>
                    <h3 className="font-bold text-center">
                        Die Farbe der Kacheln zeigt an, wie nah <br></br> Dein
                        Tipp am gesuchten Wort ist.
                    </h3>
                    <section className="flex flex-col justify-center text-center">
                        <h3 className="font-black py-3">BEISPIELE</h3>
                        <aside className="text-center flex gap-1 justify-center">
                            <button className="w-10 h-10 text-white bg-emerald-500 text-center text-sm">
                                T
                            </button>
                            <button className="w-10 h-10 text-white text-center text-sm">
                                I
                            </button>
                            <button className="w-10 h-10 text-white text-center text-sm">
                                G
                            </button>
                            <button className="w-10 h-10 text-white text-center text-sm">
                                E
                            </button>
                            <button className="w-10 h-10 text-white text-center text-sm">
                                R
                            </button>
                        </aside>
                        <h3 className="font-black py-1">
                            T ist im Wort und an der richtigen Stelle.
                        </h3>
                        <aside className="text-center flex gap-1 justify-center pt-2">
                            <button className="w-10 h-10 text-white text-center text-sm">
                                L
                            </button>
                            <button className="w-10 h-10 text-white text-center text-sm">
                                I
                            </button>
                            <button className="w-10 h-10 text-white text-center text-sm">
                                E
                            </button>
                            <button className="w-10 h-10 text-white bg-[#4456e1] text-center text-sm">
                                B
                            </button>
                            <button className="w-10 h-10 text-white text-center text-sm">
                                E
                            </button>
                        </aside>
                        <h3 className="font-black py-1">
                            B ist im Wort, aber an der falschen Stelle.
                        </h3>
                        <aside className="text-center flex gap-1 justify-center pt-2">
                            <button className="w-10 h-10 text-white text-center text-sm">
                                W
                            </button>
                            <button className="w-10 h-10 text-white text-center text-sm">
                                O
                            </button>
                            <button className="w-10 h-10 text-white text-center text-sm">
                                L
                            </button>
                            <button className="w-10 h-10 text-white text-center text-sm">
                                K
                            </button>
                            <button className="w-10 h-10 text-white text-center text-sm">
                                E
                            </button>
                        </aside>
                        <h3 className="font-black py-1">
                            Kein Buchstabe im Wort an irgendeiner Stelle.
                        </h3>
                    </section>
                    <p className="font-bold pt-4 tracking-wide text-center">
                        Built with much ❤️ by{" "}
                        <a
                            href="http://stillestudio.com"
                            target="blank"
                            className="text-white hover:text-white"
                        >
                            Klaus Stille
                        </a>{" "}
                        <br></br>With React (Vite), Typescript and TailwindCSS
                    </p>
                </>
            )}
        </>
    );
}
