import React, {useState} from 'react'

function App() {

  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const addToDo = (todo) => {
    const newToDo = {
      id: Math.random(),
      todo: todo
    };

    //To add the ToDo to the list
    setList([...list, newToDo])

    //To clear the Input box
    setInput("");
  }

  //To now remove items from the list
  const deleteToDo = (id) => {
    const newList = list.filter((todo) => todo.id !== id);

    setList(newList);
  }

  return (
    <div style={{
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)'
}}>
 
      <h1>To Do List</h1>
      <input 
      type="text" 
      value={input} 
      onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => addToDo(input)}>Add</button>
      <ul>
        {list.map((todo) => (
          <li key={todo.id}>
            {todo.todo}
            <button onClick={() => deleteToDo(todo.id)}>&times;</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
