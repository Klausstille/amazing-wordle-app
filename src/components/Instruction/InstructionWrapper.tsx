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
            className="instructions lg:w-2/4 w-full right-0 fixed h-screen flex flex-col py-5 mt-10 max-lg:mt-0 items-center backdrop-blur-xl z-50 text-gray-800 font-clash antialiased"
        >
            {children}
        </section>
    );
}
