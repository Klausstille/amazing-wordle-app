import { Stats } from "../../App";
import { calculateMaxStreak, calculateCurrentStreak } from "./calculateStreak";

interface StatisticsProps {
    stats: Stats[];
    player: string;
    lang: string;
}

export default function Statistics({
    stats,
    player,
    lang,
}: StatisticsProps): JSX.Element {
    const currentStreak = calculateCurrentStreak(stats);
    const maxStreak = calculateMaxStreak(stats);

    const isEnglish = lang === "en";

    const message = isEnglish ? "Good game!" : "Viel Spaß!";
    const gamesLabel = isEnglish ? "Played" : "Spiele";
    const winPercentageLabel = isEnglish ? "Win %" : "Gewonnen %";
    const currentStreakLabel = isEnglish ? "Current Streak" : "Laufende Abf.";
    const maxStreakLabel = isEnglish ? "Max Streak" : "Maximale Abf.";

    return (
        <>
            {stats.length <= 1 && (
                <h2 className="font-black pt-8 text-center">
                    {isEnglish ? `Hi ${player}` : `Hallo ${player}`}
                    <p>{message}</p>
                </h2>
            )}
            <h3 className="font-black pt-8">STATISTICS</h3>
            <section className="grid grid-cols-4 gap-3">
                <aside className="text-center">
                    <h2>{stats.length - 1}</h2>
                    <p>{gamesLabel}</p>
                </aside>
                <aside className="text-center">
                    {stats.length > 1 ? (
                        <h2>
                            {Math.round(
                                (stats?.filter((stat) => stat?.isWin).length /
                                    (stats.length - 1)) *
                                    100
                            )}
                        </h2>
                    ) : (
                        <h2>0</h2>
                    )}
                    <p>{winPercentageLabel}</p>
                </aside>
                <aside className="text-center">
                    <h2>{currentStreak}</h2>
                    <p>{currentStreakLabel}</p>
                </aside>
                <aside className="text-center">
                    <h2>{maxStreak}</h2>
                    <p>{maxStreakLabel}</p>
                </aside>
            </section>
        </>
    );
}
