interface Alumno{
    nombre:string;
    apellido:string;
    edad:number;
    email:string;
    nota?:number;
}

const alumno:Alumno={
    nombre: "Mario",
    apellido: "Lopez",
    edad: 22,
    email: "mariolopez@gmail.com",
}

console.table(alumno)

let mascotas = ['perro', 'gato', 'perico']
mascotas[1]='nuevo gato'
mascotas.push('leon');
console.log(mascotas)

let tem:(number|string)[]=[];

tem.push(11)
tem.push('once')

