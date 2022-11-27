(():void =>{
    const defaultCursorPath:string = "https://onavyint.sirv.com/customcursor%2Cjs/Cursordefault/";
    const pointerCursorPath:string= "https://onavyint.sirv.com/customcursor%2Cjs/CursorPointer/";
    const textPointerCursorPath:string = "https://onavyint.sirv.com/customcursor%2Cjs/TextPointer/";
    const anyPointerElement:unknown = document.querySelectorAll('.onHoverPointer'); //check any hover elements exist
    const anyTextElement :unknown = document.querySelectorAll('.onHoverSelect'); //check any hover elements exist 

    const cursor = document.createElement("img");
    cursor.classList.add("cursor");

    const Cur_Defaut_Arr:string[] = ["cursor1", "cursor2", "cursor3", "cursor4", "cursor5", "cursor6", "cursor7", "cursor8", "cursor9", "cursor10", "cursor11"];
    const Cur_Pointer_arr:string[] = ['pointer1', 'pointer2', 'pointer3', 'pointer4'];
    const Cur_text_Pointer_arr:string[]  = ['textpointer1', 'textpointer2', 'textpointer3', 'textpointer4', 'textpointer5'];

    let cmd_element:any = document.querySelector(".create_cursor");

    const CursorDecider=(ArElement:any):string=>{
        for(let i = 0; i < ArElement.length; i++){
            let classString:string = ArElement[i];
            let checkCursorClass:any =cmd_element.classList.contains(classString);
            if(checkCursorClass == true){
                return classString;
            }
        }
        return ArElement[0]; //if no class is available then return first element
    }

    const DefaultCursor = `${defaultCursorPath}${CursorDecider(Cur_Defaut_Arr)}.png`;
    const PointerCursor =  `${pointerCursorPath}${CursorDecider(Cur_Pointer_arr)}.png`;
    const TextPoniter =  `${textPointerCursorPath}${CursorDecider(Cur_text_Pointer_arr)}.png`;

    // initial cursor loading
    cursor.setAttribute("src", `${DefaultCursor}`);

    // event based cursor loading
    let EventCursorLoad = (selectorElement:any, changeCursor:any) =>{
        if(selectorElement != null || selectorElement != undefined){
            for(let i  = 0; i < selectorElement.length; i++){
                let pointerEl = selectorElement[i];
                console.log(pointerEl);
                pointerEl.addEventListener("mouseenter", ()=>{
                    console.log("mouse entered");
                    cursor.setAttribute("src", `${changeCursor}`);
                });
                pointerEl.addEventListener("mouseleave", ()=>{
                    cursor.setAttribute("src", `${DefaultCursor}`);
                });
            }
        }
    }

    EventCursorLoad(anyPointerElement, PointerCursor);
    EventCursorLoad(anyTextElement, TextPoniter);
    document.body.appendChild(cursor);
})();

const select_cursor:any = document.querySelector(".cursor");

// ===========================================================================================================================


// STYLES
(()=>{
    const Cursor:any = document.querySelector(".cursor");
    Cursor.style.height =  "30px";
    Cursor.style.width =  "30px";
    Cursor.style.position =  "absolute";
    Cursor.style.zIndex =  "300";
    Cursor.style.pointerEvents =  "none";


    /* OMITTED SOME CODE IN RECENT UDPATE; TRANSFERED THE CSS CHANGE IN NEW CSS FILES */
    // let AllSelectorInit:any = document.querySelectorAll("*");
    // for(let i = 0; i < AllSelectorInit.length; i++){
    //     let AllSelector = AllSelectorInit[i];
    //     AllSelector.style.cursor = "none";
    // }
})();


// cursor movement handler
(() => {
    let cursorState:{cursor_X_coordination:number, cursor_Y_coordination:number} = {
        cursor_X_coordination: 0,
        cursor_Y_coordination: 0
    }

    document.body.addEventListener("mousemove", (event) => {
        let cursor_Y_position:any = window.pageYOffset + event.clientY;
        select_cursor.style.top = `${cursor_Y_position}px`;
        select_cursor.style.left = `${event.clientX}px`;
        cursorState.cursor_X_coordination = event.clientX;
        cursorState.cursor_Y_coordination = event.clientY;
    });

    window.addEventListener("scroll", () => {
        let howMuchScrolled:number = window.pageYOffset;
        let both:number = howMuchScrolled + cursorState.cursor_Y_coordination;
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



