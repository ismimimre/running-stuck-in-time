function text1Function () {
  var popup = document.getElementById("text1");
  popup.classList.toggle("showtext1");
}

//lets make the dial buttons work aaAAAaaaa
const heading1 = document.getElementById('nums1');
const heading2 = document.getElementById('nums2');
const heading3 = document.getElementById('nums3');
const heading4 = document.getElementById('nums4');
const heading5 = document.getElementById('nums5');

const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');
//for the second question
const one2 = document.getElementById('one2');
const two2 = document.getElementById('two2');
const three2 = document.getElementById('three2');
const four2 = document.getElementById('four2');
const five2 = document.getElementById('five2');
const six2 = document.getElementById('six2');
const seven2 = document.getElementById('seven2');
const eight2 = document.getElementById('eight2');
const nine2 = document.getElementById('nine2');
const zero2 = document.getElementById('zero2');
// for the third question
const one3 = document.getElementById('one3');
const two3 = document.getElementById('two3');
const three3 = document.getElementById('three3');
const four3 = document.getElementById('four3');
const five3 = document.getElementById('five3');
const six3 = document.getElementById('six3');
const seven3 = document.getElementById('seven3');
const eight3 = document.getElementById('eight3');
const nine3 = document.getElementById('nine3');
const zero3 = document.getElementById('zero3');
// for the fourth question
const one4 = document.getElementById('one4');
const two4 = document.getElementById('two4');
const three4 = document.getElementById('three4');
const four4 = document.getElementById('four4');
const five4 = document.getElementById('five4');
const six4 = document.getElementById('six4');
const seven4 = document.getElementById('seven4');
const eight4 = document.getElementById('eight4');
const nine4 = document.getElementById('nine4');
const zero4 = document.getElementById('zero4');
// for the fifth question
const one5 = document.getElementById('one5');
const two5 = document.getElementById('two5');
const three5 = document.getElementById('three5');
const four5 = document.getElementById('four5');
const five5 = document.getElementById('five5');
const six5 = document.getElementById('six5');
const seven5 = document.getElementById('seven5');
const eight5 = document.getElementById('eight5');
const nine5 = document.getElementById('nine5');
const zero5 = document.getElementById('zero5');



//for the first question 
one.addEventListener('click', () => {
    heading1.value += '1';
});
two.addEventListener('click', () => {
    heading1.value += '2';
});
three.addEventListener('click', () => {
    heading1.value += '3';
});
four.addEventListener('click', () => {
    heading1.value += '4';
});
five.addEventListener('click', () => {
    heading1.value += '5';
});
six.addEventListener('click', () => {
    heading1.value += '6';
});
seven.addEventListener('click', () => {
    heading1.value += '7';
});
eight.addEventListener('click', () => {
    heading1.value += '8';
});
nine.addEventListener('click', () => {
    heading1.value += '9';
});
zero.addEventListener('click', () => {
    heading1.value += '0';
});
//for the second question
one2.addEventListener('click', () => {
  heading2.value += '1';
});
two2.addEventListener('click', () => {
  heading2.value += '2';
});
three2.addEventListener('click', () => {
  heading2.value += '3';
});
four2.addEventListener('click', () => {
  heading2.value += '4';
});
five2.addEventListener('click', () => {
  heading2.value += '5';
});
six2.addEventListener('click', () => {
  heading2.value += '6';
});
seven2.addEventListener('click', () => {
  heading2.value += '7';
});
eight2.addEventListener('click', () => {
  heading2.value += '8';
});
nine2.addEventListener('click', () => {
  heading2.value += '9';
});
zero2.addEventListener('click', () => {
  heading2.value += '0';
});
//for the third question
one3.addEventListener('click', () => {
  heading3.value += '1';
});
two3.addEventListener('click', () => {
  heading3.value += '2';
});
three3.addEventListener('click', () => {
  heading3.value += '3';
});
four3.addEventListener('click', () => {
  heading3.value += '4';
});
five3.addEventListener('click', () => {
  heading3.value += '5';
});
six3.addEventListener('click', () => {
  heading3.value += '6';
});
seven3.addEventListener('click', () => {
  heading3.value += '7';
});
eight3.addEventListener('click', () => {
  heading3.value += '8';
});
nine3.addEventListener('click', () => {
  heading3.value += '9';
});
zero3.addEventListener('click', () => {
  heading3.value += '0';
});
//for the fourth question
one4.addEventListener('click', () => {
  heading4.value += '1';
});
two4.addEventListener('click', () => {
  heading4.value += '2';
});
three4.addEventListener('click', () => {
  heading4.value += '3';
});
four4.addEventListener('click', () => {
  heading4.value += '4';
});
five4.addEventListener('click', () => {
  heading4.value += '5';
});
six4.addEventListener('click', () => {
  heading4.value += '6';
});
seven4.addEventListener('click', () => {
  heading4.value += '7';
});
eight4.addEventListener('click', () => {
  heading4.value += '8';
});
nine4.addEventListener('click', () => {
  heading4.value += '9';
});
zero4.addEventListener('click', () => {
  heading4.value += '0';
});
//for the fifth question
one5.addEventListener('click', () => {
  heading5.value += '1';
});
two5.addEventListener('click', () => {
  heading5.value += '2';
});
three5.addEventListener('click', () => {
  heading5.value += '3';
});
four5.addEventListener('click', () => {
  heading5.value += '4';
});
five5.addEventListener('click', () => {
  heading5.value += '5';
});
six5.addEventListener('click', () => {
  heading5.value += '6';
});
seven5.addEventListener('click', () => {
  heading5.value += '7';
});
eight5.addEventListener('click', () => {
  heading5.value += '8';
});
nine5.addEventListener('click', () => {
  heading5.value += '9';
});
zero5.addEventListener('click', () => {
  heading5.value += '0';
});

