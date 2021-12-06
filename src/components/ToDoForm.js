import React, { useState } from "react";

function ToDoForm({ addTask }) {
    const [userInput, setUserInput] = useState("");

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
            <button>Add</button>
        </form>
    );
}

export default ToDoForm;