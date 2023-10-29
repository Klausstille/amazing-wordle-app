import { Stats } from "../../App";
import { calculateCurrentStreak } from "./calculateCurrentStreak";
import { calculateMaxStreak } from "./calculateMaxStreak";

interface StatisticsProps {
    stats: Stats[];
    player: string;
    lang: string;
}

export default function Statistics({ stats, player, lang }: StatisticsProps) {
    const currentStreak = calculateCurrentStreak(stats);
    const maxStreak = calculateMaxStreak(stats);
    return (
        <>
            {lang === "en" ? (
                <>
                    <h2 className="font-black pt-8 text-center">
                        Hi {player}
                        <p>Good game!</p>
                    </h2>
                    <h3 className="font-black pt-8">STATISTICS</h3>
                    <section className="grid grid-cols-4 gap-3">
                        <aside className="text-center">
                            <h2>{stats.length - 1}</h2>
                            <p>Played</p>
                        </aside>
                        <aside className="text-center">
                            {stats.length > 1 ? (
                                <h2>
                                    {Math.round(
                                        (stats?.filter((stat) => stat?.isWin)
                                            .length /
                                            (stats.length - 1)) *
                                            100
                                    )}
                                </h2>
                            ) : (
                                <h2>0</h2>
                            )}
                            <p>Win %</p>
                        </aside>
                        <aside className="text-center">
                            <h2>{currentStreak}</h2>
                            <p>Current Streak</p>
                        </aside>
                        <aside className="text-center">
                            <h2>{maxStreak} </h2>
                            <p>Max Streak</p>
                        </aside>
                    </section>
                </>
            ) : (
                <>
                    <h2 className="font-black pt-8 text-center">
                        Hallo {player}
                        <p>Viel Spaß!</p>
                    </h2>
                    <h3 className="font-black pt-8">STATISTICS</h3>
                    <section className="grid grid-cols-4 gap-3">
                        <aside className="text-center">
                            <h2>{stats.length - 1}</h2>
                            <p>Spiele</p>
                        </aside>
                        <aside className="text-center">
                            {stats.length > 1 ? (
                                <h2>
                                    {Math.round(
                                        (stats?.filter((stat) => stat?.isWin)
                                            .length /
                                            (stats.length - 1)) *
                                            100
                                    )}
                                </h2>
                            ) : (
                                <h2>0</h2>
                            )}
                            <p>Gewonnen %</p>
                        </aside>
                        <aside className="text-center">
                            <h2>{currentStreak}</h2>
                            <p>Laufende Abf.</p>
                        </aside>
                        <aside className="text-center">
                            <h2>{maxStreak} </h2>
                            <p>Maximale Abf.</p>
                        </aside>
                    </section>
                </>
            )}
        </>
    );
}
