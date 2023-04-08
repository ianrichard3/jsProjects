const operadores = [{text:"+", operation: (a,b) => a+b },
                    {text:"-", operation: (a,b) => a-b },
                    {text:"*", operation: (a,b) => a*b },
                    {text:"/", operation: (a,b) => a/b }];


function operacion(n1, n2, operador)
{
    operadores.forEach(el => {
        if (el.text === operador){
            // console.log(`hola ${operador}`);
            res = el.operation(n1, n2);
        }
    })
    return res;
}

console.log(operacion(5, 2, "*"))

// Falta la implementacion grafica, pero en esencia es eso