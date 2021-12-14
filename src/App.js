import { useState } from 'react';
import ToDo from './components/ToDo.js';
import ToDoForm from './components/ToDoForm.js';

function App() {
  const [todos, setTodos] = useState([])
  const oFormSetting = {
    add: {
      mode: "add",
      buttonText: "Add Task",
      value: ""
    },
    edit: {
      mode: "edit",
      buttonText: "Save Task",
      value: "",
      id: null
    }
  }
  const [mode, setMode] = useState(oFormSetting.add)

  const addTask = (userInput) => {
    if(!userInput) {
      return;
    }
    if(mode.mode === "edit") {
      setTodos(todos.map(item => {
        if(item.id === mode.id) {
          item.task = userInput;
        }
        return item;
      }));
      setMode(oFormSetting.add);
      return;
    }
    const newItem = {
      id: Math.random().toString(36).substr(2,9),
      task: userInput,
      complete: false
    }
    setTodos([...todos, newItem])
  }

  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
  }

  const editTask = (id, value) => {
    const newMode = oFormSetting.edit;
    newMode.id = id;
    newMode.value = value;
    setMode(newMode);
  }

  const handleToggle = (id) => {
    setTodos([
      ...todos.map((todo) => 
      todo.id === id ? {...todo, complete: !todo.complete} : {...todo}
      )
    ])
  }

  return (
    <div className="App">
      <header>
        <h1>My ToDo List</h1>
      </header>
      <ToDoForm
        addTask={addTask}
        buttonText={mode.buttonText}
        value={mode.value}
      />
      {todos.map((todo) => {
        return (
          <ToDo
            todo={todo}
            key={todo.id}
            toggleTask={handleToggle}
            removeTask={removeTask}
            editTask={editTask}
          />
        )
      })}
    </div>
  );
}

export default App;
