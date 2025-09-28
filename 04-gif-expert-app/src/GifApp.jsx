import { useState } from "react";
import { AddCategory } from "./Components/AddCategory"; 
import { GifGrid } from "./Components/GifGrid";

export const GifApp = () => {
    
    const [categories, setCategories] = useState(['Cats']);

    const onAddCategory = (value) => {
        // if(!categories.includes(value)) 
        //     setCategories([value, ...categories]);

        if(!categories.find(cat => cat.toLowerCase() === value.toLowerCase()))
            setCategories([value, ...categories]);
    }

  return (<>
    <h1>Gif Expert App</h1>

    <AddCategory onNewCategory={(value) => onAddCategory(value)} />
    
    {
        categories.map(category => {
            // return <li key={category}>{category}</li>
            return (
                <GifGrid key={category} category={category}/>
            )
        })
    }
  </>);
}