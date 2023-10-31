import { ReactNode } from "react";

type BoardProps = {
    children: ReactNode;
};

export default function Board({ children }: BoardProps) {
    return (
        <section className="flex h-screen py-6 px-2 sm:pb-28 pb-[10rem] flex-col items-center gap-1">
            {children}
        </section>
    );
}
