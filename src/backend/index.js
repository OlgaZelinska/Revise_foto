const { createServer } = require("http");


// const { resize } = require("./resizer/fileReader");

// const path = "./files";
// const format = 200;

// resize(path, format);


const server = createServer((req, res) => {

    console.log(req.data)

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    res.end("hi");
});

server.listen(8082, "localhost", () => {
    console.log("Server launched");
});