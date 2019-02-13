module.exports = app => {
    app.db.sync().done(function(){
        app.listen(app.get('port'), () => console.log(`NTAsk is alive - Porta ${app.get('port')}`));
    });
}