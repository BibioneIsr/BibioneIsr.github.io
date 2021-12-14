import React, { useState, useEffect } from "react";

function ToDoForm({ addTask, value = "", buttonText = "Add" }) {
    const [userInput, setUserInput] = useState(value);

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput("")
    }

    const handleKeyPress = (e) => {
        if(e.key === "Enter") {
            handleSubmit(e)
        }
    }
    useEffect(() => {
        setUserInput(value);
    }, [value])

    return (
        <form onSubmit={handleSubmit}>
            <input 
                value={userInput} 
                type="text" 
                name="text"
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                placeholder="Title" 
            />
            <button>{buttonText}</button>
        </form>
    );
}

export default ToDoForm;