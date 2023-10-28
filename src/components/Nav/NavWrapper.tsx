import { ReactNode } from "react";

type NavWrapperProps = {
    children: ReactNode;
};

export default function NavWrapper({ children }: NavWrapperProps) {
    return (
        <section className="nav fixed top-2 right-2 z-30">{children}</section>
    );
}
