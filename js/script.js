//get all required elements
// step one
const InputBox = document.querySelector(".inputField input")
const addBtn = document.querySelector (".inputField button")
const todolist = document.querySelector (".todoList")
const deleteAllBtn = document.querySelector (".footer button")

// Step two
// create an event listener -- onekeyup event

InputBox.onkeyup = ()=>{
     //gettng your users entered value
    let userEnteredvalue = InputBox.value;
    // add active class to the butoon
    if(userEnteredvalue.trim() != 0){
        //add active class to the button
        addBtn.classList.add("active");
            
    }
    
     else{
         //Remove the active class
         addBtn.classList.remove("active");
     }
}
//calling the showtask function
showTask();

// When user clicks on the plus icon button
 addBtn.onclick = ()=>{
    //Getting the input field value
    let userEnteredValue = InputBox.value;
    //Getting the local storge
    let getLocalStorageData =localStorage.getItem("New Todo");
    // If the localstorage had no data
    if(getLocalStorageData == null){
        listArray = [];
    }
    else{
        // Transform json string into a javascript object
        listArray = JSON.parse(getLocalStorageData);
    }

        listArray.push(userEnteredValue);
        localStorage.setItem("New Todo", JSON.stringify(listArray));
        showTask();
        // Remove the active class from the button once the task is added
        addBtn.classList.remove("active");
        console.log(listArray);
}

// Step 2 create a function to display the todo item

function showTask(){
    let getLocalStorageData = localStorage.getItem("New Todo");
    if(getLocalStorageData == null){
        listArray = [];
    }
    else{
        listArray = JSON.parse(getLocalStorageData);
    }
    const pendingTasksCount = document.querySelector(".pendingTasks");
    pendingTasksCount.textContent = listArray.length;
    //If the array 
}
const pendingTasksCount=document.querySelector(".pendingTasks");
//if the array lenght is greater than 0
if(listArray.length > 0){
    //class = "active"
    deleteAllBtn.classList.add("active");
}
else{
    deleteAllBtn.classList.add("active");
}
let newLiTag = "";
listArray.forEach((element,index) => {
 newLiTag += `<li>${element}<span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`;   
});
todolist.innerHTML = newLiTag;
InputBox.value = "";
//createe a delelte function
function deleteTask(index){
    let getLocalStorageData = localStorage.getItem("New Todo");
    listArray = JSON.parse(getLocalStorageData);
     // this deletes or removes the li
     listArray.splice(index,1);
     localStorage.setItem("New Todo",JSON.stringify(listArray));
     showTask();
 }
   deleteAllBtn.onclick = ()=>{
   let getLocalStorageData = localStorage.getItem("New Todo");
   listArray = JSON.parse(getLocalStorageData);
   listArray = [];
   localStorage.setItem("New Todo",JSON.stringify(listArray));
   showTask();
}
   // this will also work
// deleteAllBtn.onclick = function(){ 
//     listArray = [];
//     localStorage.setItem("New Todo", JSON.stringify(listArray));
//     showTask()
// }