import React, { useState } from "react";
import { Input } from "../Input/Input";
import { useHistory } from "react-router";

export default function Search(params) {
    const [value, setValue] = useState('')

    const history = useHistory();

    const handleChange = (e) => {
        const setValueUrl = url.searchParams.set('search', `${e.target.value}`)
        history.replace(url.search.replace(setValueUrl))
        setValue(e.target.value)
    }
    const url = new URL(window.location.href);
    console.log(url);
    return (
        <div>
            <Input placeholder='search todo' value={value} onChange={handleChange}/>
        </div>
    )
}