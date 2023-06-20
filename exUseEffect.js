import React, { useState, useEffect } from 'react'


function Greeting() {
    const [name, setName] = useState()
    useEffect(() => { window.localStorage.getItem('name') })

    function Submit(e) {

        e.preventDefault()
        setName()
    }

    return (
        <>
            <form>
                <div onSubmit={Submit}>
                    <label htmlFor='name'>Username:</label>

                    <input value='name' type="text" onChange={(e) => setName(e.target.value)} />



                </div>
                <button type="submit">Submit</button>
            </form>
            (name)?"Hello"+ {name}:"Please enter your Name"
        </>

    )
}


function App() {

    return <Greeting />
}

export default App