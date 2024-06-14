
$(document).ready(function() {
  let id_index=1;
    $('#textoBuscador').on('input', function() {  // Funcion para buscar cartas que contengan el texto del input
        var inputValue = $(this).val();
        $(".card").addClass("hide");  // Esconde las cartas
        $("div.card:contains('" + inputValue + "')").removeClass("hide"); // Muestra las que coinciden

      });


      // Clase carta para organizar los datos de los usuarios
      class Carta {
        constructor(nombre,direccion, datos) {
          this.nombre=nombre;
          this.direccion = direccion;
          this.datos = datos;

        }
      }
      let datos = [
        ["Lets See Paul Allens Card - Expanded","https://github.com/1001inchNails/letsSeePaulAllensCardExpanded","Creacion de un simulacro de pagina con cartas de presentacion de clientes para realizar busqueda por filtro, pero mejor"],
        ["Lets See Paul Allens Card","https://github.com/1001inchNails/letsSeePaulAllensCard","Creacion de un simulacro de pagina con cartas de presentacion de clientes para realizar busqueda por filtro"],
        ["3 en Raya","https://github.com/1001inchNails/tresEnRaya-V-clase","Creacion de un sencillo juego de tres en raya mediante HTML, CSS y Jquery"],
        ["Tareas","https://github.com/1001inchNails/tareasJQUERY","Ejercicio sencillo de jquery"],
        ["Taller","https://github.com/1001inchNails/Act09","Actividad sobre herencia y polimorfismo"],
        ["Git Gud","https://github.com/1001inchNails/Act8GitGud","Ejercicio sobre GIT"]
      ];
      let arrayCartas=[]; // Para meter los datos en un array de objetos carta
      for(let dato of datos){
        arrayCartas.push(new Carta(dato[0],dato[1],dato[2]));
        id_index++;
      };
      arrayCartas.forEach(carta => {
        let nuevaCarta = crearCarta(carta);
        $('.main').append(nuevaCarta);  // Lo rellena con los datos del array
      });
  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      
      
      function crearCarta(carta) {  // Funcion para crear elemento HTML con la carta
        return `
          <div id="${carta.id}" class="card">

            <div class="contenido">
              <span class="nombre"><i><a href="${carta.direccion}">${carta.nombre}</a></i></span>
              </br>
              <div class="datos">
              <p><i><b>${carta.datos}</b></i></p>
              </div>
          
            </div>           

          </div>
        `;
        
      }

      


  ///////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Cojemos el modal
  var modal = document.getElementById("modalForm");

  // Cojemos el boton de apertura
  var btn = document.getElementById("plus");

  // Cojemos la x de cierre
  var span = document.getElementsByClassName("cerrarForm")[0];

  // Cuando el usuario clickea boton apertura, abre modal
  btn.onclick = function() {
    modal.style.display = "block";
  }

  // Cuando el usuario clickea boton cierra, cierra modal y borra valores de los inputs
  span.onclick = function() {
    modal.style.display = "none";

    document.getElementById("nombre").value = "";
    document.getElementById("desc").value = "";
    document.getElementById("foto").value = "";
  }

  // Cuando el usuario clickea fuera del modal, cierra modal y borra valores de los inputs
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";

    document.getElementById("nombre").value = "";
    document.getElementById("desc").value = "";
    document.getElementById("foto").value = "";
    }
  }

  // formulario
  document.getElementById("formulario").addEventListener("submit", function(event){
    event.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let descr = document.getElementById("desc").value;
    let rutafoto = document.getElementById("foto").value;
    rutafoto=rutafoto+".png";

    // para que no se pueda enviar sin todos los inputs rellenados
    let nombreCheck = document.getElementById("nombre").value.trim();
    let descrCheck = document.getElementById("desc").value.trim();
    let fotoCheck = document.getElementById("foto").value.trim();

  if (nombreCheck && descrCheck && fotoCheck) { // para que no se pueda enviar sin todos los inputs rellenados
    arrayCartas.push(new Carta(String(id_index),nombre,descr,rutafoto));  // Se añade la nueva carta al array
    for(let i=0;i<arrayCartas.length;i++){
      if(arrayCartas[i].id==id_index){
        let nuevacarta=crearCarta(arrayCartas[i]);
        $('.main').append(nuevacarta);  // Se añade la nueva carta a la pagina
      }
    }
    id_index++; // Para actualizar la variable ID (para que sean unicas)
    var modal = document.getElementById("modalForm");

    modal.style.display = "none";

    document.getElementById("nombre").value = "";
    document.getElementById("desc").value = "";
    document.getElementById("foto").value = "";
    
  }

    
  });
///////////////////////////////////////////////////////////////////////////////////////////////////////////
});