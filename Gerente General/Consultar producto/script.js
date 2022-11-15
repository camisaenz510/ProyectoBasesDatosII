var url = "/GerenteGeneral/"//Objeto para leer posibles respuestas del servidor.

var EstadosDeRespuesta = {
    StatusCode: 0,
    StatusDescription: ''
};


function consultarProducto() {
    $('#detalleProducto').modal('show');
   /* fetch(url + "GerenteGeneral_Consultar") //Nombre pendiente a ver cual le pone Santiago
        .then((respuesta) => {
            return respuesta.json();
        }).then((datos) => {
            var producto = '';
            //En la variable producto se pone la información en lenguaje html que se mostrará en el modal de Bootstrap
            document.getElementById("listaMarcas").innerHTML = producto
        });*/
}


