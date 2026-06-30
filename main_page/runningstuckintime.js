const ind = document.getElementById("passport");
ind.addEventListener('mouseover', function() {
  document.getElementById('explanationtext').innerHTML = "When you graduate from a Dutch University, the government gives you one year referred to as the Orientation Year (Zoekjaar) in which you are allowed to work without a work permit. The idea behind it is giving you a year to prove yourself to an employer to incentivize them to sponsor your Highly Skilled Migrant Visa, or in this case a chance for you to prove your artistic contributions to the Dutch Culture.<br><br>This visa costs between 270 euros to (search for it) depending on your nationality. To apply for it you need to provide your diploma, pay the fee and upload all the pages of your passport. However there are strict guidelines on which file format and size they accept your passport photos. They all need to be within the same file, and the file needs to be smaller than (search for it). This proves to be a slightly difficult task if you have more than three pages stamped on your passport.";
  document.getElementById('gameExp').classList.add('showGameExp');
});
ind.addEventListener('mouseout', function() {
  document.getElementById('explanationtext').innerHTML = '';
  document.getElementById('gameExp').classList.remove('showGameExp');
});


function showTaxStory() {
  document.getElementById('storyText').innerHTML = 'After, Kyra couldn’t find the right link to pay her taxes she ended up not filing one time. Because she was outside of the country, she didn’t receive the blue letters from the Belastingdienst. When she returned she was met with a fine and an obligation to pay 1600 Euros estimated by the Government as what her quarterly tax would be. Even though she filed her taxes right afterwards she didn’t know how to deal with the money she owed. For that she called the Belastingdienst office, however for her to reach a call operator, she had to reply to the (6) questions of the bot. All had multiple options and were only recorded in Dutch. After three attempts on her own she decided to get help from a friend who took some Dutch courses and together they managed to reach a person. After they explained the situation she was told to send a letter to the Government and only pay the late fee which was 120 euros. ';
  document.getElementById('story').classList.toggle('showStory');
};

const passport = document.getElementById("tax");
passport.addEventListener('mouseover', function() {
  document.getElementById('explanationtext').innerHTML = 'If your aim is to get an Artist Visa, you have to be registered at the KVK (Kamer Van Koophandel) as a freelancer. If you get the artist visa, you are not allowed to seek a contracted occupation and can only earn money through your freelance jobs. As a freelancer register with the KVK you have to declare your income quarterly, even if you haven’t made any money within the quarter. If you fail to do so, you will receive a blue letter with a fine for late declaration and the amount you are found to be owned. The amount is calculated by the tax authorities and often times a lot higher than what you would likely owe. You have passed a (declaration period) and the Belastingdienst has calculated that you owe the government 1600 euros. <br><br> You need to, 1st declare your income and 2nd call the Belastingdienst to see how you can contest it. Play the game to get in contact with the Belastingdienst regarding the money you owe them. ';
  document.getElementById('gameExp').classList.add('showGameExp');
});
passport.addEventListener('mouseout', function() {
  document.getElementById('explanationtext').innerHTML = '';
  document.getElementById('gameExp').classList.remove('showGameExp');
});

function showPassportStory() {
  document.getElementById('storyText').innerHTML = 'So far I heard multiple creative ways of going about the guidelines for uploading your passport. One of my friend, Avril, scanned each page which took at least 20 minutes, combined them in a pdf file but when she tried uploading it the system started giving an error saying it should be under a certain size. Then she compressed it and the system gave another error saying the file be multiple pages. She ended up spending at least 30 minutes trying to figure out how to upload a passport, calling her mom and stressing about how to make it work. After countless attempts she just uploaded the first two pages of her passport and hoped that it wouldn\'t cause an issue. She got the visa so all was fine in the end. I had managed to compress the file but I don\'t know or remember how I did it. A creative solution I heard was to copy all the passport pages into a single document as tiny images and to only upload that one page.<br><br>It is a visa that gets approved for almost everyone, and technically with very little risk of getting a rejection, it shouldn\'t be that stress inducing. But the truth is, the application process in itself is stressful. As a recent graduate trying to change your residence permit type, especially when your\'s is ending within a few days, turns this seemingly easy process into a little anxiety ball for most. Within this, when a part of the process is causing endless issues the person starts catastrophizing in their minds.<br><br>Of all the games, this is the one with the lowest stakes, lowest risk and least chance of causing an issue if you don\'t follow the instructions to the letter. But it still shows how even the most minuscule parts of the process can sometimes feel as if they are against you';
  document.getElementById('story').classList.toggle('showStory');
}


const choices = document.getElementById("choices");
choices.addEventListener('mouseover', function() {
  document.getElementById('explanationtext').innerHTML = 'You need multiple things to file a complete Artist Visa Application; 1) a Portfolio 2) registration to the KVK 3) CV and maybe the most importantly 4) letters from organizations Funded by The Netherlands on how they plan on working with you in the future. (Contrary to popular belief there is not a income requirement for the first time you are applying for an artist visa). You have successfully gathered all the necessary documents and have submitted your application. However your lawyer is strongly advising you to strengthen your application by continuing to send supporting documents (like more letters from other organizations) as you can keep on updating your application even after it has entered the system. <br><br> This leave you in a liminal period in which you need to choose how you will allocate your resources and time while you await the decision. Play the game to face some of the possible decisions you may need to make.';
  document.getElementById('gameExp').classList.add('showGameExp');
});
choices.addEventListener('mouseout', function() {
  document.getElementById('explanationtext').innerHTML = '';
  document.getElementById('gameExp').classList.remove('showGameExp');
});

function showChoicesStory() {
  document.getElementById('storyText').innerHTML = 'This is the story of Cam, he spent approximately one to two months collecting all the necessary documents for the artist visa application, and applied with the support of a lawyer. After this he entered the waiting period. He could get the decision of his application at any point, and that singular letter would cause him to either live legally within the Netherlands (until its expiration) or result with his deportation<br><br>the stakes were high this knowledge started holding him in a chokehold. To get an artist visa you need to prove to contribute to Dutch society and culture, without any metrics or guidelines this task sounds very daunting. The only certain information we have is that getting letter about future work from organizations funded by the government or municipalities increases your chances.<br><br>With these facts in mind Cam started calculating all of his career endeavours through the lens of “will it help my application”. As time was limited, he was left in a continuous decision making state. Feeling forced to choose taking part in projects funded by the government even if they wouldn’t pay, as opposed to commercial jobs because the latter wouldn’t aid his application. Because the documents letting you stay in the Netherlands within this period are not considered as residence permits, he needed visa’s to enter other EU countries which led him to miss his own exhibition.<br><br>He was stuck between a rock and a hard place when his grandmothers health declined significantly because he had to get a “one time entry” permit before leaving the country, but the permits would expire maximum in a month. It would take apron one-two weeks to get the permit, so he had to play guessing games with when his grandma would pass in order to make it to the funeral.<br><br>Because IND claims that the decision making period for the artist visa is max 8 months, the document/sticker allowing him to remain in the country would be given for a maximum of 6 months, and each time he went to renew it, its validity would be for shorter and shorter periods. He finally got the visa after 11 months and 3 weeks of waiting. The game was inspired by some of the decisions he had to make during this year.';
  document.getElementById('story').classList.toggle('showStory');
};



const params = new URLSearchParams(window.location.search);
const failed = params.get('failed');

if (failed) {
    document.getElementById(failed).innerText = 'Failed';
    window.history.replaceState({}, '', window.location.pathname);}
// burara failled ise change element yaz ama o kalmayacak yine. 
  