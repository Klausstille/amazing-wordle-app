import { ReactNode } from "react";

type NavWrapperProps = {
    children: ReactNode;
};

export default function NavWrapper({ children }: NavWrapperProps) {
    return (
        <section className="nav fixed py-2 px-2 z-10 w-full bg-white flex justify-between">
            {children}
        </section>
    );
}
