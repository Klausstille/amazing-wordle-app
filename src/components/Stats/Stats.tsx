import { Stats } from "../../App";
import Statistics from "./Statistics";
import GuessDistribution from "./GuessDistribution";

interface StatsProps {
    stats: Stats[];
    handleShowStats: () => void;
    words: string;
}

export default function Stat({ stats, handleShowStats, words }: StatsProps) {
    return (
        <>
            {stats[stats.length - 1].isWin ? (
                <h2 className="font-light">YOU WON!</h2>
            ) : (
                <>
                    <h2 className="font-light">YOU LOST!</h2>{" "}
                    <h2>
                        {" "}
                        The right answer was{" "}
                        <span className="font-black">
                            {words.toUpperCase()}
                        </span>
                    </h2>
                </>
            )}
            <Statistics stats={stats} />
            <GuessDistribution stats={stats} />
            <button
                className="show-stats font-light text-[grey]"
                onClick={() => handleShowStats()}
            >
                <h2>X</h2>
            </button>
        </>
    );
}
