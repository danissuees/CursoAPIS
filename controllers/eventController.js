
const{
    selectEventos,
    selectEvento,
    updateEvento,
    insertarEvento,
    deleteEvento
}=require('../dal/mysql.js')


exports.getEvento = async(req,res) =>{
   
    const {id}= req.params;
    try{
       
        const evento = await selectEvento(id);
        if(!evento){
            return res.status(404).json('El evento no existe');
        }
        res.status(200).json(evento);
    }
    catch(error){
        res.status(500).json(error.message);
    }
    
}

exports.getEventos = async(req,res)=>{
    res.status(200).json( await selectEventos());
}

// exports.editEvento = (req,res) => {
//     const {id} = req.params; 
//     const {nombre, descripcion} = req.body;

//     const editId=updateEvento(id,nombre,descripcion);
//     if(!editId){
//         res.status(404).json('No existe el ID')
//     }
//     else{
//         res.status(200).json('Se realizaron cambios en el ID: ' + editId)
//     }
//     // const evento = eventos.find(evento => evento.id ==id)

//     // evento.nombre = nombre;
//     // evento.descripcion = descripcion;

//     // console.info(eventos);

//     // res.status(200).json('Se realizaron en el evento ' + id);
// }

// exports.createEvento = (req,res)=>{
//     const {nombre, descripcion} = req.body;
   
    
//     const id = insertarEvento(nombre,descripcion);
//     res.status(200).json('Se creo el evento ' + nombre + ' con el id: '+ id);
    
// }

// exports.deleteEvento = (req,res) =>{
//     try{
//     const { id } = req.params;

//     const nombre = deleteEvento(id);

//     res.status(200).json('Se elimino el evento ' + nombre);
//     }
//     catch(error){
//         res.status(400).json(error);

//     }
// }
