import { useLayoutEffect, useRef, useState } from "react";


export const PokemonCard = ({id, name, sprites = []}) => {

    const h2ref = useRef();

    const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

    useLayoutEffect(() => {
      const { height, width } = h2ref.current.getBoundingClientRect();

    //   console.log({height, width});
    setBoxSize({ height, width });
    }, [name]);


  return (
        <div className="card d-flex justify-content-center" style={{ width: 250, margin: 10 }}>

        {
            sprites.map(sprite => (
                <img style={{ width: 200, height: 200 }} 
                    key = { sprites } 
                    src= { sprite }
                    className="card-img-top img-thumbnail"
                    alt = { name } />
            ))
        }

            <div className="card-body">
                <hr/>
                <h5 ref={ h2ref } className="card-title text-center">#{ id } - { name }</h5>
            </div>
            
            <div className="card-footer">
                <p className="text-center"> 
                    <small> 
                        <b> 
                            { JSON.stringify( boxSize ) } 
                        </b> 
                    </small> 
                </p>
            </div>

        </div>
  )
}
