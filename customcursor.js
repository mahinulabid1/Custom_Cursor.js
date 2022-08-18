// a wide variety of mouse corsor
const cursorCollection = (() => {
    const cursor = {
        c1: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.5951 24.7034L28.6709 24.7255L22.5951 24.7034Z" fill="#FFDA44"/>
        <path d="M5.25342 38.5006L13.0303 29.1635L18.0834 40L22.8658 37.7699L5.25342 0V38.5006Z" fill="#FFDA44"/>
        <path d="M34.7467 24.7478L5.25342 0L34.7467 24.7478Z" fill="#FFDA44"/>
        <path d="M28.6709 24.7256L34.7467 24.7478L5.25342 0L22.8658 37.7699L27.6482 35.5399L22.5951 24.7033L28.6709 24.7256Z" fill="#FFCD00"/>
        </svg>
        `,

        c2: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.52377 0L36.1519 25.7444L16.2731 24.48L3.84814 40L5.52377 0Z" fill="#E21B1B"/>
        </svg>
        `,

        c3: `<svg width="34" height="40" viewBox="0 0 34 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.66627 2.59313L29.4375 24.2556L13.3525 23.2325L12.7038 23.1912L12.2975 23.6987L2.25689 36.2406L3.66627 2.59313ZM2.52377 0L0.848145 40L13.2731 24.48L33.1519 25.7444L2.52377 0Z" fill="#E81241"/>
        </svg>
        `,

        c4: `<svg width="57" height="58" viewBox="0 0 57 58" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_21_541)">
        <path d="M12.9069 15.3735L27.6392 57.4565L32.7343 34.5572L55.453 28.7095L12.9069 15.3735Z" fill="#00000A"/>
        <g opacity="0.4">
        <path d="M13.9609 15.3286L28.6932 57.4117L33.7882 34.5124L25.3056 26.3051L13.9609 15.3286Z" fill="white"/>
        </g>
        </g>
        <defs>
        <clipPath id="clip0_21_541">
        <rect width="40" height="40" fill="white" transform="translate(0 29.65) rotate(-45.9452)"/>
        </clipPath>
        </defs>
        </svg>
        `,

        c5: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.52377 0L36.1519 25.7444L16.2731 24.48L3.84814 40L5.52377 0ZM23.0788 20.505L9.54564 9.13L8.80627 26.7675L14.2681 19.945L23.0788 20.505Z" fill="#E21B1B"/>
        </svg>
        `,

        c6: `<svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_21_612)">
        <path d="M40.5065 17.4271L1.72198 2.95018L18.7434 40.7606L22.7883 26.5509L33.7787 36.8016C34.455 37.4325 35.4762 37.3969 36.107 36.7206L37.7629 34.9452C38.3937 34.2689 38.3582 33.2476 37.6818 32.6168L26.7337 22.4055L40.5065 17.4271Z" fill="#80D440"/>
        <path d="M41.3235 17.3987C41.3235 17.3987 41.3249 17.4395 41.3235 17.3987C41.3363 17.7663 41.1012 18.0608 40.7787 18.1947L28.2579 22.7205L38.2338 32.025C38.7411 32.4981 39.0075 33.1023 39.0302 33.7559C39.053 34.4095 38.8292 35.0307 38.3561 35.538L36.6988 37.2725C36.2257 37.7797 35.6215 38.0462 34.9679 38.0689C34.3144 38.0917 33.6931 37.8679 33.1859 37.3948L23.1677 28.0509L19.5281 40.9787C19.4169 41.3097 19.1395 41.5648 18.8127 41.5761C18.4859 41.5875 18.152 41.3946 18.0195 41.113L0.998081 3.30253C0.865579 3.02086 0.934474 2.65038 1.13018 2.39818C1.32589 2.14597 1.6921 2.09233 2.02316 2.20349L40.8077 16.6804C41.0979 16.793 41.3121 17.0719 41.3235 17.3987ZM25.9167 22.4339C25.9139 22.3522 25.9125 22.3114 25.9505 22.2282C26.0222 21.9395 26.2193 21.7281 26.4616 21.6379L38.1345 17.4279L3.28599 4.40891L18.5792 38.3942L22.0036 26.3328C22.0753 26.044 22.3133 25.8312 22.557 25.7818C22.8401 25.6902 23.1289 25.7619 23.3402 25.9591L34.3306 36.2098C34.4997 36.3675 34.7068 36.4421 34.911 36.435C35.1153 36.4279 35.3167 36.3391 35.4744 36.17L37.1303 34.3946C37.4457 34.0564 37.4272 33.5254 37.089 33.21L26.1409 22.9987C26.0127 22.8396 25.9239 22.6382 25.9167 22.4339Z" fill="#6EA62A"/>
        <path d="M38.0585 17.5942L2.99297 4.21466L28.3545 20.7949L38.0585 17.5942Z" fill="#67CB1B"/>
        </g>
        <defs>
        <clipPath id="clip0_21_612">
        <rect width="40" height="40" fill="white" transform="translate(2.22729 42.1537) rotate(-91.9943)"/>
        </clipPath>
        </defs>
        </svg>`,

        c7: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_21_653)">
        <path d="M0.390837 1.8356C0.388635 1.83798 0.386262 1.8399 0.38406 1.84228C0.381857 1.84465 0.380119 1.84716 0.378069 1.84953C-0.201866 2.4802 -0.350076 3.35851 -0.00782886 4.144L14.9092 38.3821C15.3034 39.2872 16.2243 39.7909 17.2003 39.6358C18.1764 39.4803 18.8961 38.7157 18.991 37.7327L20.6425 20.6541C20.6457 20.6221 20.67 20.5957 20.7019 20.5901L37.6195 17.6429C38.5931 17.4733 39.3016 16.6981 39.3821 15.7138C39.3895 15.6239 39.3913 15.535 39.3879 15.4472C39.3549 14.5738 38.8044 13.8212 37.9564 13.5269L2.65095 1.2761C1.84113 0.995168 0.976071 1.20969 0.390837 1.8356ZM16.938 37.536C16.9343 37.5743 16.9327 37.5915 16.8777 37.6003C16.8227 37.609 16.8157 37.593 16.8005 37.558L2.84398 5.52451L18.6437 20.1496C18.6187 20.2499 16.938 37.536 16.938 37.536ZM37.2782 15.4739C37.3143 15.4864 37.3309 15.4914 37.3262 15.5476C37.3217 15.603 37.3045 15.606 37.2667 15.6125C37.2667 15.6125 20.1443 18.6046 20.0461 18.6372L4.24642 4.01212L37.2782 15.4739Z" fill="url(#paint0_linear_21_653)"/>
        </g>
        <defs>
        <linearGradient id="paint0_linear_21_653" x1="0.468883" y1="20.7534" x2="39.5326" y2="19.2778" gradientUnits="userSpaceOnUse">
        <stop stop-color="#FFDA44"/>
        <stop offset="1" stop-color="#00FFCA"/>
        </linearGradient>
        <clipPath id="clip0_21_653">
        <rect width="40" height="40" fill="white"/>
        </clipPath>
        </defs>
        </svg>
        `,
        c8 : `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.0005 40C14.3129 40 8.8767 37.5666 5.08543 33.3235C1.80644 29.6562 0.000488281 24.9245 0.000488281 20.0001C0.000488281 8.97201 8.9725 0 20.0005 0C24.9244 0 29.6564 1.80595 33.3252 5.08504C37.5669 8.87817 39.9995 14.3143 39.9995 20.0001C39.9995 31.0281 31.0281 40 20.0005 40Z" fill="#FFBE00"/>
        <path d="M36.9655 19.9997C36.9655 21.769 36.6945 23.4758 36.1914 25.0786L36.1894 25.0835C34.5338 30.3647 30.3652 34.5345 25.0847 36.1912C23.9994 36.5308 22.8671 36.7657 21.7008 36.881C21.141 36.938 20.5745 36.9664 20.0001 36.9664C14.9712 36.9664 10.4531 34.7782 7.34708 31.3023C7.32164 31.2739 7.2961 31.2447 7.26977 31.2163C4.63253 28.2256 3.03345 24.2996 3.03345 19.9997C3.03345 10.63 10.6292 3.03339 20 3.03339C24.3008 3.03339 28.2267 4.63335 31.2172 7.26961C31.2456 7.29603 31.2751 7.32148 31.3034 7.34702C34.7782 10.4549 36.9655 14.9709 36.9655 19.9997Z" fill="#F4502A"/>
        <path d="M7.51348 31.4857C7.51749 31.49 7.52111 31.4939 7.52512 31.4983C7.52121 31.4941 7.51729 31.4898 7.51348 31.4857ZM7.29858 31.2477C7.36885 31.3268 7.44009 31.4058 7.51172 31.4836C7.45643 31.4235 7.40163 31.3631 7.34722 31.3022C7.33107 31.2843 7.31493 31.266 7.29858 31.2477Z" fill="#C29100"/>
        <path d="M20.0004 3.03345C10.6296 3.03345 3.03394 10.6292 3.03394 19.9989C3.03394 24.3147 4.64437 28.2536 7.29835 31.2477C7.31469 31.2659 7.33083 31.2843 7.34698 31.3022C7.40139 31.363 7.45619 31.4235 7.51148 31.4836C7.51206 31.4843 7.51265 31.4849 7.51324 31.4855C7.51706 31.4897 7.52097 31.494 7.52488 31.4982C8.00184 32.0152 8.51079 32.5028 9.04812 32.9573C6.55003 30.0019 5.04401 26.1816 5.04401 22.009C5.04401 12.6393 12.6396 5.04353 22.0104 5.04353C26.182 5.04353 30.0034 6.54974 32.9577 9.04793C29.8468 5.36949 25.1966 3.03345 20.0004 3.03345Z" fill="#BA3D20"/>
        <path d="M20.161 31.2674L11.7695 11.7697L31.2672 20.1611L23.5785 23.5785L20.161 31.2674Z" fill="white"/>
        <path d="M11.7695 11.7697L20.161 31.2674L23.5785 23.5785L11.7695 11.7697Z" fill="#C2C2C2"/>
        </svg>
        
        `,
        c9: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_21_672)">
        <path d="M13.0896 37.01L13.6589 8.76447L35.1398 27.1141L22.139 27.66L13.0896 37.01Z" fill="#FEE187"/>
        <path d="M35.8633 26.267L14.3825 7.91731C14.0552 7.6377 13.5958 7.57161 13.2028 7.74802C12.81 7.92434 12.5538 8.31137 12.5451 8.74192L11.9758 36.9874C11.9666 37.4453 12.2385 37.8623 12.6613 38.0383C12.7999 38.096 12.9451 38.124 13.0893 38.124C13.3853 38.124 13.676 38.0059 13.8901 37.7846L19.966 31.5069L23.4823 39.3418C23.6677 39.755 24.0739 40 24.4993 40C24.6517 40 24.8067 39.9684 24.9547 39.9021L29.4133 37.9012C29.6829 37.7801 29.8933 37.557 29.9984 37.281C30.1034 37.0048 30.0945 36.6983 29.9735 36.4287L27.7089 31.3827C27.4569 30.8214 26.7978 30.5705 26.2364 30.8225C25.6751 31.0745 25.4241 31.7337 25.6762 32.295L27.4847 36.3247L25.0588 37.4134L21.6345 29.7832L22.6301 28.7545L35.1863 28.2274C35.6438 28.2082 36.0431 27.9109 36.1926 27.478C36.3422 27.0448 36.2115 26.5645 35.8633 26.267ZM22.8464 26.5152L19.3113 18.6382C19.0593 18.0767 18.4003 17.8262 17.8388 18.078C17.2775 18.33 17.0266 18.9892 17.2786 19.5505L20.8138 27.4275L14.2607 34.1982L14.7254 11.1404L32.2608 26.1199L22.8464 26.5152Z" fill="#FFC61B"/>
        </g>
        <defs>
        <clipPath id="clip0_21_672">
        <rect width="40" height="40" fill="white"/>
        </clipPath>
        </defs>
        </svg>`,

    }


    return cursor;
})();
// ==========================================================================================================================




//creating an element
((CursorCollection) => {

    const showCursor = (className, cursorElement)=>{
        if(className.contains("cursor1") == true){
            cursorElement.innerHTML = CursorCollection.c1;
        }else if(className.contains("cursor2") == true){
            cursorElement.innerHTML = CursorCollection.c2;
        }else if(className.contains("cursor3") == true){
            cursorElement.innerHTML = CursorCollection.c3;
        }else if(className.contains("cursor4") == true){
            cursorElement.innerHTML = CursorCollection.c4;
        }else if(className.contains("cursor5") == true){
            cursorElement.innerHTML = CursorCollection.c5;
        }else if(className.contains("cursor6") == true){
            cursorElement.innerHTML = CursorCollection.c6;
        }else if(className.contains("cursor7") == true){
            cursorElement.innerHTML = CursorCollection.c7;
        }
        else{
            console.error("found none!");
        }
    }

    let cmd_element = document.querySelector(".create_cursor");
    

    const cursor = document.createElement("div");
    cursor.classList.add("cursor");
    // cursor.setAttribute("src", "../Cursor/c-1.png");
    // cursor.innerHTML = CursorCollection.c9;
    switch(cmd_element){
        case null:
            console.error("Error: Found No div with 'cursor' class");
            break;
        default: 
            console.log("found the class");
            const elementList= cmd_element.classList;
            showCursor(elementList, cursor);
    }
    document.body.appendChild(cursor);
})(cursorCollection);
const select_cursor = document.querySelector(".cursor");
// ===========================================================================================================================





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


