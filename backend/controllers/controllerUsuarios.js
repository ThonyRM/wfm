function guardarUsuario(usuario) {
    try {
        //const {id, nombreCompleto, correo, contrasenia} = usuario;
        const sheetUsuarios= obtenerSheet(env_().SH_REGISTROS_USUARIOS);

        Insert(JSON.parse(usuario), sheetUsuarios);
        //shetUsuarios.appendRow([id, nombreCompleto, correo, contrasenia]);
        return{
            titulo: "Registro exitoso",
            descripcion : "Ya se cuentra el usuario registrado en la base."
        };
    } catch (error) {
        return { 
            titulo: "Ops error : " + error,
            descrpcion :"Pro favor contacte a soporte"
        };
    }
    
    
}

function listarUsuarios(id = undefined) {
   //return obtenerDatos(env_().SH_REGISTROS_USUARIOS);
   return JSON.stringify(_read(obtenerSheet(env_().SH_REGISTROS_USUARIOS), id));
    
}


function actualizarUsuario(id,datos){
    
    try {
        //const {id,nombreCompleto,correo,password}= usuario; //desestructuración de los datos por parametro
        const sheetUsuarios= obtenerSheet(env_().SH_REGISTROS_USUARIOS);
        //sheetUsuarios.appendRow([id, nombreCompleto, correo, password]); //Se setean los datos a la shet
        Update(id,datos,sheetUsuarios);
        return {
            titulo: "Actualizado Correctamente",
            descripcion : "Ya se encuentra actualizado en la Base de datos"
        };
        
    } catch (error) {
        return{
            titulo : "Ops ha ocurrido un error " + error,
            descripcion:  "Contacte a soporte "
        };
    }
}

function eliminiarUsuario(id){
    const sheetUsuarios= obtenerSheet(env_().SH_REGISTROS_USUARIOS);

    const usuarioAEliminar= _read(sheetUsuarios, id);
    sheetUsuarios.deleteRow(usuarioAEliminar.row);

    return{
        titulo : "Usuario Eliminado " ,
        descripcion:  "Removido con exito"
    };

}