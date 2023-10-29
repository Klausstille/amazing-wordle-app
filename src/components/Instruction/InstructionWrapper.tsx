import { ReactNode } from "react";

type InstructionWrapperProps = {
    children: ReactNode;
};

export default function InstructionWrapper({
    children,
}: InstructionWrapperProps) {
    return (
        <section className="instructions lg:w-2/4 w-full right-0 fixed h-screen flex flex-col justify-center items-center bg-[#0c0c0c] opacity-90 z-10 text-[#bcbcbc] font-clash antialiased">
            {children}
        </section>
    );
}
