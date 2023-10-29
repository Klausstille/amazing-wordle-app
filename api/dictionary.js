const VITE_PonsAPIToken = import.meta.env.VITE_PonsAPIToken;

export default async function handler(req, res) {
    try {
        const { word } = req.query;
        const url = `https://api.pons.com/v1/dictionary?l=deen&q=${word}`;
        const options = {
            method: "GET",
            headers: {
                "X-Secret": VITE_PonsAPIToken,
            },
        };
        const response = await fetch(url, options);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "An error occurred while fetching data from the external API",
        });
    }
}
