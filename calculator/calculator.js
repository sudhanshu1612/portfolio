let container=document.querySelector(".container");
let input=document.querySelector("#text");
let button=document.querySelector("button");

let s=" ";



container.addEventListener("click" , (e) =>
{
    if (e.target.innerText === "=") {
        try {
            // Assuming s is the calculation string and input is the input element
            let ans = eval(s); // Still not recommended, see better alternatives below
            if (ans !== undefined) {
                input.value = String(ans); // Ensure string output
             } 
             else {
                 input.value = "0";
                 s = ""; // Empty string instead of space
             }
            
        }
        catch (error) {
            input.value = "Error";
            s = "";
        }
        // finally{
        //     input.value = "Error";
        //     s = "";
        // }
    }
    // if (e.target.innerText === "=") {
    //     let ans=eval(s);
    //     if (ans != undefined)
    //     {
    //         input.value=ans;
    //     }
    //     else{
    //         input.value="0";
    //         s=" ";
    //     }
    // }
    else if (e.target.innerText === "C")
    {
        input.value=0;
        s=" ";
    }
    else if (e.target.innerText === container.innerText)
    {
        e.target.style.PointerEvents="none";
    }
    else
    {
     console.log(e.target.innerText);
      s=s+e.target.innerText;
     input.value=s;
    }
});
