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
                        className={`tiles h-[4rem] py-0 text-white ${result?.colors?.[index]}`}
                        key={index}
                    >
                        <p className="text-tiles text-center font-bold">
                            {result?.letters?.[index]}
                        </p>
                    </button>
                );
            })}
        </>
    );
}
