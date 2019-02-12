module.exports = app => {
    app.get('/task', (req, res) => {
        res.json({
            task: [
                { title: "Fazer Compras" },
                { title: "Consertar o PC" }
            ]
        })
    })
}