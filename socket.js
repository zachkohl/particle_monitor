

 function modelForExport(config) {
    app = config.app;
   io = config.io;
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


config.app.get('/dataEntry', function (req, res) {
    let event = req.query.event;
    let data = req.query.data;
    let coreid = req.query.coreid;
    let published_at = req.query.published_at;

    let particle = {
        event: event,
        data: data,
        coreid: coreid,
        published_at:published_at
     };

    io.emit('particle', particle);
    console.log(particle)
    res.send('data recieved')
    });//end '/'



















}//end ModelForExport





module.exports = modelForExport;