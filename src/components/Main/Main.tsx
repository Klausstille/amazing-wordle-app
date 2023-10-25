export default function Main({ children }) {
    return (
        <section className="w-screen grid grid-cols-5 gap-2 py-10 font-inter">
            {children}
        </section>
    );
}
