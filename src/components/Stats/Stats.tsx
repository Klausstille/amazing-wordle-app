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
            {stats.length > 1 &&
                (stats[stats.length - 1]?.isWin ? (
                    stats[stats.length - 1]?.game.length <= 2 ? (
                        <h2 className="font-light tracking-wide">
                            {lang === "en"
                                ? "WOW! ...IMPRESSIVE!"
                                : "WOW! ...RESPEKT!"}
                        </h2>
                    ) : (
                        <h2 className="font-light tracking-wide">
                            {lang === "en" ? "YOU WON!" : "RICHTIG!"}
                        </h2>
                    )
                ) : (
                    <>
                        <h2 className="font-light tracking-wide">
                            {lang === "en" ? "YOU LOST!" : "LEIDER NICHT..."}
                        </h2>
                        <h2 className="font-bold">
                            {lang === "en" ? (
                                <>
                                    The answer was
                                    <h2 className="font-black">
                                        {stats[
                                            stats.length - 1
                                        ]?.word?.toUpperCase()}
                                    </h2>
                                </>
                            ) : (
                                <>
                                    Die Antwort war
                                    <h2 className="font-black">
                                        {stats[
                                            stats.length - 1
                                        ]?.word?.toUpperCase()}
                                    </h2>
                                </>
                            )}
                        </h2>
                    </>
                ))}
            <Statistics stats={stats} player={player} lang={lang} />
            <GuessDistribution stats={stats} lang={lang} />
        </>
    );
}
