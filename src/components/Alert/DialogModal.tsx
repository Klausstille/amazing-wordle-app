import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import * as React from "react";

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement;
    },
    ref: React.Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

interface DialogModalProps {
    handleClose: (name: string) => void;
    switchLang: boolean;
    open: boolean;
    lang: string;
}

export default function DialogModal({
    open,
    lang,
    handleClose,
    switchLang,
}: DialogModalProps) {
    const textHint = {
        title: {
            en: "It's a 5-letter-word! 😉",
            de: "Es ist ein 5-Buchstaben-Wort! 😉",
        },
        body: {
            en: "Still need more help?",
            de: "Noch mehr Tipps?",
        },
    };
    const textLang = {
        title: {
            en: "Your current game will be lost",
            de: "Dein aktuelles Spiel wird abgebrochen!",
        },
        body: {
            en: "Switch to German?",
            de: "Auf Englisch wechseln?",
        },
    };
    const titleTextHint = lang == "en" ? textHint.title.en : textHint.title.de;
    const bodyTextHint = lang == "en" ? textHint.body.en : textHint.body.de;
    const langTextHint = lang == "en" ? textLang.title.en : textLang.title.de;
    const langBodyTextHint = lang == "en" ? textLang.body.en : textLang.body.de;

    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle>
                {switchLang ? langTextHint : titleTextHint}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    {switchLang ? langBodyTextHint : bodyTextHint}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button
                    name="DISAGREE"
                    onClick={(e) =>
                        handleClose((e.target as HTMLButtonElement).name)
                    }
                >
                    {lang == "en" ? "No, thanks!" : "Nein danke!"}
                </Button>
                <Button
                    name="AGREE"
                    onClick={(e) =>
                        handleClose((e.target as HTMLButtonElement).name)
                    }
                >
                    {lang == "en" ? "Yes, please!" : "Ja, bitte!"}
                </Button>
            </DialogActions>
        </Dialog>
    );
}
