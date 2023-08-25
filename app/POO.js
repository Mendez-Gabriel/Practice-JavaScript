/*-------------- Prototipos orientados a objetos --------------*/

/* Creando Objetos */

/*1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

Output:

objeto.encender();
objeto.apadar()
auto encendido
El auto se apagó
 */

// const Auto = {
//     color : "rojo",
//     marca : "pagani",
//     modelo : "zondaCinque",
//     encender : () => {
//         console.log("El auto se encendio");
//     },
//     apagar : () => {
//         console.log("El auto se apago");
//     },    
// }

// console.log(Auto);

// Auto.encender();





/* Modelando clases */

/* 2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.

Rectángulos
 */

// let cuenta = {
//     titular : "Alex",
//     saldo : 0,
//     ingresar : function (valor1) {
//         this.saldo = this.saldo + valor1;
//     },
//     extraer : function (valor2) {
//         this.saldo = this.saldo - valor2;
//     },
//     informar : function (){
//         console.log(this);
//     },
// }

// console.log(cuenta);

// cuenta.ingresar(100);

// cuenta.informar();

// cuenta.extraer(10);

// cuenta.informar();


/* 3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área */


// class rectangle{
//     constructor(height, width){
//         this.height = height;
//         this.width = width;
//         }

//     mod () {
//         this.height = parseInt(prompt('height value'));
//         this.width = parseInt(prompt('width value'));
//         console.log('El objeto modificado es:');
//         console.log(this);
//     }
// }

// const myFunction = new rectangle(20, 20);
// console.log(myFunction);

// myFunction.mod();




/* 4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.
 */

// class Producto{
//     constructor (codigo, nombre, precio){
//         this.codigo = codigo;
//         this.nombre = nombre;
//         this.precio = precio;
//     }

//     print() {
//         console.log(`-Codigo = ${this.codigo} \n-Nombre = ${this.nombre} \n-Precio = ${this.precio}`);
//     }
// }

// const instancia1 = new Producto(4968, 'Gabriel', 98);
// const instancia2 = new Producto(3695, 'Dario', 28);
// const instancia3 = new Producto(753159, 'Mendez', 30);

// instancia1.print();
// instancia2.print();
// instancia3.print();


/* 5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones: (imgaen en el pdf)
 */

// class Persona{
//     constructor(nombre, edad, dni, sexo, peso, altura, fecha){
//         this.nombre = nombre;
//         this.edad = edad;
//         this.dni = dni;
//         this.sexo = sexo;
//         this.peso = peso;
//         this.altura = altura;
//         this.fecha = fecha;
//     }

//     mostrarGenereacion(){
//         if(this.fecha > 1930 && this.fecha < 1948){
//             console.log('Pertenece a generacion: Silent Generation, su rasgo es: Austeridad');
//         }else if (this.fecha < 1969){
//             console.log('Pertenece a generacion: Baby Boom, su rasgo es: Ambicion');
//         }else if (this.fecha < 1981){
//             console.log('Pertenece a generacion: Generacion X, su rasgo es: Obsecion por el exito');
//         }else if (this.fecha < 1994){
//             console.log('Pertenece a generacion: Millenials, su rasgo es: Frustracion');
//         }else if (this.fecha < 2011){
//             console.log('Pertenece a generacion: Generacion Z, su rasgo es: Irreverencia');
//         }
//     }
// }


// const gabriel = new Persona('gabriel', 28, 38489843, 'H', 85, 85, 1994)

// gabriel.mostrarGenereacion();





/* 
6- Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.

 */

// class Libro {
//     constructor(isbn, titulo, autor, numDePaginas){
//         this.isbn = isbn,
//         this.titulo = titulo,
//         this.autor = autor,
//         this.numDePaginas = numDePaginas
//     }

//     get isbn() {
//         return this._isbn;
//     }

//     set isbn(value){
//         this._isbn = value;
//     }

    
//     get titulo() {
//         return this._titulo;
//     }


//     set titulo(value){
//         this._titulo = value;
//     }

    
//     get autor() {
//         return this._autor;
//     }


//     set autor(value){
//         this._autor = value;
//     }

    
//     get numDePaginas() {
//         return this._numDePaginas;
//     }


//     set numDePaginas(value){
//         this._numDePaginas = value;
//     }

//     mostrarLibro(){
//         console.log(`El libro ${this.titulo} con ISBN ${this.isbn} creado por el autor ${this.autor} tiene páginas ${this.numDePaginas}`);
//     }
// }


// let obj1 = new Libro(555, 'HarryPotter', 'JamesCameron', 500);
// obj1.mostrarLibro();

// let obj2 = new Libro(566, 'CancionDeHieloyFuego', 'j.j. Brawns', 1000);
// obj2.mostrarLibro();







