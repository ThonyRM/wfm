

function Insert(data , table) {

    const headers = table.getDataRange().getValues().shift();
    const new_row = prepareRow(data, headers);
    table.appendRow(new_row); 
    
}
function prepareRow(data, headers) {
    let sorted_array =[];

    for(let position =0; position < headers.length; position++){
        let value = data[headers[position]];
        sorted_array[position] = value;
    }
    return sorted_array; 
}