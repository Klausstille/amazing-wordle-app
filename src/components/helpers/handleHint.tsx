export const handleHint = async (words: string, lang: string) => {
    const hintForWord = async (word: string) => {
        const url = `/api/dictionary?word=${word}`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            if (response.status === 200) {
                const results = data.filter(
                    (entry: Record<string, string>) => entry?.lang === lang
                );
                if (results.length > 0) {
                    const result = results[0].hits[0].roms[0].arabs;
                    const phrases = result.find(
                        (entry: {
                            header: string;
                            translations?: { length: number }[];
                        }) => entry.header.includes("Phrases") || entry.header
                    );

                    return phrases;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        } catch (error) {
            console.log("error", error);
        }
    };
    const wordHint = await hintForWord(words || "");
    return { wordHint };
};
