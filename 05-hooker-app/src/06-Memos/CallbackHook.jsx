import { useState, useCallback } from "react";
import { ShowIncrement } from "./ShowIncrement";


export const CallbackHook = () => {
    
    const [counter, setCounter] = useState(10);


    const incrementFather = useCallback(
      () => {
        setCounter( (counter) => counter + 1 );
      },
      [],
    );


  return (
    <>
        <h1 className="text-center fw-bold">Callback Hook: { counter }</h1>

        <hr />


        <div className="d-flex justify-content-center col-md-12">
           <ShowIncrement increment={ incrementFather } />
        </div>
    </>
  )
}