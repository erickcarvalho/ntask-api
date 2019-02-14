const bodyParser = require('body-parser')
const cors = require('cors');

module.exports = app => {
    app.set('port', 3000);
    
    app.use(bodyParser.json());
    
    app.use(cors({
        origin: ["https://localhost:3001"],
        methods: ["GET", "PUT", "POST", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"]
    }))

    app.use((req, res, next) => {
        // middleware executado antes de qualquer outro middleware
        delete req.body.id;
        next();
    })
}