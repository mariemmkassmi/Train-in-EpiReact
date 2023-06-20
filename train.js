// Basic Forms
// http://localhost:3000/isolated/exercise/06.js
// 🐨 add a submit event handler here (`handleSubmit`).
// 💰 Make sure to accept the `event` as an argument and call
// `event.preventDefault()` to prevent the default behavior of form submit
// events (which refreshes the page).
// 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
//
// 🐨 get the value from the username input (using whichever method
// you prefer from the options mentioned in the instructions)
// 💰 For example: event.target.elements[0].value
// 🐨 Call `onSubmitUsername` with the value of the input

// 🐨 add the onSubmit handler to the <form> below

// 🐨 make sure to associate the label to the input.
// to do so, set the value of 'htmlFor' prop of the label to the id of input
//   validation 
import React, { useState } from 'react'


function UsernameForm({ onSubmitUsername }) {
    const [errors, setErrors] = useState({});
    function Submit(e) {
        e.preventDefault()
        onSubmitUsername(e.target.element[0].value)
        const isLower = (
            (e.target === e.target.toLowerCase()) ? setErrors(null) : setErrors("change to lower case")
        )
    }

    return (
        <form>
            <div onSubmit={Submit}>
                <label>Username:</label>

                <input value='name' type="text" />

                <p className="text-danger">{errors}</p>

            </div>
            <button type="submit">Submit</button>
        </form>
    )
}


function App() {
    const onSubmitUsername = username => alert(`You entered: ${username}`)
    return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App