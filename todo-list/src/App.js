import { createRef } from 'react';
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
  const ref = createRef()
  const arr = [1, 2, 3]
  const handleClick = () => {
    let val = ref.current.value
    console.log(val)
  }
  return (
    <>
      <input type="text" ref={ref} />
      <button onClick={handleClick}>添加待办事项</button>
      {
        todoDefault.map((todoItem, i) => {
          return <li key={i}>
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
