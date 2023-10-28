import { Result } from "../../App";
import { useState, useEffect } from "react";

interface TilesProps {
    result: Result;
}

export default function Tiles({ result }: TilesProps) {
    const [activeTiles, setActiveTiles] = useState(new Array(5).fill(false));
    const [iteration, setIteration] = useState(0);
    console.log(iteration);

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
                        className={`tiles h-[18vw] py-0 text-white ${
                            result?.colors?.[index]
                        } ${
                            result?.colors?.[index] &&
                            activeTiles[index] &&
                            "active"
                        }`}
                        key={index}
                    >
                        <p className="text-resp text-center font-bold">
                            {result?.letters?.[index]}
                        </p>
                    </button>
                );
            })}
        </>
    );
}
