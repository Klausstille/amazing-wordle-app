import Div100vh from "react-div-100vh";

interface DialogModalProps {
    handleClose: (name: string) => void;
    setIsOpen: (isOpen: boolean) => void;
    switchLang: boolean;
    open: boolean;
    lang: string;
    setSwitchLang: (switchLang: boolean) => void;
}

export default function DialogModal({
    open,
    lang,
    handleClose,
    switchLang,
    setIsOpen,
    setSwitchLang,
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
        open && (
            <Div100vh
                className="modal w-full fixed flex flex-col items-center justify-center backdrop-blur-xl z-50 text-gray-800 font-clash antialiased px-12"
                onClick={() => {
                    setIsOpen(false);
                    setSwitchLang(false);
                }}
            >
                <h3 className="text-center text-2xl pb-4 font-black">
                    {switchLang ? langTextHint : titleTextHint}
                </h3>

                <h3 className="text-center pb-4">
                    {switchLang ? langBodyTextHint : bodyTextHint}
                </h3>
                <div className="flex gap-2 justify-center">
                    <button
                        className={`bg-[#ebebeb] text-gray-800 px-4 py-1 rounded-full`}
                        name="DISAGREE"
                        onClick={(e) =>
                            handleClose((e.target as HTMLButtonElement).name)
                        }
                    >
                        {lang == "en" ? "No, thanks!" : "Nein danke!"}
                    </button>
                    <button
                        className={`bg-[#ebebeb] text-gray-800 px-4 py-1  rounded-full`}
                        name="AGREE"
                        onClick={(e) =>
                            handleClose((e.target as HTMLButtonElement).name)
                        }
                    >
                        {lang == "en" ? "Yes, please!" : "Ja, bitte!"}
                    </button>
                </div>
            </Div100vh>
        )
    );
}
