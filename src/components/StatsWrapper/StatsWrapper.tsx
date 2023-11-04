import { ReactNode } from "react";

type StatsWrapperProps = {
    children: ReactNode;
    handleShowStats: () => void;
};

export default function StatsWrapper({
    children,
    handleShowStats,
}: StatsWrapperProps) {
    return (
        <section
            onClick={() => handleShowStats()}
            className="stats-active w-screen h-screen fixed flex flex-col py-14 items-center text-[#bcbcbc] bg-[rgb(32_32_32)] opacity-90 z-20 gap-5 font-clash"
        >
            {children}
        </section>
    );
}
