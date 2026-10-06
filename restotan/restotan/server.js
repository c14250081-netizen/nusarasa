// Server statis sederhana untuk menjalankan website secara lokal: node server.js
const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 5173;
const TYPES = { ".html": "text/html", ".css": "text/css", ".js": "text/javascript", ".png": "image/png", ".jpg": "image/jpeg", ".svg": "image/svg+xml" };

http.createServer((req, res) => {
  const urlPath = decodeURIComponent(req.url.split("?")[0]);
  const file = path.join(__dirname, urlPath === "/" ? "index.html" : urlPath);
  if (!file.startsWith(__dirname)) { res.writeHead(403); return res.end(); }
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(404); return res.end("Not found"); }
    res.writeHead(200, {
      "Content-Type": (TYPES[path.extname(file)] || "application/octet-stream") + "; charset=utf-8",
      "Cache-Control": "no-store", // supaya perubahan file langsung terlihat saat reload
    });
    res.end(data);
  });
}).listen(PORT, () => console.log(`Nusarasa berjalan di http://localhost:${PORT}`));
