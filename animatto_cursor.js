//creating an element
(() => {
    const defaultCursorPath = "https://onavyint.sirv.com/customcursor%2Cjs/Cursordefault/";
    const pointerCursorPath= "https://onavyint.sirv.com/customcursor%2Cjs/CursorPointer/";
    const anyPointerElement = document.querySelectorAll('.onHover'); //check any hover elements exist

    const cursor = document.createElement("img");
    cursor.classList.add("cursor");

    const Cur_Defaut_Arr = ["cursor1", "cursor2", "cursor3", "cursor4", "cursor5", "cursor6", "cursor7", "cursor8", "cursor9", "cursor10", "cursor11"];
    const Cur_Pointer_arr = ['pointer1', 'pointer2', 'pointer3', 'pointer4'];

    let cmd_element = document.querySelector(".create_cursor");



    const CursorDecider=(ArElement)=>{
        for(let i = 0; i < ArElement.length; i++){
            let classString = ArElement[i];
            let checkCursorClass =cmd_element.classList.contains(classString);
            if(checkCursorClass == true){
                return classString;
            }
        }
        return ArElement[0]; //if no class is available then return first element
    }



    const DefaultCursor = `${defaultCursorPath}${CursorDecider(Cur_Defaut_Arr)}.png`;
    const PointerCursor =  `${pointerCursorPath}${CursorDecider(Cur_Pointer_arr)}.png`;

    // initial cursor loading
    cursor.setAttribute("src", `${DefaultCursor}`);

    if(anyPointerElement != null || anyPointerElement != undefined){
        for(let i  = 0; i < anyPointerElement.length; i++){
            let pointerEl = anyPointerElement[i];
            console.log(pointerEl);
            pointerEl.addEventListener("mouseenter", ()=>{
                console.log("mouse entered");
                cursor.setAttribute("src", `${PointerCursor}`);
            });
            pointerEl.addEventListener("mouseleave", ()=>{
                cursor.setAttribute("src", `${DefaultCursor}`);
            });
        }
    }


    document.body.appendChild(cursor);
})();
const select_cursor = document.querySelector(".cursor");
// ===========================================================================================================================

// SOME CSS STUFF
(()=>{
    const Cursor = document.querySelector(".cursor");
    Cursor.style.height =  "30px";
    Cursor.style.width =  "30px";
    Cursor.style.position =  "absolute";
    Cursor.style.zIndex =  "300";
    Cursor.style.pointerEvents =  "none";


    let AllSelectorInit = document.querySelectorAll("*");
    for(let i = 0; i < AllSelectorInit.length; i++){
        let AllSelector = AllSelectorInit[i];
        AllSelector.style.cursor = "none";
    }
})();



// cursor movement handler
(() => {
    let cursorState = {
        cursor_X_coordination: "",
        cursor_Y_coordination: ""
    }

    document.body.addEventListener("mousemove", (event) => {
        let cursor_Y_position = window.pageYOffset + event.clientY;
        select_cursor.style.top = `${cursor_Y_position}px`;
        select_cursor.style.left = `${event.clientX}px`;
        cursorState.cursor_X_coordination = event.clientX;
        cursorState.cursor_Y_coordination = event.clientY;
    });

    window.addEventListener("scroll", () => {
        let howMuchScrolled = window.pageYOffset;
        let both = howMuchScrolled + cursorState.cursor_Y_coordination;
        select_cursor.style.top = `${both}px`;
    });
})();
// =============================================================================================================================





// cursor display handler
(() => {
    document.body.addEventListener("mouseenter", () => {
        select_cursor.style.display = "block";

    });
    document.body.addEventListener("mouseleave", () => {
        select_cursor.style.display = "none";
    });
})();
// =============================================================================================================================


