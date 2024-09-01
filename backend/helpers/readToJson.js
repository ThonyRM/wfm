/**
 * _read
 * @param {String} sheet tabla de la base de datos
 * @param {String} id un identificador para buscar 
 * @returns {Object} objeto con la información necesaria
 */
function _read(sheet, id) {
    const data = sheet.getDataRange().getValues();
    const header = data.shift();

    // Buscar todo
    const resultado = data.map((row, indx) => {
        const reduced = header.reduce((accumulator, currentValue, currentIndex) => {
            accumulator[currentValue] = row[currentIndex];
            return accumulator;
        }, {});
        reduced.row = indx + 2;
        return reduced;
    });

    // Filtrar si se pasa un ID
    if (id) {
        return datoFiltrado = resultado.find((dato) => dato.id === id);
    }
    return resultado;

}