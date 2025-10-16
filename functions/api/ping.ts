export const onRequest: PagesFunction = async (context) => {
  const ping = context.env.PING_MESSAGE ?? "ping";
  return new Response(JSON.stringify({ message: ping }), {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
    },
  });
};
