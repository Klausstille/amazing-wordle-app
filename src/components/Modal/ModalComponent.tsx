import { Hint } from "../../App";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const custom = createTheme({
    palette: {
        mode: "dark",
    },
});
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

    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 250,
        bgcolor: "background.paper",
        boxShadow: 24,
        p: 2,
        textAlign: "center",
    };

    return (
        <div>
            <ThemeProvider theme={custom}>
                <Modal
                    open={showModal}
                    onClose={() => setShowModal(false)}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style} className="relative">
                        <Typography
                            id="modal-modal-description"
                            sx={{ mt: 2, mb: 2 }}
                        >
                            <h3 className="text-xl absolute top-2 left-2">
                                💡
                            </h3>
                            <h3
                                className="text-xl"
                                dangerouslySetInnerHTML={{
                                    __html: modifiedHint,
                                }}
                            />
                            {phrasesLength && phrasesLength >= 2 && (
                                <button
                                    onClick={() => onHandleHint(false)}
                                    className="bg-[#80808037] rounded-3xl px-6 mt-4 py-1"
                                >
                                    <h3 className="text-sm">more</h3>
                                </button>
                            )}
                        </Typography>
                    </Box>
                </Modal>
            </ThemeProvider>
        </div>
    );
}
