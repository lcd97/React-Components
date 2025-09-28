import { useEffect, useState } from "react"

export const Message = () => {

    const [coords, setCoords] = useState({x:0, y:0});

    useEffect(() => {
        
        const onMouseMove = ({x , y}) => {
            setCoords({x, y});
        }

        window.addEventListener('mousemove', onMouseMove);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
        };
    }, []);



  return (
    <>
    <div className="alert alert-danger mt-2 text-center fw-bold" role="alert">
        Usuario ya existe
    </div>


    <h1 className="text-center fw-bold">
        coords: {JSON.stringify(coords)}    
    </h1>

        
    </>
  )
}
