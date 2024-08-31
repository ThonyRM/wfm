function guardarUsuario(usuario) {
    try {
        //const {id, nombreCompleto, correo, contrasenia} = usuario;
        const shetUsuarios= obtenerSheet(env_().SH_REGISTROS_USUARIOS);

        Insert(JSON.parse(usuario), shetUsuarios);
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