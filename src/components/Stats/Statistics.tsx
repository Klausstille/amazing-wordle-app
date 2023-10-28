import { Stats } from "../../App";
import { calculateCurrentStreak } from "./calculateCurrentStreak";
import { calculateMaxStreak } from "./calculateMaxStreak";

interface StatisticsProps {
    stats: Stats[];
}

export default function Statistics({ stats }: StatisticsProps) {
    const currentStreak = calculateCurrentStreak(stats);
    const maxStreak = calculateMaxStreak(stats);
    return (
        <>
            <h3 className="font-black pt-8">STATISTICS</h3>
            <section className="grid grid-cols-4 gap-3">
                <aside className="text-center">
                    <h2>{stats.length}</h2>
                    <p>Played</p>
                </aside>
                <aside className="text-center">
                    <h2>
                        {Math.round(
                            (stats.filter((stat) => stat.isWin).length /
                                stats.length) *
                                100
                        )}
                    </h2>
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
    );
}
