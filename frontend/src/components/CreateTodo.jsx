import { useState } from "react"
import { Link } from "react-router-dom";

const CreateTodo = () => {
  
  const [title,setTitle] = useState("");
  const [description,setDescription] = useState("");

  function createTodo(){
    console.log("ToDo Created  : "+title+" - "+description);
    fetch("http://localhost:3000/todo", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description
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
  return (
    <div>
        
            <input type="text" placeholder="Title" id="title" onChange={(e)=>setTitle(e.target.value)} style={{ padding: 10, margin: 10 }}/> <br/> 
            <input type="text" placeholder="Description" id="description" onChange={(e)=>setDescription(e.target.value)} style={{ padding: 10, margin: 10 }}/> <br/>
            <button onClick={createTodo} style={{ padding: 10, margin: 10 }}>Add ToDo</button>
            <Link to={"/todos"}><button style={{ padding: 10, margin: 10 }}>See Todos</button></Link>
        
    </div>
  )
}

export default CreateTodo