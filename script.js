const modal = document.getElementById("modal");
const input = document.getElementById("link");
const btn = document.getElementById("btn");
const close = document.getElementsByClassName("close")[0];

btn.addEventListener("click", openPopup);

function openPopup(e) {
  e.preventDefault();
  console.log(input.value);
  modal.style.display = "block";
  startCountdown();
}


function closePopup() {
  modal.style.display = "none";
}



let reverseCounter = 10;
let progressBar = document.getElementById("pbar");
let counting = document.getElementById("counting");

function startCountdown(){
    let downloadTimer = setInterval(function(){
    progressBar.value = 10 - (--reverseCounter);
    if(reverseCounter <= -1) {
      clearInterval(downloadTimer);
      closePopup();
      window.open(input.value, "_blank");
    }
    counting.innerHTML= reverseCounter;

},1000);
let reverseCounter = 11;
}