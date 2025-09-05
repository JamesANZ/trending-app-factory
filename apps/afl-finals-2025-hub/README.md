# AFL Finals 2025 Hub (Node.js)

A self-contained Node.js project that serves a static site for the **2025 AFL Finals — Week 1**:

- Fixtures in your local timezone
- Official ticket and news links
- One-click **.ics** export
- No API keys; zero CORS headaches

## Prereqs

- Node.js 18+

## Run locally

```bash
npm install
npm run start
# Open http://localhost:5173
```

## Project structure

```
afl-finals-2025-hub/
├── package.json
├── server.js
└── public/
    ├── index.html
    ├── styles.css
    ├── fixtures.js
    └── script.js
```

You can import this into IntelliJ IDEA as a Node.js project and run `server.js` (or the **Start** npm script) directly.
