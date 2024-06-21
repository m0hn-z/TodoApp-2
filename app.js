const inputBox = document.querySelector("#inputBox");
const listContainer = document.querySelector("#listContainer")

function addTask(){
    if(inputBox.value === ''){
        alert("Nothing Written !!")
        saveData();
    }
    else{
        let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7"
    li.appendChild(span);
    saveData();

    }
    inputBox.value = '';
    saveData();


}

listContainer.addEventListener("click", (e)=>{
    e.preventDefault()
    if(e.target.tagName === "LI"){
        e.target.classList = "checked";
        saveData();

    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();

    }
})

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();