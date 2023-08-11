let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

window.addEventListener('scroll', () => {
    // parallax website text goes down
    let value = window.scrollY;
    text.style.marginTop = value* 1.5 + 'px';
    leaf.style.top = value* -1.5 +'px';
    leaf.style.left = value* 1.5 +'px';
    hill5.style.left = value* 1.5 +'px';
    hill4.style.left = value* -1.5 +'px';
    hill1.style.top = value* 1.9 +'px';


    
});


// ----------------------- CURSOR CODE--------------------------------------------------------
const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");
// for click adding event listener

window.addEventListener("mousemove", function (e) {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // cursorOutline.style.left = `${posX}px`;
    // cursorOutline.style.top = `${posY}px`;

//----- adding smooth animation to the cursor
    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, {duration: 500, fill:"forwards"});


});
//-----------------End---------------------------------------------------------------------

