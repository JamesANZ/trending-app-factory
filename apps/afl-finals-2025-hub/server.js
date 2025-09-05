const path = require("path");
const express = require("express");
const compression = require("compression");

const app = express();
const PORT = process.env.PORT || 5173;

// gzip static assets
app.use(compression());

// static files
const publicDir = path.join(__dirname, "public");
app.use(
  express.static(publicDir, {
    maxAge: "1d",
    etag: true,
    lastModified: true,
  }),
);

// SPA fallback to index.html (safe for this small static site)
app.get("*", (req, res) => {
  res.sendFile(path.join(publicDir, "index.html"));
});

app.listen(PORT, () => {
  console.log(`AFL Finals 2025 Hub running at http://localhost:${PORT}`);
});
