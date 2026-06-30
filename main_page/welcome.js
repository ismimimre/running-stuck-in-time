let currentSentence = 0
let sentenceData = null 
function makeSentence(sentenceData){
    console.log(sentenceData);
    document.getElementById("sentence").innerHTML = ""  //temizlemek için
    sentenceData.sentences[currentSentence].parts.forEach(part => {
        console.log(part.underline, typeof part.underline);
        if (part.underlined === true) {
            let span = document.createElement("span");
            span.innerText = part.text;
            span.classList.add("underline");
            document.getElementById("sentence").appendChild(span);
            span.addEventListener("mouseover", function() {
                span.classList.add("underlineBig");
            });
            span.addEventListener("mouseout", function() {
                span.classList.remove("underlineBig");
            });
            span.addEventListener("click", function(event) {
                event.stopPropagation();
                showExplanation(part);
            });
        } else {
            let span = document.createElement("span");
            span.innerText = part.text;
            document.getElementById("sentence").appendChild(span);
        }
    });
}

function nextSentence(sentenceData){
    currentSentence++;
    if (currentSentence === 10) {
        window.location.href = "passportportal.html?returnId=10";
        return;
    }
    if (currentSentence === 18) {
        window.location.href = "belasting.html?returnId=18";
        return;
    }
    if (currentSentence === 21) {
        window.location.href = "artistvisaattempt1.html?returnId=21";
        return;
    }
    if (currentSentence === 22) {
        window.location.href = "welcome.html?returnId=1";
        return;
    }
    document.getElementById("explanation").classList.remove("showExplanation");
    if(currentSentence >= sentenceData.sentences.length){
        //buraya go to end page ve link lazım
        console.log("End of sentences");
    }
    makeSentence(sentenceData);
}

function showExplanation(part){
    if (document.getElementById("explanation").classList.contains("showExplanation")) {
        document.getElementById("explanation").classList.remove("showExplanation");
    }
    else if (part.explanation) {
    document.getElementById("explanation").innerText = part.explanation;
    document.getElementById("explanation").classList.add("showExplanation");
}}

function previousSentence() {
    document.getElementById("explanation").classList.remove("showExplanation");
    if (currentSentence > 0) {
        currentSentence--;
        makeSentence(sentenceData);
    }
}
fetch('welcome.JSON')
.then(response => response.json())
.then(data => {
    sentenceData = data 
    const urlParams = new URLSearchParams(window.location.search);
    const returnId = urlParams.get("returnId");
    if (returnId) {
        currentSentence = parseInt(returnId);
    }
    makeSentence(sentenceData);
    document.getElementById("rightArrow").addEventListener("click", function() {
        nextSentence(sentenceData);
    });
previousSentence(sentenceData);
   document.getElementById("leftArrow").addEventListener("click", function() {
        previousSentence(sentenceData);
    });
  
 
});

// daha fazla zaman ekle bi 65000 en azından ve diper sayfalara da ekle ama önce ilk sayfayı düzeltmen lazım.
var timeout;
document.onmousemove = function(){
  clearTimeout(timeout);
  timeout = setTimeout(function(){ window.location.href = "welcome.html?returnId=0";}, 10000);
}