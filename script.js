var time = document.querySelector("#currentDay");
var task = document.querySelectorAll("#task")

function updateTime(){
time.textContent = dayjs().format("YYYY-MM-DD HH:mm:ss");
}
setInterval(updateTime, 1000);


var now = new Date();
var hours = now.getHours();

