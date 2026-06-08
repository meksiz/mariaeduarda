
function nextPage(id){
document.querySelectorAll("section").forEach(sec=>{
sec.classList.remove("active");
});
document.getElementById(id).classList.add("active");
}

function showVideo(){
document.querySelectorAll("section").forEach(sec=>{
sec.classList.remove("active");
});

document.getElementById("videoPage").classList.add("active");

const video = document.getElementById("finalVideo");

video.onended = () => {
nextPage("home");
video.currentTime = 0;
}
}
