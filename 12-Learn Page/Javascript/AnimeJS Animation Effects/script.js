let container = document.querySelector('.container');
for (let i = 1; i < 901; i++) {
    let dot = document.createElement('div');
    dot.classList.add('element');
    container.appendChild(dot);
}

let grid = [30, 30]
let dotAll = document.querySelectorAll('.element');
let animation = anime.timeline({
    targets: dotAll,
    easing: 'easeInOutSine',
    loop: true,
})

animation
    .add({
        rotate: function () { return anime.random(-360, 360) },
        tramslateY: function () { return anime.random(-150, 150) },
        translateX: function () { return anime.random(-150, 150) },
        delay: anime.stagger(100, { grid: grid, from: ''}),
        keyframes: [
    

        ],
    })
    .add({
        rotate: function () { return anime.random(-360, 360) },
        tramslateY: function () { return anime.random(-150, 150) },
        translateX: function () { return anime.random(-150, 150) },
        delay: anime.stagger(100, { grid: grid, from: 'center'}),
        keyframes: [

        ],
    })
    .add({
        rotate: function () { return anime.random(0, 0) },
        tramslateY: function () { return anime.random(0, 0) },
        translateX: function () { return anime.random(0, 0) },
        delay: anime.stagger(100, { grid: grid, from: 'last'}),
        keyframes: [
        ],
    })