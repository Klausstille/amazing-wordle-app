import { Hint } from "../../App";

interface ModalProps {
    hint: Hint;
    word: string;
    setShowModal: (showModal: boolean) => void;
    onHandleHint: (showModal: boolean) => void;
}

export default function Modal({
    hint,
    word,
    setShowModal,
    onHandleHint,
}: ModalProps) {
    const filteredPhrases = hint?.translations?.filter(
        (entry) => entry.source.length > 39
    );
    const phrasesLength = filteredPhrases?.length;
    const randomIndex = Math.floor(Math.random() * (phrasesLength || 0));
    const phrase =
        filteredPhrases?.[randomIndex]?.source || "no hint available, sorry";

    function replaceWordInHTML(
        htmlContent: string,
        targetWord: string,
        replacement: string
    ) {
        const regex = new RegExp(targetWord, "g");
        return htmlContent.replace(regex, replacement);
    }

    const modifiedHint = replaceWordInHTML(
        phrase?.toUpperCase() || "",
        word.toUpperCase(),
        "*****"
    );

    return (
        <>
            <section
                className="modal fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-30 bg-[#ebebeb46]"
                style={{
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                }}
            >
                <aside
                    className="fixed top-0 left-0 w-screen h-screen"
                    onClick={() => setShowModal(false)}
                ></aside>
                <div className="modal relative rounded-3xl w-[300px] h-[300px] flex items-center flex-col bg-[rgb(32_32_32)] justify-center gap-8 px-6 text-center z-40 shadow-lg shadow-[rgb(32_32_32)]">
                    {" "}
                    <h3 className="text-5xl">💡</h3>
                    <h3
                        className="text-sm"
                        dangerouslySetInnerHTML={{
                            __html: modifiedHint,
                        }}
                    />
                    {phrasesLength && phrasesLength >= 2 && (
                        <button
                            onClick={() => onHandleHint(false)}
                            className="bg-black-500 rounded-full px-3 py-3 text-sm"
                        >
                            <h3 className="text-5xl">🃏</h3>
                        </button>
                    )}
                    <button
                        className="absolute top-4 right-4 w-[40px] h-[40px] rounded-full text-l"
                        onClick={() => setShowModal(false)}
                    >
                        ❌
                    </button>
                </div>
            </section>
        </>
    );
}
