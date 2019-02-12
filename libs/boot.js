module.exports = app => {
    app.listen(app.get('port'), () => console.log(`NTAsk is alive - Porta ${app.get('port')}`));
}