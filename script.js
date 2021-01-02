
  document.addEventListener('DOMContentLoaded', () => {
  const startBtn = document.querySelector('#start-btn');
  const pauseBtn = document.querySelector('#pause-btn');
  let started = false;
  let isPaused = false;
  let startingMinutes = .1;
  let time = startingMinutes * 60;

  const countdownElement = document.getElementById('countdown');

  function play() { 
    var audio = new Audio('https://codeskulptor-demos.commondatastorage.googleapis.com/descent/gotitem.mp3'); 
    audio.play(); 
  }
   function pause() {
    if (isPaused == false && started == true) {
      isPaused = true;
      pauseBtn.innerHTML = 'Unpause';
    } else {
      isPaused = false;
      pauseBtn.innerHTML = 'Pause';
    }
  }

  function updateCountdown() {
    if (isPaused == false) {
    started = true;
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    
    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownElement.innerHTML = `${minutes}:${seconds}`;
    time--;
    
    if(time <= 0) { 
      setTimeout(countdownElement.innerHTML = '0:00', 1000)
    }

    while (time == 0 && startingMinutes == .1) {
      document.querySelector('#title').innerHTML = "Break time!";
      startingMinutes = .2;
      time = startingMinutes * 60;
      play();
    }

    while (time == 0 && startingMinutes == .2) {
      document.querySelector('#title').innerHTML = "Let's get stuff done!"
      startingMinutes = .1;
      time = startingMinutes * 60;
      play();
    }
    }
  }
  

    startBtn.addEventListener('click', () => {setInterval(updateCountdown, 1000);});

    pauseBtn.addEventListener('click', pause);


  })
