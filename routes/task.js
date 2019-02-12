module.exports = app => {

const Task = app.models.task;

    app.get('/task', (req, res) => {
        Task.findAll({}, function(tasks){
            res.json({tasks:tasks})
        })
    })
}