document.addEventListener('DOMContentLoaded', () => {
  const startBtn = document.getElementById('start-game-btn');
  const homeBtn1 = document.getElementById('home-one-btn');
  const homeBtn2 = document.getElementById('home-two-btn');
  const homeBtn3 = document.getElementById('home-three-btn');
  const guestBtn1 = document.getElementById('guest-one-btn');
  const guestBtn2 = document.getElementById('guest-two-btn');
  const guestBtn3 = document.getElementById('guest-three-btn');
  const results = document.getElementById('results');
  const homeScoreDisplay = document.getElementById('home-score');
  const guestScoreDisplay = document.getElementById('guest-score');
  const timer = document.getElementById('time');
  let home = 0;
  let guest = 0;
  let timeRemaining = 60;
  let timerInterval;

  function updateScore() {
    homeScoreDisplay.textContent = home;
    guestScoreDisplay.textContent = guest;
  }

  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }

  const finalResult = () => {
    if(home > guest) {
      results.textContent = `Home: ${home}, Guest: ${guest}... Home wins`;
    } else if (home < guest) {
      results.textContent = `Home: ${home}, Guest: ${guest}... Guest wins`;
    } else {
      results.textContent = `Home: ${home}, Guest: ${guest}... Draw`;
    }
    
  }

  function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
      if (timeRemaining > 0) {
        timeRemaining--;
        timer.textContent = formatTime(timeRemaining);
      } else {
        clearInterval(timerInterval);
        startBtn.style.display = "block";
        finalResult();
      }
    }, 1000);
  }

  startBtn.addEventListener('click', () => {
    home = 0;
    guest = 0;
    updateScore();
    timeRemaining = 60;
    timer.textContent = formatTime(timeRemaining);
    startTimer();
    results.textContent = "match in progress.....................";
    startBtn.style.display = "none";
  });

  homeBtn1.addEventListener('click', () => {
    if (timeRemaining > 0) {
    home += 1;}
    updateScore();
  });

  homeBtn2.addEventListener('click', () => {
    if (timeRemaining > 0) {
      home += 2;}
    updateScore();
  });

  homeBtn3.addEventListener('click', () => {
    if (timeRemaining > 0) {
      home += 3;}
    updateScore();
  });

  guestBtn1.addEventListener('click', () => {
    if (timeRemaining > 0) {
      guest += 1;}
    updateScore();
  });

  guestBtn2.addEventListener('click', () => {
    if (timeRemaining > 0) {
      guest += 2;}
    updateScore();
  });

  guestBtn3.addEventListener('click', () => {
    if (timeRemaining > 0) {
      guest += 3;}
    updateScore();
  });
});