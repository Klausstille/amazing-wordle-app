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
        <section className=" w-full grid grid-cols-5 gap-1 font-inter">
            {/* <section className="lg:w-[32vw] md:w-[70vw] w-[80vw] grid grid-cols-5 gap-1 font-inter"> */}
            {tiles.map((_, index) => {
                return (
                    <button
                        className={`tiles h-[18vw] lg:h-[9vw] py-2 text-white ${
                            // className={`tiles h-[15vw] sm:h-[14vw] lg:h-[6vw] py-2 text-white ${
                            result?.colors?.[index] &&
                            activeTiles[index] &&
                            result?.colors?.[index]
                        } ${
                            result?.colors?.[index] && activeTiles[index]
                                ? "flip"
                                : isIncorrectWord && result && "buzz"
                        }`}
                        key={index}
                    >
                        <p className="sm:text-[3rem] md:text-[2rem] text-[1.5rem] text-center font-regular font-avenir">
                            {result?.letters?.[index]}
                        </p>
                    </button>
                );
            })}
        </section>
    );
}
