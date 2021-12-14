import React from 'react';

function ToDo({ todo, toggleTask, removeTask, editTask }) {

    return (
        <div key={todo.id} className="item-todo">
            <div 
                className= {todo.complete ? "item-text strike" : "item-text"}
                onClick={() => toggleTask(todo.id)}
            >
                {todo.task}
            </div>
            <div className="item-icon" onClick={() => removeTask(todo.id)}>
                X
            </div>
            <div className="item-icon" onClick={() => editTask(todo.id, todo.task)}>
                ✂
            </div>
        </div>
    );
}

export default ToDo;