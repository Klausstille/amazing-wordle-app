type NavProps = {
    setShowStats: (showStats: boolean) => void;
    setShowInfo: (showInfo: boolean) => void;
    setLang: (lang: string) => void;
    showInfo: boolean;
    showStats: boolean;
    width: number;
    lang: string;
};

export default function Nav({
    setShowStats,
    setShowInfo,
    showInfo,
    showStats,
    width,
    lang,
    setLang,
}: NavProps) {
    return (
        <ul>
            <li
                className="lg:invisible visible"
                onClick={() => {
                    setShowInfo(!showInfo);
                    width < 1024 && showStats && setShowStats(!showStats);
                }}
            >
                <button className="w-[80px] bg-blue-500 h-6 py-0 rounded-full">
                    <h3>FAQ</h3>
                </button>
                {/* <img src="./info.svg" alt="info" className="icon" /> */}
            </li>
            <li
                onClick={() => {
                    setShowStats(!showStats);
                    width < 1024 && showInfo && setShowInfo(!showInfo);
                }}
            >
                <button className="w-[80px] bg-blue-500 h-6 py-0 rounded-full">
                    <h3>STATS</h3>
                </button>
                {/* <img src="./stats.svg" alt="stats" className="stats" /> */}
            </li>
            <li className="flex gap-1">
                <button
                    onClick={() => setLang("en")}
                    className={`${
                        lang === "en" && "bg-emerald-500"
                    } w-[50px] bg-blue-500 h-6 rounded-full py-0`}
                >
                    <h3>EN</h3>
                </button>
                <button
                    onClick={() => setLang("de")}
                    className={`${
                        lang === "de" && "bg-emerald-500"
                    } w-[50px] bg-blue-500 h-6 py-0 rounded-full`}
                >
                    <h3>DE</h3>
                </button>
            </li>
        </ul>
    );
}
