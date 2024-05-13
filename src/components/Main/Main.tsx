import { ReactNode } from "react";

type MainProps = {
    children: ReactNode;
};

export default function Main({ children }: MainProps) {
    return (
        <section className="main grid lg:grid-cols-2 grid-cols-1 justify-center">
            {children}
        </section>
    );
}
