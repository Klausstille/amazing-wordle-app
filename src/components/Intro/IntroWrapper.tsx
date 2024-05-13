import { ReactNode } from "react";

type IntroWrapperProps = {
    children: ReactNode;
};

export default function IntroWrapper({ children }: IntroWrapperProps) {
    return (
        <section className="stats-active w-screen h-screen fixed flex flex-col justify-center items-center bg-white text-gray-800 z-10 gap-5">
            {children}
        </section>
    );
}
