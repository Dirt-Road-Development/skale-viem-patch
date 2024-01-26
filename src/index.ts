export default {
  async fetch(request: Request) {
    const res = await fetch("https://mainnet.skalenodes.com/v1/honorable-steel-rasalhague", {
      body: request.body,
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    });
    
    return new Response(
      JSON.stringify(await res.json()),
      {
        ...res,
        headers: {
          ...res.headers,
          "Content-Type": "application/json"
        }
      }
    )
  },
};
