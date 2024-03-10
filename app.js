const mySound = document.getElementById("mySound");
const logoPlayer = document.getElementById('music-icon')
const logoPng = document.getElementById('logo_png')
const backgroundLogo = document.querySelector('.logo_player')
const play = document.getElementById('play');
const pause = document.getElementById("pause")


backgroundLogo.style.background = '#22585f'

function playSound() {

    setTimeout(() => {
        if (logoPlayer.style.display === 'none') {
            logoPlayer.style.display = '';
            logoPng.style.display = 'none';
            backgroundLogo.style.background = '#22585f'
            
        } else {
            logoPlayer.style.display = 'none';
            logoPng.style.display = 'block';
            backgroundLogo.style.background = ''
            return
        }
    }, 5000)

    if (mySound.paused) {
        mySound.play();
        play.classList.add('active')
        pause.classList.remove('active')
        return
    } else {
        mySound.pause();
        play.classList.remove('active')
        pause.classList.add('active')
    }


}

setInterval(() => {
    if (logoPlayer.style.display === 'none') {
        logoPlayer.style.display = '';
        logoPng.style.display = 'none';
        backgroundLogo.style.background = '#22585f'
        
    } else {
        logoPlayer.style.display = 'none';
        logoPng.style.display = 'block';
        backgroundLogo.style.background = ''
        return
    }
}, 10000);

playSound()
mySound.play()
