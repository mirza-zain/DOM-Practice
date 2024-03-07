let main = document.querySelector("#main");
let curse = document.querySelector("#cursor");

main.addEventListener("mousemove", function(move){
    curse.style.left = move.x + "px";
    curse.style.top = move.y + "px";
})