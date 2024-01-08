import "./card.css";
/* eslint-disable react/prop-types */
const Todos = ({todos}) => { 
  function updateTodo(id){
    fetch("http://localhost:3000/completed", {
                method: "PUT",
                body: JSON.stringify({
                    id:id
                }),
                headers: {
                    "Content-type": "application/json"
                }
            })
                .then(async function(res) {
                    const json = await res.json();
                    alert(json.msg);
                })

  }
  function deleteTodo(id){
    fetch(`http://localhost:3000/todos/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-type": "application/json"
                }
            })
                .then(async function(res) {
                    const json = await res.json();
                    alert(json.message);
                })

  }
  
  return (
    <>
    <div>
        {todos.length? (todos.map(function(todo) {
            return <div key={todo._id}>
                <div className="card">
                    <div className="card-header">
                        <h2>{todo.title}</h2>
                    </div>
                    <div className="card-body" >
                        <h4>{todo.description}</h4>
                        <div style={{display:"flex"}}>
                        <button className="card-button" onClick={()=>{if(!todo.completed){updateTodo(todo._id)}}} style={{ padding: 5, margin: 2 }}>{todo.completed == true ? "Completed" : "Mark as Complete"}</button>
                        <button className="card-button" onClick={()=>{deleteTodo(todo._id)}} style={{ padding: 5, margin: 2 }}>Delete</button>
                        </div>
                        
                    </div>
                </div>
                  
            </div>
        })):(<h3 style={{ padding: 5, margin: 2 }}>No Todos Found</h3>)}
    </div>
    </>
  )
}

export default Todos