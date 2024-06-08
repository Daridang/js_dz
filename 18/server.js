const http = require("http");

let homeViews = 0;
let aboutViews = 0;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    homeViews++;
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
            <html>
                <body>
                    <h1>Home Page</h1>
                    <p>Views: ${homeViews}</p>
                    <a href="/about">Go to About Page</a>
                </body>
            </html>
        `);
  } else if (req.url === "/about") {
    aboutViews++;
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
            <html>
                <body>
                    <h1>About Page</h1>
                    <p>Views: ${aboutViews}</p>
                    <a href="/">Go to Home Page</a>
                </body>
            </html>
        `);
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end(`
            <html>
                <body>
                    <h1>404 Not Found</h1>
                    <p>The page you are looking for does not exist.</p>
                    <a href="/">Go to Home Page</a>
                </body>
            </html>
        `);
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
