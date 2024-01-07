import { useState , useEffect} from "react"
import CreateTodo from "./components/CreateTodo"
import Todos from "./components/Todos"
import { BrowserRouter as Router , Route, Routes} from "react-router-dom";

function App() {
  const [todos,setTodos] = useState([]);

  function getTodos(){
    fetch("http://localhost:3000/todos")
    .then(async function(res) {
      const json = await res.json();
      setTodos(json.todos);
    })
  }
   
useEffect(() => {
  setInterval(getTodos,3000);
  
  
}, [])

  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<CreateTodo></CreateTodo>} />
          <Route path="/todos" element={<Todos todos={todos}></Todos>} ></Route>
        </Routes>
      </Router>
      
      
    </>
  )
}

export default App
