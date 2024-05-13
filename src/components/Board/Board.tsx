import { ReactNode } from "react";

type BoardProps = {
    children: ReactNode;
};

export default function Board({ children }: BoardProps) {
    return (
        <section
            className="h-[calc(100vh-35px)] pt-10 px-2 sm:pb-28 pb-[10rem] grid md:gap-2 gap-1"
            style={{ gridTemplateRows: "repeat(6, 1fr)" }}
        >
            {children}
        </section>
    );
}
