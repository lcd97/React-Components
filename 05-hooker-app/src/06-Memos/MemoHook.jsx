import { useCounter } from "../hooks/useCounter";
import { useMemo, useState } from 'react';

const heavyStuff = ( iterationNumber = 100 ) => {
    for (let i = 0; i < iterationNumber; i++) {
        console.log('Ahi vamos...');
    }
    return `${ iterationNumber } iteraciones realizadas`;
}

export const MemoHook = () => {

    const { counter, increment } = useCounter(10);
    const [show, setShow] = useState(true);


    const messageMemorizedValue = useMemo( () => heavyStuff(counter), [counter] );

  return (
    <>
    
    <h1 className="text-center fw-bold">Counter: <small>{counter}</small> </h1>
    <hr/>

    <h4>
        { messageMemorizedValue }
    </h4>


    <div className="col-md-12 justify-content-center d-flex">
    
        <button
            className="btn btn-primary"
            onClick={ increment }
            >
            Incrementar + 1
        </button>
    

        <button
            className="btn btn-outline-primary ms-3"
            onClick={ () => setShow(!show) }   
            >
            Show/Hide { JSON.stringify(show) }
        </button>

    </div>
    </>
  )
}
