import React, { useState, useCallback } from "react";

export default function SearchBar ({onSubmit}) {
    const [query, setQuery] = useState('')

    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    const handleSubmit = useCallback(() => {
        onSubmit(query)
    }, [query, onSubmit])

    return (
        <div>
            <input type="text" onChange={handleChange} placeholder={'please input text'}/>
            <button class="button" onClick={handleSubmit}> Search</button>
        </div>
    )
}