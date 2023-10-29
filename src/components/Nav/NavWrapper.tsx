import { ReactNode } from "react";

type NavWrapperProps = {
    children: ReactNode;
};

export default function NavWrapper({ children }: NavWrapperProps) {
    return (
        <section className="nav fixed py-2 px-2 z-30 w-full bg-[#202020] flex justify-between">
            {children}
        </section>
    );
}
