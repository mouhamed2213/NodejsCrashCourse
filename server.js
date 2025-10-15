// import http mmodule
import http from "http";
import dotenv from "dotenv";

dotenv.config();
// create the server
const PORT = process.env.PORT;
const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  res.end("<h1> Hello world</h1>");
});

// listener
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// // // import http mmodule
// import http from "http";
// import dotenv from "dotenv";

// dotenv.config();

// const PORT = process.env.PORT;
// import fs, { rmSync } from "fs";

// // create the server
// const server = http.createServer((req, res) => {
//   //
//   if (req.method == "GET") {
//     console.log(`url :  ${req.url}`);

//     //  read file
//     fs.readFile("./joke.html", (err, data) => {
//       if (err) {
//         res.writeHead(500, { "content-type": "text/plain" });
//         res.end("internat error yoyo ");
//       } else {
//         console.log(`lecture du fichier`);

//         res.writeHead(200, { "content-type": "text/html" });
//         res.end(data);
//       }
//     });
//   }
// });

// // listener
// server.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
