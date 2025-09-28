import { useState } from "react";

export const CounterApp = () => {

    const [state, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30
    });

    const { counter1, counter2, counter3 } = state;
   
  return (
    <>
    <div className="row">
        <div className="col-md-12 d-flex justify-content-center mb-3">
            <h1>Counter: { counter1 }</h1>
        </div>

         <div className="col-md-12 d-flex justify-content-center mb-3">
            <h1>Counter: { counter2 }</h1>
        </div>

         <div className="col-md-12 d-flex justify-content-center mb-3">
            <h1>Counter: { counter3 }</h1>
        </div>

       <div className="col-md-6 d-grid gap-2">
            <button className="btn btn-primary"
                onClick= { () => setCounter({
                    ...state,
                    counter2: counter2 + 1
                    }) 
                }> +1 
            </button>
       </div>
       <div className="d-grid gap-2 col-md-6">
            <button className="btn btn-secondary" onClick={()=>setCounter( 
                {
                    ...state,
                    counter2: counter2 - 1
                }
            )}>-1</button>
       </div>
        
    </div>
    </>
  ) 
}
