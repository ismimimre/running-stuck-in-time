

const passportinput = document.getElementById('passportinput');
const OFFSET = 100;

//passportinput.addEventListener('click', function() { 
//    alert('Nice Try')
//    window.close();
//} );

 var validity = "valid"



let counter = 0;
let ra_counter = 0;

document.addEventListener("mousemove", function(event) {
  ra_counter++;
  document.getElementById("ra-counter").innerHTML = ra_counter;
});

document.addEventListener('mousemove', (e)=> {
    const x = e.clientX
    const y = e.clientY
    const buttonBox = passportinput.getBoundingClientRect()
    const horizontalDistanceFrom = distanceFromCenter(buttonBox.x, x, buttonBox.width)
    const verticalDistanceFrom = distanceFromCenter(buttonBox.y, y, buttonBox.height)
    const horizontalOffset = buttonBox.width / 2 + OFFSET
    const verticalOffset = buttonBox.height / 2 + OFFSET
    if (Math.abs(horizontalDistanceFrom) <= horizontalOffset && Math.abs(verticalDistanceFrom) <= verticalOffset) {
       setButttonPosition(
        buttonBox.x + (horizontalOffset / horizontalDistanceFrom) * 10,
        buttonBox.y + (verticalOffset / verticalDistanceFrom) * 10,
       )
    }
    ;

})

function setButttonPosition(left, top) {
  const windowBox = document.getElementById("dragcontainer").getBoundingClientRect()
  const buttonBox = passportinput.getBoundingClientRect()

  if (ra_counter > 300){
      console.log("stopped");
      return;
  }

  // clamp left within container
  if (left < windowBox.left) left = windowBox.left;
  if (left + buttonBox.width > windowBox.right) left = windowBox.right - buttonBox.width;

  // clamp top within container
  if (top < windowBox.top) top = windowBox.top;
  if (top + buttonBox.height > windowBox.bottom) top = windowBox.bottom - buttonBox.height;

  // subtract container offset since passportinput is positioned relative to container
  passportinput.style.left = `${left - windowBox.left}px`
  passportinput.style.top = `${top - windowBox.top}px`
}

function distanceFromCenter(boxPosition, mousePosition, boxSize) {
    if (ra_counter > 300){
        return;
    }
    return boxPosition - mousePosition + (boxSize / 2);
}


const passport = document.getElementById("passport");

let countedDuringDrag = false;

function checkAlignment() {
  const passportBox = passport.getBoundingClientRect();
  const inputBox = passportinput.getBoundingClientRect();

  const isAligned =
    passportBox.right >= inputBox.left &&
    passportBox.left <= inputBox.right &&
    passportBox.bottom >= inputBox.top &&
    passportBox.top <= inputBox.bottom;

  // Only count once per drag
  if (isAligned && !countedDuringDrag) {
    counter++;
    countedDuringDrag = true;
    console.log("if1");
  }

  //buraya popup kendime güzel notlar
  if (counter === 4) {
   openPopupD();
   counter++;
}
else if (counter === 8) {
 openPopupS();
 counter++;
}
else if (counter === 12) {
  validity = "invalid";
   console.log("yey");
   $( "#passport" ).draggable({ revert: validity }) 
};
    
  }
  $( "#passport" ).draggable({ revert: validity }) 

// Using jQuery UI draggable
$("#passport").draggable({
  containment: "#dragcontainer",
  drag: function () {
    checkAlignment();
  },
  start: function () {
    console.log('reset countedDurıngDrag')
    countedDuringDrag = false; // Reset at the start of each drag
  }
});

function enableDragging() {
  $("#passport").draggable("enable");
}

function disableDragging() {
  $("#passport").draggable("disable");
}

 function openCongrats() {
document.getElementById("congrats").classList.add("showCongrats");
 }


function checkForHighlight() {
  if (document.getElementById("passportinput").classList.contains("ui-state-highlight")) {
    openCongrats();
  }
}

$( function() {
;
  
   // $( "#passport2" ).draggable();
    $( "#passportinput" ).droppable({
      classes: {
        "ui-droppable-active": "ui-state-active",
        "ui-droppable-hover": "ui-state-hover"
      },
      drop: function( event, ui ) {
        if (validity === "invalid") {
        $( this )
         .addClass( "ui-state-highlight" )
          .find( "p" )
           .html( "Dropped!" );
           openCongrats();
           startTimer();
      }
    }
    });
  } );


 let popup = document.getElementById("popup");
  function openPopup () {
      popup.classList.add("open-popup");
  }
  function closePopup () {
      popup.classList.remove("open-popup");
  }

  let popupSize = document.getElementById("popupSize");
  function openPopupS () {
      popupSize.classList.add("open-popup");
      disableDragging();
  }
  function closePopupS () {
      popupSize.classList.remove("open-popup");
        enableDragging();
  }

  let popupDoc = document.getElementById("popupDoc");
  function openPopupD () {
      popupDoc.classList.add("open-popup");
        disableDragging();
  }
  function closePopupD () {
      popupDoc.classList.remove("open-popup");
        enableDragging();
  }

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
}, 500);
  };
//calling it when page reloads
  document.addEventListener("DOMContentLoaded", function() {
    startTimer();
  });


  openSecondQ = () => {
    if (document.getElementById("checkbox1").checked) {
        document.getElementById("question2").classList.add("showQuestion");
        document.getElementById("checkbox1").disabled = true;
    }
};

openThirdQ = () => {
    if (document.getElementById("checkbox2").checked) {
        document.getElementById("question3").classList.add("showQuestion");
        document.getElementById("checkbox2").disabled = true;
        document.getElementById("passport").classList.add("passportVisible");
        document.getElementById("passportinput").classList.add("passportVisible");
        currentWealth = 20;
        document.getElementById("wealth").textContent = `Wealth: ${currentWealth}`;
        document.getElementById("wealthBarInner").style.width = currentWealth + "%";
        console.log(currentWealth);
    }
};

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("checkbox1").checked = false;
  document.getElementById("checkbox2").checked = false;
});

let currentHealth = 40;
let currentWealth = 40;
let currentJoy = 40; 

function showStats() {
    document.getElementById("health").textContent = `Health: ${currentHealth}`;
    document.getElementById("wealth").textContent = `Wealth: ${currentWealth}`;
    document.getElementById("joy").textContent = `Joy: ${currentJoy}`;
    document.getElementById("healthBarInner").style.width = currentHealth + "%";
    document.getElementById("wealthBarInner").style.width = currentWealth + "%";
    document.getElementById("joyBarInner").style.width = currentJoy + "%";
    console.log(currentWealth);
}