import { createRef, useState } from 'react';
import './App.css';
// JSX 
const todoDefault = [
  {
    text: 'eat',
    done: false
  },
  {
    text: 'sleep',
    done: false
  }
]
function App() {
  const [todos, setTodos] = useState(todoDefault)   // [响应式数据，修改数据的方法]
  const ref = createRef()
  const arr = [1, 2, 3]
  const handleClick = () => {
    let val = ref.current.value
    // const newTodos = todos.concat({text: val, done: false})
    let newTodos = todos.slice(0)
    newTodos.unshift({text: val, done: false})
    setTodos(newTodos)
    ref.current.value = ""
    console.log(val)
  }
  const delItem = (i) => {
    let newTodos = todos.slice(0)
    newTodos.splice(i, 1)
    setTodos(newTodos)
  }
  return (
    <>
      <input type="text" ref={ref} />
      <button onClick={handleClick}>添加待办事项</button>
      {
        todos.map((todoItem, i) => {
          return <li key={i} onClick={() => {
            delItem(i)
          }}>
            {todoItem.text}
          </li>
        })
      }
      {/* Fragment */}
      { arr }
      { true ? 'true' : 'false'}
    </>
  );
}

export default App;
