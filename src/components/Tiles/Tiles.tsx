import { Result } from "../../App";

interface TilesProps {
    result: Result;
}

export default function Tiles({ result }: TilesProps) {
    const tiles = new Array(5).fill(null);
    return (
        <>
            {tiles.map((_, index) => {
                return (
                    <button
                        className={`tiles h-[18vw] py-0 text-white ${
                            result?.colors?.[index]
                        } ${result?.colors?.[index] ? "active" : ""}`}
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
