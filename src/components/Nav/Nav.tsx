import { Stats } from "../../App";

type NavProps = {
    setShowStats: (showStats: boolean) => void;
    setShowInfo: (showInfo: boolean) => void;
    showInfo: boolean;
    showStats: boolean;
    width: number;
    stats: Stats[];
};

export default function Nav({
    setShowStats,
    setShowInfo,
    showInfo,
    showStats,
    width,
    stats,
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
                <img src="./info.svg" alt="info" className="icon" />
            </li>
            {/* {stats.length > 0 && ( */}
            <li
                onClick={() => {
                    setShowStats(!showStats);
                    width < 1024 && showInfo && setShowInfo(!showInfo);
                }}
            >
                <img src="./stats.svg" alt="stats" className="icon" />
            </li>
            {/* )} */}
        </ul>
    );
}
