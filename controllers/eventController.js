let eventos= [
    {
        id: 1,
        nombre: 'Coachella',
        descripcion: 'Puro Humo'
    },
    {
        id: 2,
        nombre: 'Cepillin',
        descripcion: 'El Regreso'
    },
    {
        id: 3,
        nombre: 'Los Tigres del Norte',
        descripcion: 'Banda Mexicana'
    }
];

exports.getEvento = (req, res) => {
    const{id} = req.params;
    try{
        const evento = evento.find(evento => evento.id == id)
        if(!evento){
            return res.status(404).json('El evento no existe');
        }
    res.status(200).json();
    }
    catch(error){
        res.status(500).json(error.message);
    }
}

exports.getEventos = (req, res) => {
    res.status(200).json(eventos);
}




exports.editEvento = (req,res) =>{
    const {id} = req.params;
    const {nombre, descripcion} = req.body;

    try{
    const evento = eventos.find(evento => evento.id == id);
    evento.nombre = nombre;
    evento.descripcion = descripcion;

    console.info(eventos);

    res.status(200).json('Se realizaron cambios en el evento' + id);
    }
    catch(error){
        res.status(404).json('No existe tal evento');
    }
}
exports.createEvento = (req,res) =>{
    const { nombre, descripcion} = req.body;

    const id = eventos.length + 1;
    const evento ={
        id,
        nombre,
        descripcion
    }
    eventos.push(evento);
    console.info(eventos);
    res.status(200).json('Se creo el evento ' + nombre +' con id: '+ id)
}
exports.deleteEvento  = (req,res) => {
    try{
    const {id} = req.params;
    const nombre = eventos.find(evento => evento.id ==id).nombre;

    eventos = eventos.filter(evento => evento.id != id);

    console.info(eventos);

    res.status(200).json('Se elimino el evento' + nombre)
    }
    catch(error){
        res.status(404).json('No existe tal evento');
    }
}