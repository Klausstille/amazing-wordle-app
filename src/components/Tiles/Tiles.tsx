import { Result } from "../../App";

interface TilesProps {
    result: Result;
}

export default function Tiles({ result }: TilesProps) {
    const tiles = new Array(5).fill(null);
    return (
        <>
            {tiles.map((letter, index) => {
                return (
                    <button
                        className={`tiles h-[18vw] text-black ${result?.colors?.[index]}`}
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
