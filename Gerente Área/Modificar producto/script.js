var url = "/GerenteDeArea/"//Objeto para leer posibles respuestas del servidor.

var EstadosDeRespuesta = {
    StatusCode: 0,
    StatusDescription: ''
};


function modificarProducto() {
    $('#respuesta').modal('show');
    /*fetch(url + "GerenteDeArea_Insertar", {
        method: "POST",
        body: JSON.stringify({
            plu: document.getElementById("plu").value  //pendiente al nombre que le de Santiago
           ean: document.getElementById("ean").value  
           descripcion: document.getElementById("descripcion").value  
           peso: document.getElementById("peso").value  
           precio: document.getElementById("precio").value  
            cantidad: document.getElementById("cantidad").value  
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
            
             $('#respuesta').modal('show');
        }
        else{
            $('#respuesta').modal('show');
        }
    })*/
}




