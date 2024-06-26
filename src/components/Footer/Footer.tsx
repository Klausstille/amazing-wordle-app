import { ReactNode } from "react";

type FooterProps = {
    children: ReactNode;
};

export default function Footer({ children }: FooterProps) {
    return (
        <section className="footer lg:w-2/4 w-full fixed bottom-0 left-0 font-inter grid grid-cols-input-mobile lg:grid-cols-input gap-1 bg-white py-2 px-2 text-gray-800">
            {children}
        </section>
    );
}
