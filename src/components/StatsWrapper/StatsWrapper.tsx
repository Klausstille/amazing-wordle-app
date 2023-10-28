import { ReactNode } from "react";

type StatsWrapperProps = {
    children: ReactNode;
};

export default function StatsWrapper({ children }: StatsWrapperProps) {
    return (
        <section className="stats-active w-screen h-screen fixed flex flex-col justify-center items-center bg-black z-10 gap-5">
            {children}
        </section>
    );
}
