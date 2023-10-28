import { Stats } from "../../App";
import Statistics from "./Statistics";
import GuessDistribution from "./GuessDistribution";

interface StatsProps {
    stats: Stats[];
    player: string;
}

export default function Stat({ stats, player }: StatsProps) {
    return (
        <>
            {stats.length > 1 &&
                (stats[stats.length - 1]?.isWin ? (
                    <h2 className="font-light">YOU WON!</h2>
                ) : (
                    <>
                        <h2 className="font-light">YOU LOST!</h2>{" "}
                        <h2>
                            {" "}
                            The right answer was{" "}
                            <span className="font-black">
                                {stats[stats.length - 1]?.word?.toUpperCase()}
                            </span>
                        </h2>
                    </>
                ))}
            <Statistics stats={stats} player={player} />
            <GuessDistribution stats={stats} />
        </>
    );
}
