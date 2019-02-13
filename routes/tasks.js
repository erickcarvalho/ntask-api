module.exports = app => {
    
    const Tasks = app.db.models.Tasks;
    
    app.get("/tasks", function(req, res){
        Tasks.findAll({})
            .then(function(tasks){
                res.json({tasks:tasks})
        })
    })
}