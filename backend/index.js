const { todo } = require( "./db");
const { createToDo,updateToDo } =  require("./types");
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.post("/todo",async (req,res)=>{
    const title = req.body.title;
    const description = req.body.description;

    const response = createToDo.safeParse({title,description});

    if(!response.success){
        res.status(411).json({msg:"You sent the wrong inputs"});
    }

    await todo.create({
        title:title,
        description:description,
        completed:false
    });

    res.json({
        msg:"ToDo Created Successfully"
    })

});

app.get("/todos",async (req,res)=>{
    const todos = await todo.find({});

    res.json({
        todos
    })
});

app.put("/completed",async (req,res)=>{
    const updatePayload = req.body;
    const parsedPayload = updateToDo.safeParse(updatePayload);

    if(!parsedPayload){
        res.status(411).json({msg:"You sent the wrong inputs"});
    }

    await todo.findOneAndUpdate({
        _id:req.body.id
    },{
        completed:true
    })

    res.json({
        msg: "Todo marked as completed"
    })

})

app.delete("/todos/:id",async(req,res)=>{
    const {id} = req.params;
    

    const result = await todo.deleteOne({_id:id})

    if (result.deletedCount > 0) {
        return res.status(200).json({ message: 'Todo deleted successfully' });
    } 
    else {
        return res.status(404).json({ message: 'Todo not found or already deleted' });
      }
})

app.delete("/deleteall",async(req,res)=>{

    const result = await todo.deleteMany({});

    if (result.deletedCount > 0) {
        return res.status(200).json({ message: 'All todos deleted successfully' });
    } 
    else {
        return res.status(404).json({ message: 'No todos found to delete' });
      }

})


app.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`);
})