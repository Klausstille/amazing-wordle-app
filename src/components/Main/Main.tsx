import { ReactNode } from "react";

type MainProps = {
    children: ReactNode;
};

export default function Main({ children }: MainProps) {
    return (
        <section className="w-full flex flex-col justify-center">
            {children}
        </section>
    );
}
