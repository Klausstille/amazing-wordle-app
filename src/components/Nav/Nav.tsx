import { Result } from "../../App";
type NavProps = {
    setShowStats: (showStats: boolean) => void;
    setShowInfo: (showInfo: boolean) => void;
    setLang: (lang: string) => void;
    showInfo: boolean;
    showStats: boolean;
    width: number;
    lang: string;
    onHandleHint: (showModal: boolean) => void;
    result: Result[];
};

export default function Nav({
    setShowStats,
    setShowInfo,
    showInfo,
    showStats,
    width,
    lang,
    setLang,
    onHandleHint,
    result,
}: NavProps) {
    return (
        <>
            <h3 className="font-bold">MyWordle</h3>
            <ul className="flex justify-end gap-4 cursor-pointer">
                <li
                    className="lg:invisible visible"
                    onClick={() => {
                        setShowInfo(!showInfo);
                        width < 1024 && showStats && setShowStats(!showStats);
                    }}
                >
                    <h3>❔</h3>
                </li>
                <li
                    onClick={() => {
                        setShowStats(!showStats);
                        width < 1024 && showInfo && setShowInfo(!showInfo);
                    }}
                >
                    <h3>🔥</h3>
                </li>
                {result.length >= 2 && (
                    <li onClick={() => onHandleHint(true)}>
                        <h3>💡</h3>
                    </li>
                )}
                <li className="flex gap-1 text-sm">
                    <button
                        onClick={() => {
                            lang === "de" &&
                                confirm(
                                    "Dein aktuelles Spiel wird abgebrochen. Fortfahren?"
                                ) &&
                                setLang("en");
                        }}
                        className={`${
                            lang === "en" && "bg-blue-500"
                        } w-[60px] bg-[#0d0d0d] h-6 rounded-full py-0`}
                    >
                        <h3>EN 🇬🇧</h3>
                    </button>
                    <button
                        onClick={() => {
                            lang === "en" &&
                                confirm(
                                    "Your current game will be lost. Are you sure?"
                                ) &&
                                setLang("de");
                        }}
                        className={`${
                            lang === "de" && "bg-blue-500"
                        } w-[60px] bg-[#0d0d0d] h-6 py-0 rounded-full`}
                    >
                        <h3>DE 🇩🇪</h3>
                    </button>
                </li>
            </ul>
        </>
    );
}
