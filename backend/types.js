const z = require("zod");

const createToDo = z.object({
    title:z.string().min(1),
    description:z.string().min(1)
});

const updateToDo = z.object({
    id:z.string()
});

module.exports = {
    createToDo:createToDo,
    updateToDo:updateToDo
}