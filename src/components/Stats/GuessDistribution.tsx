import { Stats } from "../../App";

interface GuessDistributionProps {
    stats: Stats[];
    lang: string;
}

export default function GuessDistribution({
    stats,
    lang,
}: GuessDistributionProps) {
    if (!stats) return null;

    const wonGames = stats.filter((game) => game.isWin);
    const distribution = wonGames.map((game) => game.game.length);

    const calculateWidth = (idx: number) => {
        const distributionLength = distribution.filter((num) => num === idx);
        const result = (distributionLength.length / wonGames.length) * 400;
        const widthOfElement = Math.min(250, Math.round(result));
        const numberOfWonGames = distributionLength.length;
        return { widthOfElement, numberOfWonGames };
    };

    const title = lang === "en" ? "GUESS DISTRIBUTION" : "SCHÄTZVERTEILUNG";

    return (
        <>
            <h3 className="font-black pt-6">{title}</h3>
            <section className="grid gap-1">
                <section className="grid gap-1">
                    {Array.from({ length: 6 }).map((_, index) => {
                        const { widthOfElement, numberOfWonGames } =
                            calculateWidth(index + 1);
                        return (
                            <aside
                                key={index}
                                style={{
                                    gridTemplateColumns: `20px ${widthOfElement}px`,
                                }}
                                className={`grid`}
                            >
                                <p>{index + 1}</p>
                                <span className="bg-[#4456e1] text-s text-right pr-1 min-w-[15px]">
                                    <p> {numberOfWonGames}</p>
                                </span>
                            </aside>
                        );
                    })}
                </section>
            </section>
        </>
    );
}
