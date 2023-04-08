const fs = require("fs");
const jsonFileName = "./2-todo/database.json"
let cantTodos = getCurrentToDos(jsonFileName).length

function Todo(text){
    // Class todo object
    this.id = cantTodos
    this.text = text
    this.date = new Date()
    this.done = false
}

function getCurrentToDos(filename){
    // Get current todo json array from file
    const contenidoString = fs.readFileSync(filename, "utf-8");
    contenido = JSON.parse(contenidoString)
    return contenido
}

function createFile(filename){
    // Create a file
    fs.writeFile(filename, "f", err => {
        if (err){ 
        console.log("Error")}})
}

// createFile(".\\2-todo\\database.json")

function addArrayToJsonFile(filename, arr){
    // Add a json array to a json file
    jsonString = JSON.stringify(arr);
    fs.writeFileSync(filename, jsonString);
}

function deleteTodo(id){
    // Delete a todo object from the file by id
    todos = getCurrentToDos(jsonFileName);
    if (id < todos.length){
        todos.splice(id, 1);
    }
    else{
        console.log("error")
    }
}

function newTodo(text){
    // Create a new todo object and add it to the file
    toAdd = new Todo(text);
    currentContent = getCurrentToDos(jsonFileName)
    currentContent.push(toAdd);
    addArrayToJsonFile(jsonFileName, currentContent)
}

function stringDateToDateFachera(date){
    // From a date string extract just the date
    full = date.slice(0, date.indexOf("T"))
    return full;
}


function showTodos(){
    // Show a list with all todo elements
    todos = getCurrentToDos(jsonFileName);
    for (let i = 0; i < todos.length; i++){
        todos[i].id = i;
        if (todos[i].done){
            isDone = "[x]";
        }
        else{
            isDone = "[ ]";
        }
        fecha = stringDateToDateFachera(todos[i].date);
        console.log(`${i+1} - ${isDone} - ${todos[i].text} - Fecha: ${fecha}`);
    }
    addArrayToJsonFile(jsonFileName, todos);
}

function changeState(id){
    // Change between done and not done of a todo using its id
    todos = getCurrentToDos(jsonFileName);
    index = todos.findIndex(el => el.id === id);
    state = todos[index].done;
    if (state){
        todos[index].done = false}
    else{
        todos[index].done = true}
    addArrayToJsonFile(jsonFileName, todos)
}

function uiHandling(){
    // Needs implementation
}