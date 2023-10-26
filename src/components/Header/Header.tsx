import { ReactNode } from "react";

type HeaderProps = {
    children: ReactNode;
};

export default function Header({ children }: HeaderProps) {
    return (
        <section className="w-screen h-full text-resp pt-8 font-light text-[#474747] fixed top-0 left-0 -z-10 font-inter flex flex-col justify-center translate-y-[-100px]">
            {children}
        </section>
    );
}
