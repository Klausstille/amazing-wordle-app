import { Result } from "../../App";
import { useState, useEffect } from "react";

interface TilesProps {
    result: Result;
    isIncorrectWord: boolean;
}

export default function Tiles({ result, isIncorrectWord }: TilesProps) {
    const [activeTiles, setActiveTiles] = useState(new Array(5).fill(false));
    const [iteration, setIteration] = useState(0);

    useEffect(() => {
        setActiveTiles(new Array(5).fill(false));
        setIteration(0);
    }, [result]);

    useEffect(() => {
        if (iteration <= 5) {
            const interval = setInterval(() => {
                setActiveTiles((tiles) => {
                    const newActiveTiles = [...tiles];
                    newActiveTiles[iteration] = true;
                    return newActiveTiles;
                });
                setIteration((count) => count + 1);
            }, 200);
            return () => clearInterval(interval);
        }
    }, [iteration]);

    const tiles = new Array(5).fill(null);

    return (
        <>
            {tiles.map((_, index) => {
                return (
                    <button
                        className={`tiles h-[18vw] lg:h-[9vw] py-0 text-white ${
                            result?.colors?.[index]
                        } ${
                            result?.colors?.[index] && activeTiles[index]
                                ? "flip"
                                : isIncorrectWord && result && "buzz"
                        }`}
                        key={index}
                    >
                        <p className="text-resp text-center font-bold font-avenir">
                            {result?.letters?.[index]}
                        </p>
                    </button>
                );
            })}
        </>
    );
}
