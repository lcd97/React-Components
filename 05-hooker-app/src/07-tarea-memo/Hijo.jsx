import React from 'react';

// React.memo => memoriza el componente, si las props no cambian, no se vuelve a generar
// memo solo hace una comparación superficial (shallow comparison) de las props
// si las props son objetos o funciones, siempre se van a generar de nuevo
// para evitar esto, se puede usar useCallback en el padre para memorizar la función

export const Hijo = React.memo(({ numero, incrementar }) => {

    console.log('  Me volví a generar :(  ');

    return (
        <button
            className="btn btn-primary mr-3"
            onClick={ () => incrementar( numero ) }
        >
            { numero }
        </button>
    )
})