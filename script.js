document.addEventListener('DOMContentLoaded', () => {
  const startBtn = document.querySelector('#start-btn');
  const pauseBtn = document.querySelector('#pause-btn');
  // const breakBtn = document.querySelector('#break-btn');

  let isPaused = false;
  
  let startingMinutes = 25;
  let time = startingMinutes * 60;

  const countdownElement = document.getElementById('countdown');

  function play() { 
    var audio = new Audio('https://codeskulptor-demos.commondatastorage.googleapis.com/descent/gotitem.mp3'); 
    audio.play(); 
  }
  
   function pause() {
    if (isPaused == false) {
      isPaused = true;
      pauseBtn.innerHTML = 'Unpause';
    } else {
      isPaused = false;
      pauseBtn.innerHTML = 'Pause';
    }
  }

  function clear() {
    startBtn.removeAttribute('#start-btn');
    startBtn.id = 'clear-btn';
    startBtn.innerHTML = 'Clear';
  }

  function updateCountdown() {
    if (isPaused == false) {

    clear();

    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    
    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownElement.innerHTML = `${minutes}:${seconds}`;
    time--;
    
    if(time <= 0) { 
      setTimeout(countdownElement.innerHTML = '0:00', 1000)
    }

    while (time == 0 && startingMinutes == 25) {
      document.querySelector('#title').innerHTML = "Break time!";
      document.querySelector('#title').style.animation = "pulse 0.3s linear 1";
      startingMinutes = 5;
      time = startingMinutes * 60;
      play();
    }

    while (time == 0 && startingMinutes == 5) {
      document.querySelector('#title').innerHTML = "Let's get stuff done!"
      document.querySelector('#title').style.animation = "pulse 0.3s linear 1";
      startingMinutes = 25;
      time = startingMinutes * 60;
      play();
    }
    }
  }

    startBtn.addEventListener('click', () => {
      if(startBtn.id == 'start-btn') {setInterval(updateCountdown, 1000);
      } 
      else {
      setInterval(location.reload(), 1000); 
      }
    });


    pauseBtn.addEventListener('click', pause);


  })