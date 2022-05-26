const http = require("http");
const fs = require("fs");
const { type } = require("os");
http
  .createServer((req, res) => {
    if (req.url == "/") {
      fs.readFile("./src/home.html", (err, data) => {
        if (err) {
          res.writeHead(404);
          res.write("Contents you are looking are Not Found");
        } else {
          res.writeHead(200, { "content-type": "text/html" });
          res.write(data);
        }
        res.end();
      });
    } else if (req.url == "/about") {
      fs.readFile("./src/about.html", (err, data) => {
        if (err) {
          res.writeHead(404);
          res.write("Contents you are looking are Not Found");
        } else {
          res.writeHead(200, { "content-type": "text/html" });
          res.write(data);
        }
        res.end();
      });
    } else if (req.url == "/terms") {
      fs.readFile("./src/terms.html", (err, data) => {
        if (err) {
          res.writeHead(404);
          res.write("Contents you are looking are Not Found");
        } else {
          res.writeHead(200, { "content-type": "text/html" });
          res.write(data);
        }
        res.end();
      });
    } else {
      fs.readFile("./src/notFound.html", (err, data) => {
        if (err) {
          res.writeHead(404);
          res.write("Contents you are looking are Not Found");
        } else {
          res.writeHead(404, { "content-type": "text/html" });
          res.write(data);
        }
        res.end();
      });
    }
  })
  .listen(8000, () => {
    console.log("server start");
  });
