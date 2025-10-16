export const onRequest: PagesFunction = async (context) => {
  return new Response(
    JSON.stringify({
      message: "Hello from Cloudflare Pages Functions!",
      timestamp: new Date().toISOString(),
    }),
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
      },
    }
  );
};
