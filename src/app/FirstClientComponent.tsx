"use client";

import { useState } from "react";

export default function FirstClientComponent() {
    const [value, setValue] = useState(0);
    return (
        <>
            <h1>Welcome to NextJS... I am a client component</h1>
            <button onClick={e => setValue(value+1)}>Client Button</button>
            <h2>{value}</h2>
        </>
    )
}