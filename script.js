var resizeButton1 = document.getElementById("resizeButton1");
var resizeButton2 = document.getElementById("resizeButton2");
let clickCount = 0;
let hoverCount = 0;
let flag = 0;

function run(){
    clickCount++;
    var height = resizeButton1.getBoundingClientRect().height;
    var width = resizeButton1.getBoundingClientRect().width;

    resizeButton1.style.height = (height + 50) + "px";
    resizeButton1.style.width = (width + 50) + "px";
}
function diKlik(){
    resizeButton2.addEventListener("click", run());
}

resizeButton2.addEventListener("mouseenter", function(){
    hoverCount++;
    var posLeft = resizeButton2.getBoundingClientRect().left;
    var posTop = resizeButton2.getBoundingClientRect().top;
    posTop = Math.floor(Math.random() * 300);
    posLeft = Math.floor(Math.random() * 800);
    resizeButton2.style.left = posLeft + "px";
    resizeButton2.style.top = posTop + "px";

    if(hoverCount > 10 && flag == 0){
        flag = 1;
        diKlik();
        alert("Bilang bagus dong");
    } else if(hoverCount > 15 && flag == 1){
        flag = 2;
        diKlik();
        alert("Masi bilang nggak ?");
    }
});