const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 5000;
const ROOT = __dirname;

const MIME_TYPES = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "application/javascript",
  ".mjs": "application/javascript",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".webp": "image/webp",
  ".pdf": "application/pdf",
  ".txt": "text/plain",
  ".xml": "application/xml",
};

const N8N_WEBHOOK = "https://marlextreme.app.n8n.cloud/webhook/b6b1acf6-5fff-42df-a499-ef30894b16a5";

async function handleChatProxy(req, res) {
  if (req.method !== "POST") {
    res.writeHead(405);
    res.end("Method not allowed");
    return;
  }
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const body = Buffer.concat(chunks).toString();
  try {
    const { default: fetch } = await import("node-fetch").catch(() => ({ default: globalThis.fetch }));
    const fetchFn = fetch || globalThis.fetch;
    const upstream = await fetchFn(N8N_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
    });
    const text = await upstream.text();
    res.writeHead(upstream.status, { "Content-Type": "application/json" });
    res.end(text);
  } catch (e) {
    res.writeHead(502, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ reply: "" }));
  }
}

const server = http.createServer(async (req, res) => {
  if (req.url === "/api/chat") {
    return handleChatProxy(req, res);
  }

  let urlPath = req.url.split("?")[0];
  if (urlPath === "/") urlPath = "/index.html";

  let filePath = path.join(ROOT, urlPath);

  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, "index.html");
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || "application/octet-stream";

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end("<h1>404 Not Found</h1>");
      return;
    }
    res.writeHead(200, { "Content-Type": contentType });
    res.end(data);
  });
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running at http://0.0.0.0:${PORT}`);
});
