document.addEventListener('DOMContentLoaded', function () {
    const audioPlayer = document.getElementById('audioPlayer');


    audioPlayer.addEventListener('ended', function () {
        alert('Muzika je završena');
    });
});