import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onHandleInputChange = ({target}) => {
        setInputValue(target.value);
    };

    const onHandleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length <= 1) return;

        onNewCategory(inputValue.trim());
        setInputValue('');
    }

  return (
    <form onSubmit={onHandleSubmit} >
        <input type="text" placeholder="Add a new category" 
        value={inputValue} onChange={onHandleInputChange}/>
    </form>
  )
}