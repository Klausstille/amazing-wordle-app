import { ReactNode } from "react";
import Div100vh from "react-div-100vh";

type StatsWrapperProps = {
    children: ReactNode;
    handleShowStats: () => void;
};

export default function StatsWrapper({
    children,
    handleShowStats,
}: StatsWrapperProps) {
    return (
        <Div100vh
            className="modal w-full fixed flex flex-col items-center justify-center backdrop-blur-xl z-50 text-gray-800 font-clash antialiased px-12"
            onClick={() => handleShowStats()}
        >
            {children}
        </Div100vh>
    );
}
