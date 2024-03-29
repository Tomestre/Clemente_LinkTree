const mySound = document.getElementById("mySound");
const musicPlayer = document.getElementById('music-icon')
const logoPng = document.getElementById('logo_png')
const backgroundLogo = document.querySelector('.logo_player')
const play = document.getElementById('play');
const pause = document.getElementById("pause")


backgroundLogo.style.background = '#22585f'


function playSound() {


    if (mySound.paused) {
        mySound.play();
        play.classList.remove('active')
        pause.classList.add('active')
        return
    } else {
        mySound.pause();
        play.classList.add('active')
        pause.classList.remove('active')
    }


}

setInterval(() => {
    if (musicPlayer.style.display === 'none') {
        musicPlayer.style.display = '';
        logoPng.style.display = 'none';
        backgroundLogo.style.background = '#22585f'
        
    } else {
        musicPlayer.style.display = 'none';
        logoPng.style.display = 'block';
        backgroundLogo.style.background = ''
        return
    }

}, 7000);

play.classList.add('active')
pause.classList.remove('active')


document.getElementById('soundcloudLink').addEventListener('click', function() {
    // Seleciona as tags <a> com a classe .soundcloud
    var soundcloudLinks = this.getElementsByClassName('soundcloud');

    // Adiciona a classe 'show' para fazer as tags <a> com a classe .soundcloud aparecerem com a animação
    for (var i = 0; i < soundcloudLinks.length; i++) {
        soundcloudLinks[i].classList.toggle('show');
    }
});