let input = document.querySelector("#inputId");
let addTaskBtn = document.querySelector("#btn");
let mainBox = document.querySelector("#mainBox");


addTaskBtn.addEventListener("click", () => {
    console.log(input.value);
    if ((input.value) != "") {
        createTaskContainer(input.value);
    }
});






function createTaskContainer(input) {
     let c = document.createElement("div");
    c.innerHTML = "<p></p> <button class=removeButton>Remove</button><button class=doneButton>Done</button>";
    
    c.children[0].innerText = input;
    c.classList.add("work");
    AddDoneBtn(c.children[2],c);
    mainBox.append(c);
    clearInputBox();
    //input.value = "";
    removeTask(c);
    
}

function AddDoneBtn(btn,c) {
     btn.addEventListener("click" , () => {
        btn.style.backgroundColor="#90ee90";
        btn.style.color="black";
        c.style.borderColor="#90ee90";
        
     })
}

 function clearInputBox() {
     input.value = "";
 };

//  function removeTask() {

//     let m=document.querySelectorAll(".work");
//     index=4;
//     // m.forEach((index) => {
//     m[index].children[1].addEventListener("click" , ()=> {
//     console.log("how are you");
//     m[index].style.display="none";
// });
// // });
//  };

 function removeTask(c) {
    let e=c.querySelector(".removeButton");
    e.addEventListener('click', () => {
        // c.remove();
        c.style.display="none";
    });
}












