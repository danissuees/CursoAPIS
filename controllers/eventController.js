exports.getEvento = (req, res) => {
    const{id} = req.params;
    const eventos= ['evento 1', 'evento2', 'evento3'];
  
    res.status(200).json(eventos[id-1]);
    
}

exports.getEventos = (req, res) => {
    const eventos= ['evento 1', 'evento2', 'evento3']
    
    res.status(200).json(eventos);
}