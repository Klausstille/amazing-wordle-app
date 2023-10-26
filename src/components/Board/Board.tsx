import { ReactNode } from "react";

type BoardProps = {
    children: ReactNode;
};

export default function Board({ children }: BoardProps) {
    return (
        <section className="w-full grid grid-cols-5 gap-2 font-inter">
            {children}
        </section>
    );
}
