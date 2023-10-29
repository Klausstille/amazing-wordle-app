import { Stats } from "../../App";
import Statistics from "./Statistics";
import GuessDistribution from "./GuessDistribution";

interface StatsProps {
    stats: Stats[];
    player: string;
    lang: string;
}

export default function Stat({ stats, player, lang }: StatsProps) {
    return (
        <>
            {lang === "en" ? (
                <>
                    {stats.length > 1 &&
                        (stats[stats.length - 1]?.isWin ? (
                            <h2 className="font-light">YOU WON!</h2>
                        ) : (
                            <>
                                <h2 className="font-light">YOU LOST!</h2>{" "}
                                <h2 className="font-bold">
                                    {" "}
                                    The answer was
                                    <h2 className="font-black">
                                        {stats[
                                            stats.length - 1
                                        ]?.word?.toUpperCase()}
                                    </h2>
                                </h2>
                            </>
                        ))}{" "}
                </>
            ) : (
                <>
                    {stats.length > 1 &&
                        (stats[stats.length - 1]?.isWin ? (
                            <h2 className="font-light">RICHTIG!</h2>
                        ) : (
                            <>
                                <h2 className="font-light">LEIDER NICHT...</h2>{" "}
                                <h2 className="font-bold">
                                    {" "}
                                    Die Antwort war
                                    <h2 className="font-black">
                                        {stats[
                                            stats.length - 1
                                        ]?.word?.toUpperCase()}
                                    </h2>
                                </h2>
                            </>
                        ))}{" "}
                </>
            )}
            <Statistics stats={stats} player={player} lang={lang} />
            <GuessDistribution stats={stats} lang={lang} />
        </>
    );
}
