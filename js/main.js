(function () {
  //Variables

  let lista = document.getElementById("lista");
  let tareaInput = document.getElementById("tareaInput");
  let btnNuevaTarea = document.getElementById("btn-agregar");

  //funciones
  let agregarTarea = function () {
    let tarea = tareaInput.value,
      nuevaTarea = document.createElement("li"),
      enlace = document.createElement("a"),
      contenido = document.createTextNode(tarea);

    if (tarea === "") {
      tareaInput.setAttribute("placeholder", "Agrega una tarea valida");
      tareaInput.className = "error";
      return false;
    }

    //agregamos el contenido al enlace
    enlace.appendChild(contenido);
    //le establecemos el atributo href
    enlace.setAttribute("href", "#");
    //agregamos el enlace (a) a la nueva tarea (li)
    nuevaTarea.appendChild(enlace);
    //agregamos la nueva tarea a la lista
    lista.appendChild(nuevaTarea);

    tareaInput.value = "";

    for (let index = 0; index <= lista.children.length - 1; index++) {
      lista.children[index].addEventListener("click", function () {
        this.parentNode.removeChild(this);
      });
    }
  };

  let comprobarInput = function () {
    tareaInput.className = "";
    tareaInput.setAttribute("placeholder", "Agrega tu tarea");
  };

  let eliminarTarea = function () {
    this.parentNode.removeChild(this);
  };
  //eventos

  //Agregar tarea
  btnNuevaTarea.addEventListener("click", agregarTarea);

  //comprobar imput error
  tareaInput.addEventListener("click", comprobarInput);

  //borrando elementos de la lista
  for (let index = 0; index <= lista.children.length - 1; index++) {
    lista.children[index].addEventListener("click", eliminarTarea);
  }
})();