/* 7- Nos piden realizar una agenda telefónica de contactos.

Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

Los métodos de la agenda serán los siguientes:

aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
existeContacto(Contacto): indica si el contacto pasado existe o no.
listarContactos(): Lista toda la agenda
buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
agendaLlena(): indica si la agenda está llena.
huecosLibres(): indica cuántos contactos más podemos ingresar.

Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y  por consola.
 */

class contacto {
    constructor(nombre, phone){
        this.nombre = nombre;
        this.phone = phone;
    }
}

class Agenda{

    constructor(tamano = 5){
        this.contactos = [];
        this.tamano = tamano;
    }




    aniadirContacto(contacto){
        console.log("--------------NUEVO CONTACTO--------------");
        if(this.contactos.length <= this.tamano){
            this.contactos.push(contacto);
            console.log(`Se añadio: ${contacto.nombre}`);
        }else{
            console.log("No se pudo añadir contacto, excede la capacidad de la agenda");
        }

    }
    
    
    existeContacto(contacto) {
        console.log("EXISTENCIA DE CONTACTO");
        const contactoExistente = this.contactos.find(exite => exite.nombre === contacto.nombre);

        if (contactoExistente) {
          console.log(`El contacto "${contacto.nombre}" existe en la agenda.`);
        } else {
          console.log(`El contacto "${contacto.nombre}" no existe en la agenda.`);
        }
    
    }    



    listarContactos(){
        this.contactos.forEach((contacto) => {
            console.log(`Nombre: ${contacto.nombre} - Tel: ${contacto.phone}`);
        })
   }


   buscarContacto(nombre){

         console.log("BUSQUEDA DE CONTACTO");
        const contactoBuscar = this.contactos.find(buscar => buscar.nombre === nombre);

        if (contactoBuscar) {
        console.log(`El contacto "${contactoBuscar.nombre}" su numero es ${contactoBuscar.phone}.`);
        } else {
        console.log(`El contacto no existe en la agenda.`);
        }   
   }


   eliminarContacto(nombre){
    console.log("ELIMINAR CONTACTO");
        const contactoEliminar = this.contactos.findIndex(eliminar => eliminar.nombre === nombre);

        if (contactoEliminar !== -1) {
            const eliminado = this.contactos.splice(contactoEliminar, 1);
            console.log(`El contacto "${eliminado[0].nombre}" fue eliminado`);
            } else {
            console.log(`El contacto no existe en la agenda.`);
            }
   }


   agendaLlena(){
        if(this.contactos.length >= this.tamano){
            console.log("La agenda esta llena");
        }else{
            console.log("La agenda cuenta con espacio disponible");
        }
   }


   huecosLibres(){
        if(this.contactos.length < this.tamano){
            this.diferencia = this.tamano - this.contactos.length;
            console.log(`El espacio disponible es ${this.diferencia}`);
        }else{
            console.log("La agenda no tiene espacios disponibles");
        }
   }
}

const miAgenda = new Agenda(5);

let elegir

do{
    elegir = parseInt(prompt(`QUE DESEA HACER?: \n[1]Añadir un contacto\n[2]Comprobar existencia de contacto\n[3]Lista de contactos\n[4]Buscar contacto\n[5]Eliminar contacto\n[6]Comprobar si la agenda este llena\n[7]Cuantos huecos tengo disponibles\n[8]Salir`));

    if(isNaN(elegir)){
        break;
    }

    if(elegir === 1){
        console.log("----------------------------");
        console.log(`Añadir un contacto`);                
        let personaNom = prompt("Ingresa el nombre").toLocaleLowerCase();
        let personaNum = parseInt(prompt("Ingresa el numero"));
        const persona = new contacto(personaNom, personaNum);
        miAgenda.aniadirContacto(persona);                
    }



    if(elegir === 2){
        console.log("----------------------------");
        console.log(`Comprobar existencia de contacto`);
        miAgenda.existeContacto(persona); /* ??????? */
    }



    if(elegir === 3){
        console.log("----------------------------");
        console.log(`LISTA DE CONTACTOS`);
        miAgenda.listarContactos();
    }



    if(elegir === 4){
        console.log("----------------------------");
        console.log(`Buscar contacto`);
        let nomPersona = prompt("Ingresa el nombre para buscar").toLocaleLowerCase();
        miAgenda.buscarContacto(nomPersona);
    }



    if(elegir === 5){
        console.log("----------------------------");
        console.log(`Eliminar contacto`);
        let nomEliminar = prompt("Ingresa el nombre del contacto que desean eliminar");
        miAgenda.eliminarContacto(nomEliminar);
    }



    if(elegir === 6){
        console.log("----------------------------");
        console.log(`Comprobar si la agenda este llena`);
        miAgenda.agendaLlena();
    }



    if(elegir === 7){
        console.log("----------------------------");
        console.log(`Cuantos huecos tengo disponibles`);
        miAgenda.huecosLibres();
    }


    
    if(elegir === 8){
        break;
    }

}while(true)
  
        

