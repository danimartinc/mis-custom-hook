//CustomHook, cuando se intente cambiar el estado y el componente no esté montado

import { useEffect, useRef, useState } from 'react';

export const useFetch = ( url ) => {
    //Por defecto, cuando se llama el componente esta montado porque esta renderizado la primera vez
    //Mantiene la referencia cuando esta vivo o cuando sigue montado el componente
    const isMounted = useRef( true );

    //Validamos que recibimos el URL

    //Por defecto tiene un estado
    const [state, setstate] = useState({
        //Estado inical de la data de la API
        data: null,
        loading: true,
        error: null
    });

    useEffect(() => {
        //Cuando se desmonte el efecto, cambio el valor del isMounted
        return () => {
            //No dispara de nuevo la renderizacion del componente, mantenemos la referencia al mismo
            isMounted.current = false;
        }
    }, []) //Solo lo hace cuando el componente se carga por primera vez


    useEffect(() => {
        //Para poner de nuevo el loading en true cuando cargo el siguiente quote
        setstate({
            data: null,
            loading: true,
            error: null
        });
        
        fetch( url )
          //Retorna una promesa
          .then( respuesta => respuesta.json())
          .then( data => {
               //Utilizo la refenrecia en false del useEffect para llamar de manera condicional al setState()
                if( isMounted.current){
                    //Establezco un nuevo estado
                    setstate({
                        loading: false,
                        error: null,
                        data
                    });
                }   
          });
    }, [//Se ejecuta tan solo cuando el URL se modifica
        url
    ]);

    return state;

}
