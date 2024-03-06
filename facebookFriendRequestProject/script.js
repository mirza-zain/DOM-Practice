let addFriend = document.querySelector("#add");
let removeFriend = document.querySelector("#remove");
let isFriend = document.querySelector("h5");

addFriend.addEventListener("click", function(){
    isFriend.innerHTML = "Friends";
    isFriend.style.color = "green";
})

removeFriend.addEventListener("click", function(){
    isFriend.innerHTML = "Stranger";
    isFriend.style.color = "red";
})