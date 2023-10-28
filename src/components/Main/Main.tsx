import { ReactNode } from "react";

type MainProps = {
    children: ReactNode;
};

export default function Main({ children }: MainProps) {
    return (
        <section className="main w-full grid lg:grid-cols-2 grid-cols-1 justify-center sm:pb-[143px] pb-[174px]">
            {children}
        </section>
    );
}
