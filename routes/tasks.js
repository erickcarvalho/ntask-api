module.exports = app => {
    
    const Tasks = app.db.models.Tasks;
    
    app.route("/tasks")
    .get(function(req, res){
        // /tasks: Lista de tarefas
        
        Tasks.findAll({})
        .then(function(result){
            res.json(result)
        })
        .catch( error => {
            res.status(412).json({msg: error.message})
        })
    })
    .post((req, res) => {
        // /tasks: Cadastrar uma nova tarefa
        
        Tasks.create(req.body)
        .then(result => res.json(result))
        .catch(error => {
            res.status(412).json({ msg: error.message })
        })
    });
    
    
    
    app.route("/tasks/:id")
    .get(function(req, res){
        // /tasks/1: Lista de tarefas
        Tasks.findOne({where: req.params})
        .then(result => {
            if(result) res.json(result)
            else res.sendStatus(404);
        })
        .catch(error => res.status(412).json({msg:error.message}))
        
    })
    .put(function(req, res){
        // /tasks/1: Atualiza de tarefas
        Tasks.update(req.body, {where: req.params })
        .then(result => res.sendStatus(204))
        .catch(error => res.status(412).json({ msg: error.message }))
    })
    .delete(function(req, res){
        // /tasks/1: Deleta de tarefas
        Tasks.destroy({where: req.params })
        .then(result => res.sendStatus(204))
        .catch(error => res.status(412).json({ msg: error.message }))
    })
}