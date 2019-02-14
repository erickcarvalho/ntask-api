const https = require("https");
const fs = require("fs");

module.exports = app => {
    
    const credentials = {
        key: fs.readFileSync("5698709_ntask.key", "utf8"),
        cert: fs.readFileSync("5698709_ntask.cert", "utf8")
    }
    
    app.db.sequelize.sync().done(() => {
        https.createServer(credentials, app)
        .listen(app.get("port"), () => {
            console.log(`NTask API is Alive - porta ${app.get("port")}`);
        });
    });
};