const cursor = document.createElement("img");
let cursor_X_direction = "";
let cursor_Y_direction = "";
let eventx = "";
cursor.classList.add("cursor");
cursor.setAttribute("src", "../Cursor/c-1.png");
document.body.appendChild(cursor);
let select_cursor = document.querySelector(".cursor");
// get initial mouse location

document.body.addEventListener("mousemove", (event) => {
    let howMuchScrolled = window.pageYOffset;
    eventx = event;
    let mouseCoorDination = event.clientY;
    let both = howMuchScrolled + mouseCoorDination;
    select_cursor.style.top = `${both}px`;  
    select_cursor.style.left = `${event.clientX}px`;
    cursor_X_direction = event.clientX;
    cursor_Y_direction = event.clientY;
});

window.addEventListener("scroll", () => {
    let howMuchScrolled = window.pageYOffset;
    let both = howMuchScrolled + eventx.clientY;
    select_cursor.style.top = `${both}px`;  
})



