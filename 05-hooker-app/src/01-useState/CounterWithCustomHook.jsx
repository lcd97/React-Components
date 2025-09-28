import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {

    const { counter, increment, decrement, reset } = useCounter();

  return (
    <>
        <div className="row">
            <div className="col-md-12 d-flex justify-content-center mb-3">
                <h1>Counter with Custom Hook: { counter }</h1>
            </div>

            <hr/>

            <div className="col-md-4 d-grid gap-2">
                <button className="btn btn-primary"
                    onClick = { increment }>
                    +1
                </button>
            </div>
            
            <div className="col-md-4 d-grid gap-2">
                <button className="btn btn-primary"
                    onClick = { decrement }>
                    -1
                </button>
            </div>

            <div className="col-md-4 d-grid gap-2">
                <button className="btn btn-primary"
                    onClick = { reset }>
                    Reset
                </button>
            </div>
        </div>
    </>
  )
}
