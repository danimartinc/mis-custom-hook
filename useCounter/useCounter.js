import { useState } from 'react';

//Misma estructura que un Functional Component
//CustomHook que extrae la logica del contador
export const useCounter = ( initialCounter = 10 ) => {

    const [counter, setCounter] = useState(initialCounter);

     //Función que nos permite restabler el valor por defecto del contador
     const reset = () =>{
        setCounter( initialCounter );
    }

    //Función que llama al setcounter del counter actual +1
    const increment = () =>{
        setCounter( counter + 1 );
    }

    //Función que llama al setcounter del counter actual -1
    const decrement = () =>{
        setCounter( counter - 1 );
    }
    //Devuelvo un objeto por si necesito especificamente incrementar o decrementar. Un array
    return {
        counter,
        increment,
        decrement,
        reset 
    };

}
