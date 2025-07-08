const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");

let lista = JSON.parse(localStorage.getItem("lista")) || [];

function saveList(){
    localStorage.setItem("lista",JSON.stringify(lista));
}
function crearTarea(text){
    const li = document.createElement("li");


    const p = document.createElement("p");
    p.textContent = text;


    const editInput = document.createElement("input");
    editInput.type = "text";
    editInput.className = "editarInput";
    editInput.value = text;
    editInput.style.display = "none";


    const square = document.createElement("button");
    square.className = "square";
    square.addEventListener("click", (e) =>{
        p.classList.toggle("completed");
        square.style.background = p.classList.contains("completed") ? "gray" : "";
    })
        

    const editar = document.createElement("button");
    editar.className = "editar";
    editar.textContent = "✏️";
    editar.addEventListener("click", () =>{
        p.style.display = "none";
        editar.style.display = "none";
        editInput.style.display = "inline";
        saveBtn.style.display = "inline";
    });


    const saveBtn = document.createElement("button");
    saveBtn.textContent = "💾";
    saveBtn.className = "editarBtn";
    saveBtn.style.display = "none";
    saveBtn.addEventListener("click", ()=>{
        p.textContent = editInput.value;
        p.style.display = "inline";
        editInput.style.display = "none";
        saveBtn.style.display = "none";
        editar.style.display = "inline";
    })


    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "X";
    btnEliminar.className = "btn-delete";
    btnEliminar.addEventListener("click", () => {
        li.remove();
        lista = lista.filter(t => t.text !== text);
        saveList();
        if (ul.children.length === 0) {
        empty.style.display = "block";
        }
    });


    li.append(square, p, editInput, editar, saveBtn, btnEliminar);
    ul.appendChild(li);
    empty.style.display = "none";
}

function displayLista(){
    lista.forEach(t => crearTarea(t.text));
}

addBtn.addEventListener("click",(e) =>{
    e.preventDefault();
    const text = input.value;
    if (text){
        lista.push({text});
        saveList();
        crearTarea(text);
        input.value = "";
    }
});

displayLista();
