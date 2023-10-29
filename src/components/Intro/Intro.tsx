type IntroProps = {
    handleSubmit: (evt: SubmitEvent) => void;
};

export default function Intro({ handleSubmit }: IntroProps) {
    const onSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        handleSubmit(evt as unknown as SubmitEvent);
    };

    return (
        <>
            <form
                onSubmit={onSubmit}
                className="flex flex-col justify-center items-center gap-3"
            >
                <label className="flex flex-col justify-center items-center gap-8">
                    <h1 className="w-full text-[10vw] font-avenir">
                        Hi, there!
                    </h1>
                    <h2>What's your Name?</h2>
                    <input
                        type="text"
                        name="name"
                        className="rounded-full w-1/2 h-10 py-2 text-black text-center text-xl"
                    />
                </label>
                <button className="rounded-full  w-1/2 py-2 text-white text-center text-xl">
                    Let's go!
                </button>
            </form>
        </>
    );
}
