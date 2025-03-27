
let boxes=document.querySelectorAll(".box");

let myScore=document.querySelector("#myScore");
let computerScore=document.querySelector("#computerScore");

let  yourChoiceDisplay=document.querySelector("#yourChoiceDisplay");
let  computerChoiceDisplay=document.querySelector("#computerChoiceDisplay")

let winComputer=0;
let winUser=0;

// let turns=prompt("No. of turns");
// console.log(turns);  



// boxes[0].addEventListener( "click" , () => 
// {
//     console.log("how are you");
// });



 boxes.forEach((box)=> {
    
     box.addEventListener("click",()=> {
        // console.log(box.getAttribute("ID"));
         let userChoice = box.getAttribute("ID");
         let comchoice=computerChoice();
         console.log( "user choice : " +userChoice);
         console.log("computer choice : "+  comchoice);
         yourChoiceDisplay.innerText = userChoice.toUpperCase(userChoice);
         computerChoiceDisplay.innerText = comchoice.toUpperCase(comchoice);

         compare(userChoice,comchoice);
     });
 });

  function computerChoice () {
    let arr=["rock","paper","scissor"];
    let k=Math.floor(Math.random()*3);
    // console.log(arr[k]);
    return arr[k];
 }

 function compare(userChoice,comchoice) {
    if (userChoice === comchoice)
    {
        console.log("draw");
    }
    else  { 
        if (userChoice === "rock") {
         if(comchoice === "paper") {
            winComputer++;
         }
         if (comchoice === "scissor") {
            winUser++;
         }
    }
        else if (userChoice === "paper") {
            if(comchoice == "rock") {
             winUser++;
             }
             if (comchoice === "scissor") {
              winComputer++;
             }
        }
        else  {
            if(comchoice === "paper") {
               winUser++;
            }
            if (comchoice === "rock") {
               winComputer++;
            }
        }
    }
    console.log( "user score : " + winUser);
    console.log("computer score : " + winComputer);
    displayWinner(winUser,winComputer);

}

function displayWinner(winUser,winComputer) {
    myScore.innerText= winUser;
    computerScore.innerText= winComputer;
}

document.querySelector(".reset").addEventListener("click" , ()=>
    {
        console.log("reset clicked");
        winComputer=0;
         winUser=0;
    });
 




