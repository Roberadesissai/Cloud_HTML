
var w = new Audio('sounds/tom-1.mp3');
var a = new Audio('sounds/tom-2.mp3');
var s = new Audio('sounds/tom-3.mp3');
var d = new Audio('sounds/tom-4.mp3');
var j = new Audio('sounds/snare.mp3');
var k = new Audio('sounds/crash.mp3');
var l = new Audio('sounds/kick-bass.mp3');


document.addEventListener('keydown', function(event) {
    if (event.key === 'w') {
        w.play();
        buttonAnimation(event.key);
    } else if (event.key === 'a') {
        a.play();
        buttonAnimation(event.key);
    } else if (event.key === 's') {
        s.play();
        buttonAnimation(event.key);
    } else if (event.key === 'd') {
        d.play();
        buttonAnimation(event.key);
    } else if (event.key === 'j') {
        j.play();
        buttonAnimation(event.key);
    } else if (event.key === 'k') {
        k.play();
        buttonAnimation(event.key);
    } else if (event.key === 'l') {
        l.play();
        buttonAnimation(event.key);
    }
    });



    
var numberOfDrumButtons = document.querySelectorAll('.drum').length;


for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll('.drum')[i].addEventListener('click', function() {
    // 
    var buttonInnerHTML = this.innerHTML;
    switch (buttonInnerHTML) {
      case 'w':
        w.play();
        buttonAnimation(buttonInnerHTML);
        break;
      case 'a':
        a.play();
        buttonAnimation(buttonInnerHTML);
        break;
      case 's':
        s.play();
        buttonAnimation(buttonInnerHTML);
        break;
      case 'd':
        d.play();
        buttonAnimation(buttonInnerHTML);
        break;
      case 'j':
        j.play();
        buttonAnimation(buttonInnerHTML);
        break;
      case 'k':
        k.play();
        buttonAnimation(buttonInnerHTML);
        break;
      case 'l':
        l.play();
        buttonAnimation(buttonInnerHTML);
        break;
    }
  });

  
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector('.' + currentKey);
  activeButton.classList.add('pressed');
  setTimeout(function() {
    activeButton.classList.remove('pressed');
  }, 100);
}





