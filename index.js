function playSound(name) {
  var audio = new Audio("sounds/"+name+".mp3");
  audio.play();

}
$("body").css("overflow", "hidden");
var animation = bodymovin.loadAnimation({
  container: document.getElementById('animContainer'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'https://assets9.lottiefiles.com/packages/lf20_uhsngkt4.json'
});

var ok = true;
var characterList = ["naruto", "hinata", "sasuke", "tsunade", "gaara", "madara", "itachi", "pain",  "kakashi",  "minato", "hashirama", "obito", "shikamaru", "jiraiya", "orochimaaru"];
var characterFullNameList = ["Naruto Namikaze", "Hinata Hyuga", "Sasuke Uchiha", "Tsunade", "Gaara", "Madara Uchiha", "Itachi Uchiha", "Pain",  "Kakashi Hatake",  "Minato Namikaze", "Hashirama Senju", "Obito Uchiha", "Shikamaru Nara",  "Jiraiya", "Orochimaaru"];
var randomIndex = Math.floor(Math.random()*15);
var currentCharacterName = characterList[randomIndex];
var currentCharacterFullName = characterFullNameList[randomIndex];

var cardAnim = bodymovin.loadAnimation({
  container: document.getElementById('cardSec'),
  renderer: 'svg',
  loop: true,
  autoplay: false,
  path: 'https://assets8.lottiefiles.com/packages/lf20_egfrW9.json'
});

$(".card2").click(function(){
  cardAnim.play();
  if(ok === true){
    playSound(currentCharacterName);
    ok = false;
  }
  setTimeout(function(){
    cardAnim.pause();
    ok = true;
  }, 3000);
});

//$(".card2 img").addClass("after-image");
var randomOption = Math.floor(Math.random()*4);
$("#" + randomOption).text(currentCharacterFullName);
const usedIndex = new Set();
usedIndex.add(randomIndex);
for(var i=0; i<4; ++i){
  if(i !== randomOption){
    var j;
    for(j=0; j<15; ++j){
      if(!usedIndex.has(j)) break;
    }
    $("#" + i).text(characterFullNameList[j]);
    usedIndex.add(j);
  }
}

$("ul li").click(function() {
  var curOpt = Number($(this).attr("id"));
  if(curOpt !== randomOption) {
    var anim = bodymovin.loadAnimation({
      container: document.getElementById("anim"),
      renderer: 'svg',
      loop: false,
      autoplay: true,
      path: 'https://assets6.lottiefiles.com/animated_stickers/lf_tgs_yi6gwkwu.json'
    });
    playSound("wrong");
    setTimeout(function(){
      anim.destroy();
    }, 1500);

  }
  else {
    var anim = bodymovin.loadAnimation({
      container: document.getElementById("anim"),
      renderer: 'svg',
      loop: false,
      autoplay: true,
      path: 'https://assets5.lottiefiles.com/animated_stickers/lf_tgs_j7miwfxd.json'
    });
    playSound("right");
    setTimeout(function(){
      cardAnim.destroy();

      $(".card2").prepend('<img />')
      $(".card2 img").attr("src", "img/"+currentCharacterName+".jpg");
      $(".card2 img").addClass("after-image");

    }, 500);
    setTimeout(function(){
      document.location.reload();
    },5000);
  }
});



$(".toggle-btn").click(function(){
  $(this).toggleClass("toggle-btn-after");

  if($("body").css("background-color") === "rgb(70, 70, 70)")
    $("body").css("background-color", "#e3e3e3");
  else $("body").css("background-color", "rgb(70, 70, 70)");

  /*if($(".card1").css("background-color") === "rgb(20, 20, 20)"){
    $(".card1").css("background-color", "rgb(255, 255, 255)");

  }
  else $(".card1").css("background-color", "rgb(20, 20, 20)");

  if($(".card2").css("background-color") === "rgb(20, 20, 20)"){
    $(".card2").css("background-color", "rgb(255, 255, 255)");
  }
  else $(".card2").css("background-color", "rgb(20, 20, 20)");*/

});
