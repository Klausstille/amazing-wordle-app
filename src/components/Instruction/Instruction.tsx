export default function Instruction() {
    return (
        <>
            <h1 className="w-full text-[10vw] font-avenir">Wordle</h1>
            <h2 className="font-black pt-8 text-center">How To Play</h2>
            <h3 className="font-black">Guess the Wordle in 6 tries.</h3>
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
                    <button className="w-10 h-10 text-white text-center text-sm">
                        T
                    </button>
                    <button className="w-10 h-10 text-white bg-emerald-500 text-center text-sm">
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
                    I is in the word and in the correct spot.
                </h3>
                <aside className="text-center flex gap-1 justify-center pt-2">
                    <button className="w-10 h-10 text-white text-center text-sm">
                        P
                    </button>
                    <button className="w-10 h-10 text-white bg-emerald-500 text-center text-sm">
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
            <p className="font-bold pt-4 tracking-widest text-center">
                Built with much ❤️ by Klaus Stille <br></br>With React (Vite),
                Typescript and TailwindCSS
            </p>
        </>
    );
}
