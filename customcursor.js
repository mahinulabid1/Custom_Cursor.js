const cursor = document.createElement("img");
let cursor_X_direction = "";
let cursor_Y_direction = "";
cursor.classList.add("cursor");
cursor.setAttribute("src", "../Cursor/c-1.png");
document.body.appendChild(cursor);
let select_cursor = document.querySelector(".cursor");
// get initial mouse location

document.body.addEventListener("mousemove", (event) => {
    console.log("mouse entered");
    let howMuchScrolled = window.pageYOffset;
    let mouseCoorDination = event.clientY;
    let both = howMuchScrolled + mouseCoorDination;
    // select_cursor.style.top = `${both}px`;  
    // select_cursor.style.top = `${event.clientY}px`;
    // select_cursor.style.left = `${event.clientX}px`;
    cursor_X_direction = event.clientX;
    cursor_Y_direction = event.clientY;

    select_cursor.style.transform = `translate( ${event.clientX}px,${both}px)`;
    // select_cursor.style.left = `${event.clientX}px`;

});

document.body.addEventListener("scroll", (event) => {
    // console.log('scrolled');
    // console.log(event.target);
    // var event = new Event('mousemove',{clientX:150, clientY: 150});
    // let x =document.body.dispatchEvent(event);
    // console.log(x);
    let howMuchScrolled = window.pageYOffset;
    console.log(event.clientX);
    // let position_cursor = howMuchScrolled + cursor_Y_direction;
    // console.log(position_cursor);
    // var x = new Event('mousemove');

    // document.body.dispatchEvent(x);
})



// const cursorMovement=(theEvent)=>{
//     let howMuchScrolled = window.pageYOffset;
//     let mouseCoorDination = theEvent.clientY;//have to return event argument
//     let both = howMuchScrolled + mouseCoorDination;
//     // console.log(both);
//     select_cursor.style.top = `${both}px`;
//     select_cursor.style.left = `${theEvent.clientX}px`;
// }