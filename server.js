
const http = require('http');
const host = 'http://localhost';
const port = 3000;
const stats = require('./pcramusage')

http.createServer((req, res) => {
    let url = req.url;
    if (url === '/stats') {
    res.end(JSON.stringify(stats, null, 2));
    } else {
        res.end('<h1>Especificcações do sistema, e uso de memória</h1>')
    }
})
.listen(port, () => console.log(`Server ON: ${host}:${port}, ${stats}`))