var url = "/GerenteGeneral/"//Objeto para leer posibles respuestas del servidor.

var EstadosDeRespuesta = {
    StatusCode: 0,
    StatusDescription: ''
};


function eliminarProducto() {
    $('#respuesta').modal('show');
    /*fetch(url + "GerenteGeneral_Eliminar", {
        method: "POST",
        body: JSON.stringify({
            IdProducto: document.getElementById("idproducto").value  //pendiente al nombre que le de Santiago
           
        }),
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    }).then(function (response) {
        if (response.ok)
            return response.text()
        else
            document.location.href = "/Error.cshtml"
    }).then(function (Data) {
        EstadosDeRespuesta = JSON.parse(Data);
        if (EstadosDeRespuesta.StatusDescription == "OK") {
           console.log("exito")
        }
        else{
            console.log("error")
        }
    })*/
}








