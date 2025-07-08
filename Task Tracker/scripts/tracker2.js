const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const tasks = document.querySelector("ul");
const empty = document.querySelector(".empty");
const taskList = JSON.parse(localStorage.getItem("taskList")) || [];

function refresh(){
taskList.forEach(li => {
tasks.appendChild(li)
});
localStorage.setItem("taskList",JSON.stringify(taskList));
}

addBtn.addEventListener("click", (e) =>{
    e.preventDefault();
    const li = document.createElement("li");
    const p = document.createElement("p");
    const text = input.value;
    p.textContent = text;

    const editarBtn = editar();
    const completarBtn = completar();
    const eliminarBtn = eliminar();

    li.appendChild(completarBtn);
    li.appendChild(p);
    li.appendChild(editarBtn);
    li.appendChild(eliminarBtn);
    taskList.push(li);
    refresh();
})

function completar(){
    const button = document.createElement("button");
    button.className = "square";

    button.addEventListener("click", ()=>{
        const p = document.querySelector("p");
        p.className = "completed";
        button.style.background = "gray";
    })
    return button;
}

function eliminar(){
    const eliminarBtn = document.createElement("button");
    eliminarBtn.textContent = "X";
    eliminarBtn.className = "btn-delete";

    eliminarBtn.addEventListener("click", (e)=>{
        const item = e.target.parentElement;
        tasks.removeChild(item);
        const index = taskList.indexOf(item);
        taskList.slice(1,index);
    })
    return eliminarBtn;
}

function editar(){
    const editBtn = document.createElement("button");
    editBtn.textContent = "✏️";
    editBtn.addEventListener("click", ()=>{
        const inputNew = document.createElement("input");

    }
)
    return editBtn;
}
console.log(taskList);