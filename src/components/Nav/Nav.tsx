import { Result } from "../../App";
type NavProps = {
    onHandleHint: (showModal: boolean) => void;
    setSwitchLang: (switchLang: boolean) => void;
    setShowStats: (showStats: boolean) => void;
    setShowInfo: (showInfo: boolean) => void;
    setOpen: (open: boolean) => void;
    showInfo: boolean;
    showStats: boolean;
    width: number;
    lang: string;
    result: Result[];
};

export default function Nav({
    setOpen,
    setShowStats,
    setShowInfo,
    showInfo,
    showStats,
    width,
    lang,
    onHandleHint,
    result,
    setSwitchLang,
}: NavProps) {
    return (
        <>
            <h3 className="font-bold text-gray-800">MyWordle</h3>
            <ul className="flex justify-end gap-4 cursor-pointer">
                <li
                    className="lg:invisible visible"
                    onClick={() => {
                        setShowInfo(!showInfo);
                        width < 1024 && showStats && setShowStats(!showStats);
                    }}
                >
                    <h3 className="text-gray-800">💡</h3>
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
                        <h3>🔮</h3>
                    </li>
                )}
                <li className="flex gap-2 text-sm">
                    <button
                        onClick={() => {
                            lang === "de" && setOpen(true);
                            lang === "de" && setSwitchLang(true);
                        }}
                        className={`${
                            lang === "en" && "bg-blue-500 text-white"
                        } w-[50px] bg-[#ebebeb] text-gray-800 h-6 rounded-full py-0`}
                    >
                        <h3>EN</h3>
                    </button>
                    <button
                        onClick={() => {
                            lang === "en" && setOpen(true);
                            lang === "en" && setSwitchLang(true);
                        }}
                        className={`${
                            lang === "de" && "bg-blue-500 text-white"
                        } w-[50px] bg-[#ebebeb] text-gray-800 h-6 py-0 rounded-full`}
                    >
                        <h3>DE</h3>
                    </button>
                </li>
            </ul>
        </>
    );
}
