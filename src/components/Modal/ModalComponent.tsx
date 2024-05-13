import { Hint } from "../../App";
import Div100vh from "react-div-100vh";
interface ModalProps {
    hint: Hint;
    word: string;
    setShowModal: (showModal: boolean) => void;
    onHandleHint: (showModal: boolean) => void;
    showModal: boolean;
}

export default function ModalComponent({
    hint,
    word,
    setShowModal,
    onHandleHint,
    showModal,
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
        showModal && (
            <Div100vh
                className="modal w-full fixed flex flex-col items-center justify-center backdrop-blur-xl z-50 text-gray-800 font-clash antialiased px-12"
                onClick={() => setShowModal(false)}
            >
                <h3 className="text-3xl absolute top-2 left-2">💡</h3>
                <h3
                    className="text-xl  text-center"
                    dangerouslySetInnerHTML={{
                        __html: modifiedHint,
                    }}
                />
                {phrasesLength && phrasesLength >= 2 && (
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onHandleHint(false);
                        }}
                        className="bg-[#80808037] rounded-3xl px-6 mt-4 py-1"
                    >
                        <h3 className="text-sm">more</h3>
                    </button>
                )}
            </Div100vh>
        )
    );
}
