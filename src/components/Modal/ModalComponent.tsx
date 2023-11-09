import { Hint } from "../../App";
import * as React from "react";
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
        width: 400,
        bgcolor: "background.paper",
        boxShadow: 24,
        p: 4,
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
                    <Box sx={style}>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <h3 className="text-5xl py-6">💡</h3>
                            <h3
                                className="text-sm"
                                dangerouslySetInnerHTML={{
                                    __html: modifiedHint,
                                }}
                            />
                            {phrasesLength && phrasesLength >= 2 && (
                                <button
                                    onClick={() => onHandleHint(false)}
                                    className="bg-white rounded-full px-3 py-5 text-sm"
                                >
                                    <h3 className="text-5xl">🃏</h3>
                                </button>
                            )}
                        </Typography>
                    </Box>
                </Modal>
            </ThemeProvider>
        </div>
    );
}
