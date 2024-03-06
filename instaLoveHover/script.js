let post = document.querySelector('#post');
let like = document.querySelector('i');

post.addEventListener('dblclick', function(){
    like.style.transform = "transform: translate(-50%, -50%) scale(1)";
    like.style.opacity = 0.8;

    setTimeout(() => {
        like.style.opacity = 0;
    }, 1000);
    setTimeout(() => {
        like.style.transform = "transform: translate(-50%, -50%) scale(1)";
    }, 2000);
})
