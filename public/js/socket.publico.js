// Comando para establecer la conexion

var socket = io();

var lblTicket1 = $("#lblTicket1");
var lblTicket2 = $("#lblTicket2");
var lblTicket3 = $("#lblTicket3");
var lblTicket4 = $("#lblTicket4");

var lblEscritorio1 = $("#lblEscritorio1");
var lblEscritorio2 = $("#lblEscritorio2");
var lblEscritorio3 = $("#lblEscritorio3");
var lblEscritorio4 = $("#lblEscritorio4");

var lblTickets = [lblTicket1, lblTicket2, lblTicket3, lblTicket4];
var lblEscritorios = [
  lblEscritorio1,
  lblEscritorio2,
  lblEscritorio3,
  lblEscritorio4,
];

socket.on("estadoActual", function (data) {
  console.log(data);
  actualizarHTML(data.ultimos4);
});

socket.on("ultimos4", function (data) {
  var audio = new Audio("audio/new-ticket.mp3");
  audio.play();
  actualizarHTML(data.ultimos4);
});

function actualizarHTML(ultimos4) {
  for (var i = 0; i < ultimos4.length; i++) {
    lblTickets[i].text("Ticket " + ultimos4[i].numero);
    lblEscritorios[i].text("Escritorio " + ultimos4[i].escritorio);
  }
}

// $("h1").text("Escritorio " + escritorio);

// $("button").on("click", function () {
//   socket.emit(
//     "atenderTicket",
//     {
//       escritorio: escritorio,
//     },
//     function (resp) {
//       console.log(resp);
//       if (resp.numero) {
//         label.text(resp.numero);
//       } else {
//         label.text(resp);
//         alert(resp);
//       }
//     }
//   );
// });