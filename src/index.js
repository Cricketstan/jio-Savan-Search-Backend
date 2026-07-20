export default {
  async fetch(request) {
    const url = new URL(request.url);

    // Default values
    const q = url.searchParams.get("q") || "";
    const call = url.searchParams.get("__call") || "search.getResults";
    const ctx = url.searchParams.get("ctx") || "wap6dot0";
    const apiVersion = url.searchParams.get("api_version") || "4";
    const format = url.searchParams.get("_format") || "json";
    const marker = url.searchParams.get("_marker") || "0";

    const apiUrl =
      `https://www.jiosaavn.com/api.php?` +
      `__call=${encodeURIComponent(call)}` +
      `&q=${encodeURIComponent(q)}` +
      `&ctx=${encodeURIComponent(ctx)}` +
      `&api_version=${encodeURIComponent(apiVersion)}` +
      `&_format=${encodeURIComponent(format)}` +
      `&_marker=${encodeURIComponent(marker)}`;

    const response = await fetch(apiUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/138.0.0.0 Safari/537.36",
        "Accept": "application/json,text/plain,*/*",
        "Referer": "https://www.jiosaavn.com/",
        "Origin": "https://www.jiosaavn.com"
      }
    });

    return new Response(response.body, {
      status: response.status,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
        "Cache-Control": "no-cache"
      }
    });
  }
}
