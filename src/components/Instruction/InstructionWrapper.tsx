import { ReactNode } from "react";
import Div100vh from "react-div-100vh";

type InstructionWrapperProps = {
    children: ReactNode;
    handleShowInfo: () => void;
};

export default function InstructionWrapper({
    children,
    handleShowInfo,
}: InstructionWrapperProps) {
    return (
        // <section
        //     onClick={() => handleShowInfo()}
        //     className="instructions lg:w-2/4 w-full right-0 fixed h-screen flex flex-col  items-center justify-center max-lg:backdrop-blur-xl z-50 text-gray-800 font-clash antialiased"
        // >
        <Div100vh
            className="instructions w-full fixed flex flex-col right-0 items-center justify-center max-lg:backdrop-blur-xl max-lg:z-50 text-gray-800 font-clash antialiased px-8 lg:w-2/4"
            onClick={() => handleShowInfo()}
        >
            {children}
        </Div100vh>
    );
}
