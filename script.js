//user input for the number of squares
let num; 
let validInput = false;
while(true){
    const input = parseInt(prompt("Enter a number: "));
    if(isNaN(input)){
        alert("Enter a valid numebr");
    }else if(input > 100 || input < 1){
        alert("Enter a number between 1 and 100");
    }else{
        num = input;
        validInput = true;
    }
    
    if(validInput) break;
    else continue;
}
if(isNaN(num)){
    alert("Enter a valid number.");
}
else if(num > 100 || num < 1){
    alert("Number should be between 1 and 100");
}


//Creating the square divs.
const container_size = "680px";
const size = 680;
const container = document.querySelector(".container");
container.style.height = container_size;
container.style.width = container_size;

for(let i = 0; i < num*num; i++){
    const box = document.createElement("div");
    box.classList.add("box");
    container.appendChild(box);
    box.style.height = (size/num) + "px";
    box.style.width = (size/num) + "px";
}


//Hover Effect

const boxes =  document.querySelectorAll(".box");

boxes.forEach(box => {
    box.addEventListener("mouseenter", (event) => {
        event.target.style.backgroundColor = "green";
    });

    box.addEventListener("mouseleave", (event) => {
        event.target.style.backgroundColor = "red";
    })
});
