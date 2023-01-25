
const Procesos = (valor) => {



 console.log("soy el proceso");
 console.log("me voy a ejecutar",valor);
 let variable = valor;
 variable=valor + 100;
 console.log("primer valor",variable)
 variable=variable + 100;
 console.log("Segundo Valor",variable)
 return variable

}

export default  Procesos;