//Declaro Variables
let salirDelMenu = false;
let cursos;
let todosLosCursos = "";
let nombreCurso = "";
let precioCursos = 0;
let consulta;
let numeroDeCursos;
let cursoTotal;

//Clase Constructora del Curso
class Curso {
    constructor(idCurso, nombreCurso, precioCurso, inicioCurso) {
        this.idCurso = idCurso;
        this.nombreCurso = nombreCurso;
        this.precioCurso = precioCurso;
        this.inicioCurso = inicioCurso;
    }
}

//Instanciacion de los cursos (objetos)
const curso1 = new Curso(1, "Marketing Digital", 30000);
const curso2 = new Curso(2, "HTML 5", 10000);
const curso3 = new Curso(3, "CSS", 10000);
const curso4 = new Curso(4, "JavaScript", 15000);

//Creacion de array de objetos
const catalogo = [
    curso1,
    curso2,
    curso3,
    curso4,
];

//funcion para mostrar el catalogo de cursos
function mostrarCatalogo(arrayCursos) {
    console.log("Nuestros cursos disponibles son: ");
    arrayCursos.forEach((curso) => {
        console.log(
            `El curso ${curso.nombreCurso} tiene un precio de: $${curso.precioCurso}.`
        );
    });
}

//Funcion para buscar curso
function buscarCurso(buscar) {
    let cursoBuscado = prompt(`Ingrese el nombre del curso que desea buscar`);
    let cursoEncontrado = buscar.find(
        (curso) =>
            curso.nombreCurso.toLowerCase() == cursoBuscado.toLocaleLowerCase()
    );
    if (cursoEncontrado == undefined) {
        alert(
            `El curso ${cursoBuscado} no esta en nuestro catalogo por el momento!`
        );
    } else {
        alert(`Se encontro el curso ${cursoEncontrado.nombreCurso} y puedes ver toda su informacion aca:  
    Precio: ${cursoEncontrado.precioCurso}`);
    }
}

//Funcion para mostrar los cursos
function seleccionarCursos() {
    alert(`
  Estos son los cursos que tenemos para que aprendas con nosotros: 
  
  1 - Marketing Digital
  2 - HTML 5
  3 - CSS
  4 - JavaScript
  `);

    let cantidadCursos = parseInt(
        prompt(
            "Ingrese la cantidad de cursos que te interesa adquirir. ¡Ingresa solo numeros!"
        )
    );

    for (let i = 1; i <= cantidadCursos; i++) {
        cursos = parseInt(
            prompt(`
      Estos son los cursos que tenemos para que aprendas con nosotros: 
  
      1 - Marketing Digital
      2 - HTML 5 
      3 - CSS
      4 - JavaScript
              
    Escoge la opcion del 1 al 4 correspondiente al curso al cual 
    quieras inscribirte.`)
        );

        //Opciones
        switch (cursos) {
            case 1:
                precioCursos += 30000;
                nombreCurso = "Marketing Digital,";
                alert(`Agregaste el curso ${nombreCurso} al carro de compras.`);
                todosLosCursos += nombreCurso;
                break;

            case 2:
                precioCursos += 10000;
                nombreCurso = "HTML 5,";
                alert(`Agregaste el curso ${nombreCurso} al carro de compras`);
                todosLosCursos += nombreCurso;
                break;

            case 3:
                precioCursos += 10000;
                nombreCurso = "CSS,";
                alert(`Agregaste el curso ${nombreCurso} al carro de compras`);
                todosLosCursos += nombreCurso;
                break;

            case 4:
                precioCursos += 15000;
                nombreCurso = "JavaScript,";
                alert(`Agregaste el curso ${nombreCurso} al carro de compras`);
                todosLosCursos += nombreCurso;
                break;

            //Opcion Predeterminada
            default:
                alert("Ingrese una opcion del 1 al 4");
                break;
        }
    }
}

//FUNCION PARA COMPRAR LOS CURSOS EN EL CARRITO DE COMPRAS
function carroDeCompras() {
    consulta = prompt(
        `Desea comprar los cursos agregados al carrito de compras? Indique si o no.`
    ).toLowerCase();

    if (consulta === "si") {
        alert(
            `¡¡FELICIDADES!! compraste ${todosLosCursos} preparate para empezar a aprender y disfrutar`
        );
        todosLosCursos = "";
        precioCursos = 0;
    } else if (consulta == "no") {
        alert(
            "Esperamos que vuelvas pronto y te decidas por algunos de nuestros cursos."
        );
        todosLosCursos = "";
        precioCursos = 0;
    } else {
        alert("Ingresa si o no");
    }
}

//Menu Principal
do {
    let consultar = parseInt(
        prompt(`Ingrese la opcion deseada: 
    
    1 - Cursos disponibles.
    2 - Informacion general de los cursos (Precio).
    3 - Ver carro de compras.
    4 - Buscar curso por titulo
    0 - Salir del menu.
    `)
    );

    //Opciones
    switch (consultar) {
        case 1:
            seleccionarCursos();
            break;

        case 2:
            alert("Revise la consola");
            mostrarCatalogo(catalogo);
            break;

        case 3:
            if (todosLosCursos == "") {
                alert("El carro esta vacio, agrega los cursos que mas te gusten!.");
            } else {
                alert(
                    `En el carro de compras agregaste ${todosLosCursos} y el precio total es de: $${precioCursos}.`
                );
                carroDeCompras();
            }
            break;

        case 4:
            buscarCurso(catalogo);
            break;

        case 0:
            alert(
                "GRACIAS POR VISITARNOS, ESPERAMOS QUE PRONTO TENGAMOS ALGUN CURSO QUE TE ANIME A CAPACITARTE CON NOSOTROS. "
            );
            salirDelMenu = true;
            break;

        //Opcion Predeterminada
        default:
            alert("Ingrese una opcion correcta del 0 al 3.");
            break;
    }
} while (!salirDelMenu);