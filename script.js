const generateBtn = document.querySelector(".generate");
const container = document.querySelector(".container");

generateBtn.addEventListener("click", (event)=>{
    container.innerHTML = ""; 
    promptForInput();
});

//user input for the number of squares
function promptForInput(){
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
    else{
        createGrid(num);
    }
}


//Generate Random Colors

function getRandomColor(){
    let letters = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

//Creating the grid
function createGrid(num){
    //Creating the square divs.
    const size = 680;
    const container_size = `${size}px` 
    container.style.height = container_size;
    container.style.width = container_size;
    

    for(let i = 0; i < num*num; i++){
        const box = document.createElement("div");
        box.classList.add("box");
        container.appendChild(box);
        box.style.height = `${size/num}px`;
        box.style.width = `${size/num}px`;
        box.style.opacity = 1;
    }

    //Hover Effect
    const boxes =  document.querySelectorAll(".box");
    let color = getRandomColor();


    boxes.forEach(box => {
        box.addEventListener("mouseenter", (event) => {
            event.target.style.backgroundColor = "lightpink";
            let opacity =  parseFloat(event.target.style.opacity);
            if(opacity > 0){
                opacity -= .1;
                event.target.style.opacity = opacity;
            }
            console.log(opacity);  
            
        });

        box.addEventListener("mouseleave", (event) => {
            event.target.style.backgroundColor = color;
            // event.target.style.backgroundColor = getRandomColor();
        });
    });
}

const resetBtn = document.querySelector(".reset");
resetBtn.addEventListener(("click"), ()=>{
    container.innerHTML = "";
    container.style.width = 0;
    container.style.height = 0;
});


