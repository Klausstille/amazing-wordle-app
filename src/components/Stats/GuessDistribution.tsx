import { Stats } from "../../App";

interface GuessDistributionProps {
    stats: Stats[];
}

export default function GuessDistribution({ stats }: GuessDistributionProps) {
    if (!stats) return null;

    const wonGames = stats.filter((game) => game.isWin);
    const distribution = wonGames.map((game) => game.game.length);

    const width = (idx: number) => {
        const distributionLength = distribution.filter((num) => num === idx);
        const result = (distributionLength.length / wonGames.length) * 400;
        const relativeWidth = Math.min(250, result);
        console.log(idx, Math.round(relativeWidth));
        return Math.round(relativeWidth);
    };

    return (
        <>
            <h3 className="font-black pt-6">GUESS DISTRIBUTION</h3>
            <section className="grid gap-1">
                <section className="grid gap-1">
                    {Array.from({ length: 6 }).map((_, index) => {
                        return (
                            <aside
                                key={index}
                                style={{
                                    gridTemplateColumns: `20px ${width(
                                        index + 1
                                    )}px`,
                                }}
                                className={`grid`}
                            >
                                <p>{index + 1}</p>
                                <span className="bg-[#4456e1]"></span>
                            </aside>
                        );
                    })}
                </section>
            </section>
        </>
    );
}
