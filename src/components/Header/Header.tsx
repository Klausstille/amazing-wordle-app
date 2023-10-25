export default function Header({ children }) {
    return (
        <section className="w-screen text-resp pt-8 font-black text-[#7200ff] fixed top-0 left-0 -z-10 font-clash">
            {children}
        </section>
    );
}
