function addPostsToPage() {

let person = prompt("Please enter your name", "Harry Potter");
let text;
if (person == null || person == "") {
  text = "User cancelled the prompt.";
} else {
  text = "Hello " + person + "! How are you today?";
}
}

// Get the modal
var modal1 = document.getElementById("myModal");

// Get the button that opens the modal
//var btn = document.getElementById("botonDonar2");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
function aparecePopup() {
    document.getElementById("popupDonacion").style.display = "block";
    document.getElementById("montoPopup").value = document.getElementById("montoDonacion").value;
    //alert("hola mundo");
}

// When the user clicks on <span> (x), close the modal
function salirPopup() {
    document.getElementById("popupDonacion").style.display = "none";
}

let monto_total = 0;
let cont_donaciones = 0;
let progreso = 0;

function agregarDonacion() {

    var HTML_Donacion = '';
    var HTML_Comentario = '';

    var monto = document.getElementById("montoPopup").value;
    var nombre = document.getElementById("nombrePopup").value;
    var comentario = document.getElementById("comentarioPopup").value

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

    document.getElementById("ultimasDonaciones").innerHTML += HTML_Donacion;
    document.getElementById("opinionesContenido").innerHTML += HTML_Comentario;
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
