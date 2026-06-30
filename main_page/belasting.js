let countDown = null;
//timer funtion
const progressBar = document.querySelector(".progressBarInner");
function startTimer()
 {
  clearInterval(countDown);
  progressBar.style.width = "100%";
    console.log("start");
 let interval = 100;
  countDown = setInterval(() => {
  interval--;
  let progressWidth = interval / 100 * 100;
  progressBar.style.width = progressWidth + "%";
  
  if (interval <= 0) {
    window.location.href="welcome.html?returnId=22";
      clearInterval(countDown);
      // do something when time runs out
  }
}, 3000);
};
//calling it when page reloads
document.addEventListener("DOMContentLoaded", function() {
  startTimer();
  showStats();
});



function text1Function () {
    var popup = document.getElementById("text1");
    popup.classList.toggle("showtext1");
  }
 
// unutma burada sesi ayarlaman lazım
const waitingMusic = new Audio('audio/onhold.mp3');
waitingMusic.volume = 0.2;

function startAudio() {
    input.value = '';
    waitingMusic.play();
     setTimeout(() => {
      waitingMusic.pause();
      currentAudio.play();
    }, 30000);
   
}

function stopWaitingMusic() {
    waitingMusic.pause();
    waitingMusic.currentTime = 0;
}



// ── Question definitions ─────409281492─────────────────────────────────────────
const questions = [
    { audio: 'audio/soru1.mp3',   answers: ['1', '2'] },
    { audio: 'audio/soru2.mp3',   answers: ['1'] },
    { audio: 'audio/soru3.mp3',   answers: ['1','2','3','4','5'] },
    { audio: 'audio/soru4.mp3',   answers: ['1','2','3','4','5'] },
    { audio: 'audio/sonsoru.mp3', answers: ['1'] },
  ];
  let currentQuestion = 0;
let currentAudio = new Audio(questions[0].audio);

function myAudioFunction() {
  
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio.play();
  }

  //lets make the dial buttons work aaAAAaaaa
  const input = document.getElementById('nums1');

const dialMap = {
  one:'1', two:'2', three:'3', four:'4', five:'5',
  six:'6', seven:'7', eight:'8', nine:'9', zero:'0',
  star:'*', mark:'#'
};

Object.entries(dialMap).forEach(([id, val]) => {
  document.getElementById(id).addEventListener('click', () => {
    input.value += val;
  });
});
  

  
  
  document.getElementById('btn1').addEventListener('click', () => {
    const userInput = input.value.trim();
    const q = questions[currentQuestion];
  
    if (q.answers.includes(userInput)) {
      stopWaitingMusic();
      currentQuestion++;
      input.value = '';
  
      if (currentQuestion >= questions.length) {
        // All questions answered
        document.querySelector('.row1').style.display = 'none';
        document.getElementById('youdidit').classList.remove('hidden2');
        currentWealth = 20;
        currentJoy = 50;
        document.getElementById("healthBarInner").style.width = currentHealth + "%";
        document.getElementById("wealthBarInner").style.width = currentWealth + "%";
        document.getElementById("joyBarInner").style.width = currentJoy + "%";
        document.getElementById("health").textContent = `Health: ${currentHealth}`;
        document.getElementById("wealth").textContent = `Wealth: ${currentWealth}`;
        document.getElementById("joy").textContent = `Joy: ${currentJoy}`;
      } else {
        currentAudio.pause();  
        // Load next question's audio
        currentAudio = new Audio(questions[currentQuestion].audio);
        currentAudio.play();
      }
    } else {
      //location.reload(true);
      currentAudio.pause();
      startAudio();
      currentAudio = new Audio(questions[0].audio);
    }
  });
  
  
  
   


  //no reload just go back to initial audio
    function reloadPage()
    {
        window.location.reload();
    }
   let popup = document.getElementById("popup");
    function openPopup () {
        popup.classList.add("open-popup");
    }
    function closePopup () {
        popup.classList.remove("open-popup");
    }
  
    function showIdname () { 
      document.getElementById('wallet').src ="img/name.svg";
    }
   
  
   // let idName = document.getElementById("idname");
  //function showIdname () { 
   // idName.classList.add("showIdname");
  //}
  
  function closeIdname () {
    document.getElementById('wallet').src ="img/wallet.png";
  }
  
  window.onload = function() {
    document.querySelectorAll('input').forEach(input => input.value = '');
  }

let currentHealth = 40;
let currentWealth = 2;
let currentJoy = 2; 

function showStats() {
    document.getElementById("health").textContent = `Health: ${currentHealth}`;
    console.log(currentHealth);
    document.getElementById("wealth").textContent = `Wealth: ${currentWealth}`;
    document.getElementById("joy").textContent = `Joy: ${currentJoy}`;
    document.getElementById("healthBarInner").style.width = currentHealth + "%";
    document.getElementById("wealthBarInner").style.width = currentWealth + "%";
    document.getElementById("joyBarInner").style.width = currentJoy + "%";
    console.log(currentWealth);
}
