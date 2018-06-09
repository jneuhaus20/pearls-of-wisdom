var morgan = require('morgan')

morgan.token('body', (req) => JSON.stringify(req.body));

module.exports = morgan(':method :url :status :req[content-type] :req[content-length] KB ** Responded in :response-time ms')
