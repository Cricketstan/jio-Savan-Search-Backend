export default {
  async fetch(request) {
    const url = new URL(request.url);
    const query = url.searchParams.get("q") || "";

    const apiUrl = `https://www.jiosaavn.com/api.php?__call=search.getResults&q=${encodeURIComponent(query)}&ctx=wap6dot0&api_version=4&_format=json&_marker=0`;

    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "User-Agent": "Mozilla/5.0",
        "Accept": "*/*",
        "Referer": "https://www.jiosaavn.com/"
      },
      cf: {
        cacheEverything: false,
        cacheTtl: 0
      }
    });

    const headers = new Headers(response.headers);
    headers.set("Access-Control-Allow-Origin", "*");
    headers.set("Cache-Control", "no-store, no-cache, must-revalidate");
    headers.set("Pragma", "no-cache");

    return new Response(await response.arrayBuffer(), {
      status: response.status,
      headers
    });
  }
}
