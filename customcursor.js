const cursor = document.createElement("img");

cursor.classList.add("cursor");
cursor.setAttribute("src",  "../src/img/cursor.png");
document.body.appendChild(cursor);
let select_cursor = document.querySelector(".cursor");
// get initial mouse location

document.body.addEventListener("mousemove", (event)=>{
    console.log("mouse moved");
    // console.log(event.offsetX);
    // console.log(event.offsetY);
    let howMuchScrolled = window.pageYOffset;
    let mouseCoorDination = event.clientY;
    let both = howMuchScrolled + mouseCoorDination;
    select_cursor.style.top = `${both}px`;
    select_cursor.style.left = `${event.clientX}px`;
});



const cursorMovement=()=>{
    
}