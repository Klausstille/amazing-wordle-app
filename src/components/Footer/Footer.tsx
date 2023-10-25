export default function Footer({ children }) {
    return (
        <section className="w-full fixed bottom-0 left-0 font-inter grid grid-cols-input-mobile sm:grid-cols-input gap-1">
            {children}
        </section>
    );
}
