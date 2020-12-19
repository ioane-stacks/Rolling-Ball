var player = document.getElementById('player');
var block = document.getElementById('block');
var gameBoard = document.getElementById('gameBoard');
var startGame = document.getElementById('startGame');
var gameHead = document.getElementById('gameHead');
var GameOver = document.getElementById('GameOver');

var blockHeight = 0;

function BlockModel() {
    setInterval(function () {
        var blockRight = parseInt(window.getComputedStyle(block).getPropertyValue('right'));
        if(blockRight < -40) {
            blockHeight = Math.floor(Math.random() * 120) + 60;
            block.style.height = blockHeight + 'px';
        }
    }, 30);
}


//Boolean
var isGameStarted = false;

function StartGame() {
    startGame.style.display = 'none';
    gameHead.style.display = 'none';
    block.classList.add('animateBlock');
    isGameStarted = true;
    BlockModel();
}

function Jump() {
    if (isGameStarted == true) {
        if (player.classList != 'animate') {
            player.classList.add('playerJump');
        }
        setTimeout(function () {
            player.classList.remove('playerJump');
        }, 800);
    }
}

var gameOver = setInterval(function () {
    var playerTop = parseInt(window.getComputedStyle(player).getPropertyValue('top'));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    if(blockLeft < 90 && blockLeft > 0 && playerTop >= 180) {
        block.style.animation = 'none';
        block.style.display = 'none';
        player.style.animation = 'none';
        player.style.display = 'none';
        GameOver.style.display = 'block';
    }
}, 10);

window.addEventListener("keydown", function (e) {
    switch (e.key) {
        case ' ':
            Jump();
            break;
    }
})
