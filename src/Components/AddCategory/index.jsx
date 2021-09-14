import React from "react";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";

export default function AddCategory({value, error, handlerChangeInput, createAddCategory}){
    return (
        <div className='category'>
            <Input value={value} onChange={handlerChangeInput} placeholder='Добавить категорию'/>
            <Button onClick={createAddCategory} name="Добавить категорию" />
            {error && <p className="error">{error}</p>}
        </div>
    )
}