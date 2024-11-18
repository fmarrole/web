$( document ).ready(function() {
    $('#videoModal').modal('show');
    document.getElementById("videoPlayer").play();
});
//cuenta regresiva
function updateCountdown() {
    // Fecha fin (11 de diciembre de 2024)
    const targetDate = new Date('2024-12-11T19:00:00').getTime();
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    if (timeRemaining < 0) {
        clearInterval(countdownInterval);
        document.getElementById("days").innerHTML = "0";
        document.getElementById("hours").innerHTML = "0";
        document.getElementById("minutes").innerHTML = "0";
        document.getElementById("seconds").innerHTML = "0";
    }
}
const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();
//menu
$('.navbar-nav li a').on('click', function(){
    if($('.navbar-toggle').css('display') !='none'){
        $(".navbar-toggle").click();
    }
});
//modal
function openModal() {
    $('#videoModal').modal('show');
    document.getElementById("videoPlayer").play();
}
$('#videoModal').on('hidden.bs.modal', function () {
    var video = document.getElementById('videoPlayer');
    video.pause();         // Pausar el video
    video.currentTime = 0; // Reiniciar el video al inicio
});
