//Declaracion de variables 
var idProducto = document.getElementById("idProducto");


//Objeto para leer posibles respuestas del servidor
var url = "/Cajero/"

//
var EstadosDeRespuesta = {
    StatusCode: 0,
    StatusDescription: ''
};

//
function consultarProducto() {
    $('#consultar').modal('show');

}
