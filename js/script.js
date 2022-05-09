
const listElement = document.querySelector('ul');
let deleteBtn;

document.querySelector("#add").addEventListener("click", function(e) {
    e.preventDefault();

    const todo = document.querySelector("#todo").value;
    console.log(todo.length);
    if(!todo){
        alert("Please write something.. Is a must 😎😉")
    }else {
        const divElement = document.createElement("div");
        const checkBtn = document.createElement("i");
        const listItem = document.createElement("li");
        deleteBtn = document.createElement("i");

        deleteBtn.setAttribute('class', 'fa fa-trash');
        deleteBtn.setAttribute('aria-hidden', 'true');
        checkBtn.setAttribute('class','fa fa-check-square-o hidden');
        checkBtn.setAttribute('aria-hidden', 'true');
        
        listItem.textContent = todo;

        listElement.append(divElement);
        divElement.append(checkBtn, listItem, deleteBtn);  
    }
    

})

listElement.addEventListener("click", function(e) {
    console.log(e);
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("done");
        e.target.previousSibling.classList.toggle("hidden");
    }
})

listElement.addEventListener("click", function(e) {
    console.log(e);
    if(e.target.className === "fa fa-trash"){
        e.target.parentElement.classList.add("hidden");
    }
})

