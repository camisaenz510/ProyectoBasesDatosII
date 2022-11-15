var url = "/GerenteGeneral/"//Objeto para leer posibles respuestas del servidor.

var EstadosDeRespuesta = {
    StatusCode: 0,
    StatusDescription: ''
};


function insertarProducto() {
    $('#respuesta').modal('show');
    /*fetch(url + "GerenteGeneral_Insertar", {
        method: "POST",
        body: JSON.stringify({
            PLU: document.getElementById("plu").value  //pendiente al nombre que le de Santiago
           EAN: document.getElementById("ean").value  
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








