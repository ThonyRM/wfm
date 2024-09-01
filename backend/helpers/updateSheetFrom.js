
function Update(id,datos,table){
    console.log({id,datos,table});
    const headers= table.getDataRange().getValues().shift();
    const datosEncontrados= _read(table,id);
    const datosObject= JSON.parse(datos);

    const numeroFila = datosEncontrados.row;

    for(const key in datosObject){
        const numeroColumna = headers.indexOf(key)+1;
        table.getRange(numeroFila, numeroColumna).setValue(datosObject[key])
    }
}