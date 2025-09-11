function sumar(a:number, b:number):number
{
    return a+b;
};

const resultado = sumar(4,3);
console.log(resultado);

function multiplicar(n1:number, otronum?:number, base:number=6):number 
{
    return n1*base;
};

console.log(multiplicar(3));
console.log(multiplicar(3,5));
console.log(multiplicar(3,5,4));

///funciones tipo flecha

const addNumberArrow=(a:number, b:number):string=>{return `${a+b}`}

interface Mascotas{
    nombre:string,
    edad:number,
    raza:string,
    sexo?:string,
    vacunado:boolean,
    mostrarEdad:()=>void
}

function mostrarMascota(mascota:Mascotas, x:number):void{
    mascota.edad+=x;
    console.log(mascota);
    console.log(mascota.mostrarEdad());
}

const nuevaMascota:Mascotas={
    nombre: "Firulais",
    edad:5,
    raza:"Pastor Aleman",
    vacunado:true,
    mostrarEdad(){
        console.log(`La edad de ${this.nombre} es ${this.edad}`);
    }
}

mostrarMascota(nuevaMascota,2)