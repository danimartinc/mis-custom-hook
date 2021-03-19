//CustomHook para el handleInputChange() y controlar la informacion del formulario, si necesito otro formulario utilizo este CustomHook

import React, { useState } from 'react';

//Controlo 
export const useForm = ( initialState = {}) => {
    //Controlo el estado
    const [values, setValues] = useState(initialState);

    //useForm debe ser el encrgado de borrar el contenido de los campos
    //Meto que recibe los newValues
    const reset = () => {
        //Reseteo el formulario
        setValues( initialState );
    }

    //Comprueba el cambio en el Input
    //Desestructuramos el target del event
    const handleInputChange = ({ target }) =>{
        //Desestruturamos todo el formState
        setValues({
            //Recibimos todas las propiedades
            ...values,
            //Computamos que la primera propiedad que viene en el objeto, obtenga el valor de target.value
             [target.name ]: target.value
        })
    }
    //El primer valor es el estado del formulario
    //El segundo valor, la funcion para cambiar los valores del formulario
    //El tercer valor, resetea el formulario
    return [ values, handleInputChange, reset ];
   
}
