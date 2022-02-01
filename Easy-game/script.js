var character = document.getElementById("character");
var block = document.getElementById("block");
var counter = 0;
var i = 0;
var blockReach = false;
//var letter =["a","b","c","d"]
var letter = ["images/test.jpg", "images/test1.jpg"];
//letter[0] = new Image();
//letter[0].src = "images/test.jpg";
//letter[1] = new Image();
//letter[1].src = "images/test1.jpg";
function jump() {
  if (character.classList == "animate") {
    return;
  }
  character.classList.add("animate");
  setTimeout(function () {
    character.classList.remove("animate");
  }, 3000);
}

var checkDead = setInterval(function () {
  let characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  let blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );
  if (blockLeft < 20 && blockLeft > -20 && characterTop >= 130) {
    block.style.animation = "none";
    alert("Game Over. score: " + Math.floor(counter / 100));
    block.innerHTML = letter[i];
    block.style.animation = "block 3s infinite linear";
  } else if (blockLeft === 0 && !blockReach) {
    letterChanger();
    blockReach = true;
  } else if (blockLeft > 0 && blockReach) {
    blockReach = false;
  } else {
    counter++;
    document.getElementById("scoreSpan").innerHTML = Math.floor(counter / 100);
  }
}, 10);

function letterChanger() {
  i++;
  if (i === letter.length) i = 0;
  letterUpdate();
}




function letterUpdate() {
  block.innerHTML = letter[i];
}
