export default function Board({ children }) {
    return (
        <section className="w-full grid grid-cols-5 gap-2 font-inter">
            {children}
        </section>
    );
}
