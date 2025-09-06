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