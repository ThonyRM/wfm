function _read(sheet, id) {
    const data = sheet.getDataRange().getValues();
    const header = data.shift();
    // Buscar todo
    const resultado = data.map((row, indx) =>{
        const reduced= header.reduce((accumulator,currentValue,currentIndex) => {
            accumulator[currentValue] = row [currentIndex];
            return accumulator;
        },
        {});

        reduced.row = indx + 2;
        return reduced;
    
});

// Filtrar por Id
    if(id){
        return resultado.find((dato) => dato.id === id);
        //const datoFiltrado = resultado.find((dato) => {
        //    if(dato.id === id){
        //        return true;
        //    }else{
        //        return false;
        //    }
        //});
        //return datoFiltrado;
    }
    return resultado;

}