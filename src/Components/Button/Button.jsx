import React from "react";

export function Button ({onClick, name}) {
    return <button onClick={onClick}>{name}</button>
}

