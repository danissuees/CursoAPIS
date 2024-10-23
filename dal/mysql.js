const db = require('../config/mysql')

exports.selectEventos =async()=>{
try{
    let resultado = await db.promise()
    .query('SELECT id, nombre, descripcion FROM eventos');
    return resultado[0]
}
catch(err){
console.error(err.message);
}
}

exports.selectEvento = async (id) =>{
    try{
        let [rows, fields] = await db.promise()
        .query('SELECT id, nombre, descripcion FROM eventos WHERE id =?', [id]);
        return rows[0];
    }
    catch(err){
        console.error(err.message);
    }
}
