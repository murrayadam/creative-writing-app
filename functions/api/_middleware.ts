export const onRequest: PagesFunction[] = [
  async (context) => {
    // Add CORS headers to all API responses
    const response = await context.next();
    const newResponse = new Response(response.body, response);
    newResponse.headers.set("Access-Control-Allow-Origin", "*");
    newResponse.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    newResponse.headers.set("Access-Control-Allow-Headers", "Content-Type");
    return newResponse;
  },
];
