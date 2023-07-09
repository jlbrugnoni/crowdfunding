// Función en la que aparece el Pop Up
function aparecePopup() {
    document.getElementById("popupDonacion").style.display = "block";
    document.getElementById("montoPopup").value = document.getElementById("montoDonacion").value;
}

//Función para salir del Pop Up y restablecer los valores de los inputs
function salirPopup() {
    document.getElementById("popupDonacion").style.display = "none";
    document.getElementById("montoPopup").value = null;
        document.getElementById("nombrePopup").value = null;
        document.getElementById("comentarioPopup").value = null;
        document.getElementById("montoDonacion").value = null;
}

//Variables globales para llevar la cuenta del progreso y las donaciones
let monto_total = 0;
let cont_donaciones = 0;
let progreso = 0;

//Funcion en la que se agrega una donación. En esta función se le imponen 
//algunas condicones al monto de donación y es que sea un número y este sea
//mayor que 0, ademas de ser un numero entero.
function agregarDonacion() {

    var HTML_Donacion = '';
    var HTML_Comentario = '';

    var monto = document.getElementById("montoPopup").value;
    var nombre = document.getElementById("nombrePopup").value;
    var comentario = document.getElementById("comentarioPopup").value

    if(isNaN(parseInt(monto))||monto==null||parseInt(monto)<=0){
        alert("Monto introducido no es valido")
    }else{
        console.log ("el valor de monto es (" + monto + ")"  );
        monto_total += parseInt(monto);
        cont_donaciones++;
        console.log(monto_total)
    
        progreso = (monto_total/19000)*100
    
        HTML_Donacion += `
            <div class="itemHistorialDonaciones">
                <div class="iconoItemDonacion"></div>
                <div class="contenidoItemDonacion">
                    <div class="nombreDonante">${nombre}</div>
                    <div class="montoFechaDonante">
                        <div class="montoDonante">$${monto}</div>
                        <div class="fechaDonante">0d</div>
                    </div>
                </div>
        </div>
        `;
    
        HTML_Donacion.unshift
    
        HTML_Comentario += `
            <div class="itemHistorialDonaciones">
                <div class="iconoItemDonacion"></div>
                <div class="contenidoItemDonacion">
                    <div class="nombreDonante"> ${nombre}</div>
                    <div class="montoFechaDonante">
                        <div class="montoDonante">$${monto}</div>
                        <div class="fechaDonante">0d</div>
                    </div>
                    <div class="opinion">${comentario}</div>
                </div>
            </div>
        `;
    
        var itemsDonaciones = document.getElementById("ultimasDonaciones").innerHTML;
        var itemsComentarios = document.getElementById("opinionesContenido").innerHTML;
    
        document.getElementById("ultimasDonaciones").innerHTML = HTML_Donacion + itemsDonaciones;
        document.getElementById("opinionesContenido").innerHTML = HTML_Comentario + itemsComentarios;
        document.getElementById("donacionesActulizado").innerHTML = '$' + monto_total;
        document.getElementById("conteoDonacionesNum").innerHTML = cont_donaciones;
    
        document.getElementById("barraCompletado").style.width = progreso + '%';
        document.getElementById("barraPendiente").style.width = (100-progreso) + '%';
    
        document.getElementById("montoPopup").value = null;
        document.getElementById("nombrePopup").value = null;
        document.getElementById("comentarioPopup").value = null;
        document.getElementById("montoDonacion").value = null;
    
        document.getElementById("popupDonacion").style.display = "none";

    }
}
