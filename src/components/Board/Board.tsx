import { ReactNode } from "react";

type BoardProps = {
    children: ReactNode;
};

export default function Board({ children }: BoardProps) {
    return (
        <section className="w-full grid grid-cols-5 gap-1 font-inter py-2 px-2 pb-36 lg:pb-32 mdpb-36 sm:pb-44">
            {children}
        </section>
    );
}