document.getElementById("btn1").addEventListener("click", function () {
    const userInput = document.getElementById("nums1").value.trim();
    const nextQuestion1 = document.getElementById("nextQuestion1");
    console.log(userInput)

    function text1Function () {
      var popup = document.getElementById("text1");
      popup.classList.toggle("showtext1");
  }
  
    if (userInput == "1" || userInput ==  "2") {    
      nextQuestion1.classList.remove('hidden1');
      console.log("correct");
     } else {
     location.reload(true);
     }; 

 });

  document.getElementById("btn2").addEventListener("click", function () {
    const userInput = document.getElementById("nums2").value.trim();
    const nextQuestion2 = document.getElementById("nextQuestion2");
    console.log(userInput)

    if (userInput === "409281492") {    // hızlı geçmek için şimdilik sekiz UNUTMA
      nextQuestion2.classList.remove('hidden2');
    } else {
      location.reload(true);
    }
  });

  document.getElementById("btn3").addEventListener("click", function () {
    const userInput = document.getElementById("nums3").value.trim();
    const nextQuestion3 = document.getElementById("nextQuestion3");
    if (userInput == "1" || userInput ==  "2" || userInput == "3" ||userInput == "4" || userInput == "5") {    // <-- change this string to whatever you want
      nextQuestion3.classList.remove('hidden2');
    } else {
      location.reload(true);
    }
  });

  document.getElementById("btn4").addEventListener("click", function () {
    const userInput = document.getElementById("nums4").value.trim();
    const nextQuestion4 = document.getElementById("nextQuestion4");
  
    if (userInput == "1" || userInput ==  "2" || userInput == "3" ||userInput == "4" || userInput == "5") {    // <-- change this string to whatever you want
      nextQuestion4.classList.remove('hidden2');
    } else {
      location.reload(true);
    }
  });
  document.getElementById("btn5").addEventListener("click", function () {
    const userInput = document.getElementById("nums5").value.trim();
    const nextQuestion5 = document.getElementById("youdidit");
  
    if (userInput === "1") {    // <-- change this string to whatever you want
      nextQuestion5.classList.remove('hidden2');
    } else {
      location.reload(true);
    }
  });

  var aAudio = new Audio('audio/soru1.mp3');
  var bAudio = new Audio('audio/soru2.mp3');
  var cAudio = new Audio('audio/soru3.mp3');
  var dAudio = new Audio('audio/soru4.mp3');
  var eAudio = new Audio('audio/sonsoru.mp3');
  function myAudioFunction(letter) {
      if(letter == '1') {
          aAudio.play();
      } else if(letter == '2') {
          bAudio.play();
      } else if(letter == '3') {
        cAudio.play();
    } else if(letter == '4') {
      dAudio.play();
    }
      else if(letter == 'son') {
        eAudio.play();
    }
  }
 

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