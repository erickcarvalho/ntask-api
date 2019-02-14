const bodyParser = require('body-parser')

module.exports = app => {
    app.set('port', 3000);
    
    app.use(bodyParser.json());
    app.use((req, res, next) => {
        // middleware executado antes de qualquer outro middleware
        delete req.body.id;
        next();
    })
}