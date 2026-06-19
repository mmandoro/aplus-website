// Same-origin proxy: forwards the website chat to the n8n AI agent server-side.
// This avoids browser CORS entirely (server-to-server has no CORS), so Michelle
// works on the live site without touching the n8n "Allowed Origins" setting.
const N8N_WEBHOOK = "https://marlextreme.app.n8n.cloud/webhook/b6b1acf6-5fff-42df-a499-ef30894b16a5";

export default async (req) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }
  const body = await req.text();
  try {
    const upstream = await fetch(N8N_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body
    });
    const text = await upstream.text();
    return new Response(text, {
      status: upstream.status,
      headers: { "Content-Type": "application/json" }
    });
  } catch (e) {
    return new Response(JSON.stringify({ reply: "" }), {
      status: 502,
      headers: { "Content-Type": "application/json" }
    });
  }
};
