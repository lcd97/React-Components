import { useCounter } from "../hooks/useCounter";
import { Small } from "./Small";
import { useState } from 'react';

export const Memoriza = () => {

    const { counter, increment } = useCounter(10);

    const [show, setShow] = useState(true);

  return (
    <>
    
    <h1 className="text-center fw-bold">Counter: <Small value={counter} />  </h1>
    <hr/>

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
