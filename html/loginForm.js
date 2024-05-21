 let emailElement = document.getElementById("email");
let passwordElement = document.getElementById("password"); 
let buttonElemenent = document.getElementById("button");
let formElemenent = document.querySelector(".form");

formElemenent.addEventListener("submit",(Event)=>{
   let email = NAME(emailElement.value);
   let password = PASSWORD(passwordElement.value);
});



function NAME(input)
{
    if(input === "")
        {
            alert("please enter your email");
        }
}

function PASSWORD(input)
{
    if(input === "")
        {
            alert("please enter your password");
        }
}
