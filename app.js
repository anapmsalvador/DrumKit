
const keys = document.querySelectorAll("button")

function transitionKey() {
    for(let key of keys) {
    key.addEventListener("transitionend", function(){
        this.classList.remove("playing");
    })
}}

function addPlay(key) {
    key.classList.add("playing");
}

window.addEventListener("keydown", function(e) {
   const audio = document.querySelector(`audio[data-code="${e.code}"]`);
   const key = document.querySelector(`.buttonkey[data-code="${e.code}"]`);
   if(!audio) return;
   audio.currentTime = 0; 
   addPlay(key);
   audio.play();
   transitionKey(key)
})


