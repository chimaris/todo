// Selecting and assigning <ul> Element
const ulElement = document.querySelector('ul');

document.querySelector("#add").addEventListener("click", function(e) {
    e.preventDefault();
    const todo = document.querySelector("#todo").value;
    if(!todo){
        // Alert if the user input nothing
        alert("Please write something.. Is a must 😎😉")
    }else {

        const html = `
            <div>
                <i class="fa fa-check-square-o hidden" aria-hidden="true"></i><li> ${todo} </li> <i class="fa fa-trash" aria-hidden="true"></i>
            </div>`
        ulElement.insertAdjacentHTML("afterbegin", html);

        //---- Instead of creating and appending element i just used template literal and insertAdjacentHtml method --// 
        
        // // Creating of <div>, <i> and <li> elements
        // const divElement = document.createElement("div");
        // const checkBtn = document.createElement("i");
        // const listItem = document.createElement("li");
        // const deleteBtn = document.createElement("i");

        // // Setting up attributes for checkBtn and deleteBtn icon
        // deleteBtn.setAttribute('class', 'fa fa-trash');
        // deleteBtn.setAttribute('aria-hidden', 'true');
        // checkBtn.setAttribute('class','fa fa-check-square-o hidden');
        // checkBtn.setAttribute('aria-hidden', 'true');
        
        // // Assigning user input to the <li> element
        // listItem.textContent = todo;

        // // Appending div element to ul and its child
        // ulElement.append(divElement);
        // divElement.append(checkBtn, listItem, deleteBtn);


        document.querySelector("#todo").value = ""; // resetting the text input
    }
})

// Updating the list if the user is done by click on each of the list
ulElement.addEventListener("click", function(e) {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("done");
        e.target.previousSibling.classList.toggle("hidden");
    }
})

// Deleting the list by clicking deleteBtn
ulElement.addEventListener("click", function(e) {
    console.log(e);
    if(e.target.className === "fa fa-trash"){
        e.target.parentElement.classList.add("hidden");
    }
})