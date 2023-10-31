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
                <label className="flex flex-col justify-center items-center gap-2">
                    <h2 className="font-bold">Hi there!</h2>
                    <h3 className="font-bold">What's your Name?</h3>
                    <input
                        type="text"
                        name="name"
                        placeholder="Elara Serendipity"
                        className="rounded-full py-0 h-8 w-[15vw] min-w-[200px] text-black text-center text-l"
                    />
                </label>
                <h3 className="font-bold text-center">Chose your language</h3>{" "}
                <select
                    name="language"
                    className="rounded-full h-8 text-center text-md w-[15vw] min-w-[200px] bg-blue-500 text-white"
                >
                    <option value="english">English</option>
                    <option value="german">German</option>
                </select>
                <button className="rounded-full mt-5 py-0 h-8 w-[15vw] min-w-[150px] text-white text-center text-md bg-emerald-500">
                    Let's go!
                </button>
            </form>
        </>
    );
}
