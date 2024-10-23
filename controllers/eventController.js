const db = require('../config/db.js');

const{
    selectEventos,
    selectEvento
}=require('../dal/local.js')


exports.getEvento = (req,res) =>{
   
    const {id}= req.params;
    try{
        //const evento = eventos.find(evento => evento.id ==id);
        const evento = selectEvento(id);
        if(!evento){
            return res.status(404).json('El evento no existe');
        }

        //db.query('SELECT  id, nombre, descripcion FROM eventos WHERE id = ?',[id], (err,results)=>{
        //    if(err) return res.status(500).json(err);
        //    res.status(200).json(results[0]);
      //  })

     
        res.status(200).json(evento);
    }
    catch(error){
        res.status(500).json(error.message);
    }
    
}

exports.getEventos = (req,res)=>{
    res.status(200).json(selectEventos());
   // db.query('SELECT* FROM eventos', (err,results)=>{
     //   if(err) return res.status(500).json(err);
       // res.status(200).json(results);
    //})
    
    //res.status(200).json(eventos);
}

exports.editEvento = (req,res) => {
    const {id} = req.params; 
    const {nombre, descripcion} = req.body;

    const evento = eventos.find(evento => evento.id ==id)

    evento.nombre = nombre;
    evento.descripcion = descripcion;

    console.info(eventos);

    res.status(200).json('Se realizaron en el evento ' + id);
}

exports.createEvento = (req,res)=>{
    const {nombre, descripcion} = req.body;

    const id = eventos.length + 1;
    const evento = {
        id,
        nombre,
        descripcion
    }
    eventos.push(evento);
    console.info(eventos);

    
    res.status(200).json('Se creo el evento ' + nombre + ' con el id: '+ id);
}

exports.deleteEvento = (req,res) =>{
    try{
    const { id } = req.params;

    const nombre = eventos.find(evento => evento.id == id).nombre;

    eventos = eventos.map(evento => evento.id != id);

    console.info(eventos);

    res.status(200).json('Se elimino el evento ' + nombre);
    }
    catch(error){
        res.status(400).json(error);

    }
}
