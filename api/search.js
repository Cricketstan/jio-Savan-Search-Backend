export default async function handler(req, res) {
  const query = req.query.q || "";

  const apiUrl =
    `https://www.jiosaavn.com/api.php?__call=search.getResults&q=${encodeURIComponent(query)}&ctx=wap6dot0&api_version=4&_format=json&_marker=0`;

  try {
    const response = await fetch(apiUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0",
        "Accept": "*/*",
        "Referer": "https://www.jiosaavn.com/"
      }
    });

    const data = await response.text();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate");
    res.setHeader("Content-Type", "application/json");

    res.status(response.status).send(data);
  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
}
