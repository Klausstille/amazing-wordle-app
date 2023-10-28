import { ReactNode } from "react";

type StatsWrapperProps = {
    children: ReactNode;
};

export default function StatsWrapper({ children }: StatsWrapperProps) {
    return (
        <section className="stats-active w-screen h-screen fixed flex flex-col justify-center items-center text-[#7d7d7d] bg-[#0c0c0c] opacity-90 z-20 gap-5 font-clash">
            {children}
        </section>
    );
}
