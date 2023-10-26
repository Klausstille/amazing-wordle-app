import { ReactNode } from "react";

type FooterProps = {
    children: ReactNode;
};

export default function Footer({ children }: FooterProps) {
    return (
        <section className="w-full fixed bottom-0 left-0 font-inter grid grid-cols-input-mobile sm:grid-cols-input gap-1 bg-[gray] py-2 px-2">
            {children}
        </section>
    );
}
