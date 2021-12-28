const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`<!DOCTYPE html> 
            <html lang = "en" >

            <head>
                <Title>Node JS</Title> 
                <style >
                .container {
                    border : 2 px solid blueviolet;
                    width: 500 px;
                    padding: 10 px 20 px;
                    margin: 30 px auto;
                    background - color: lightgoldenrodyellow;
                }

                .btn {
                    margin: 5 px;
                    padding: 6 px;
                    font - family: -apple - system,
                    BlinkMacSystemFont,
                    'Segoe UI',
                    Roboto,
                    Oxygen,
                    Ubuntu,
                    Cantarell,
                    'Open Sans',
                    'Helvetica Neue',
                    sans - serif;
                    background - color: aquamarine;
                    border: none;
                    cursor: pointer;
                    border - radius: 4 px;
                }

                a {
                    text - decoration: none;
                }

                a: hover {
                    background - color: aqua;
                    color: red;
                }
                /* a:visited {
                    background-color: yellow;
                } */

                a: active {
                    background - color: darkblue;
                }

                button: hover {
                    background - color: orange;
                }

                .btn: hover {
                    border: 2 px solid salmon;
                } 
                </style>
            </head>

                <body>
                <div class = "container" id = "cont1" >
                <h3> This is my Heading </h3> 
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.Minus magni facere reprehenderit quisquam nulla blanditiis provident repudiandae ipsum doloribus obcaecati, repellendus qui voluptates quod aliquam, impedit illum maxime deserunt neque. </p> 
                <a href = 'https:www.google.com' class = "btn"> Read more </a> 
                <button class = "btn" > Contact us </button>
                </div> 
                </body>

            </html>`);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});