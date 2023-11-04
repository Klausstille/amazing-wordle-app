import { ReactNode } from "react";

type InstructionWrapperProps = {
    children: ReactNode;
    handleShowInfo: () => void;
};

export default function InstructionWrapper({
    children,
    handleShowInfo,
}: InstructionWrapperProps) {
    return (
        <section
            onClick={() => handleShowInfo()}
            className="instructions lg:w-2/4 w-full right-0 fixed h-screen flex flex-col py-5 items-center bg-[rgb(32_32_32)] opacity-90 z-10 text-[#bcbcbc] font-clash antialiased"
        >
            {children}
        </section>
    );
}
