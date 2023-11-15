function initializeBreakout() {
  const canvas = document.getElementById('gameCanvas');
  if (!canvas.getContext) {
    alert('ご利用のブラウザではこのゲームをプレイできません。');
    return;
  }
  const ctx = canvas.getContext('2d');

  canvas.width = 480;
  canvas.height = 320;

  let x = canvas.width / 2;
  let y = canvas.height - 30;
  let dx = 2;
  let dy = -2;
  const ballRadius = 10;
  const paddleHeight = 10;
  const paddleWidth = 75;
  let paddleX = (canvas.width - paddleWidth) / 2;
  let rightPressed = false;
  let leftPressed = false;
  const brickRowCount = 3;
  const brickColumnCount = 5;
  const brickWidth = 75;
  const brickHeight = 20;
  const brickPadding = 10;
  const brickOffsetTop = 30;
  const brickOffsetLeft = 30;
  let score = 0;

  let bricks = [];
  for (let c = 0; c < brickColumnCount; c++) {
    bricks[c] = [];
    for (let r = 0; r < brickRowCount; r++) {
      bricks[c][r] = { x: 0, y: 0, status: 1 };
    }
  }

  // 以降、以前のコードと同様（drawBricks, drawBall, drawPaddle, drawScore, collisionDetection, draw, keyDownHandler, keyUpHandler）

  document.addEventListener("keydown", keyDownHandler, false);
  document.addEventListener("keyup", keyUpHandler, false);

  draw();
}

function loadGame(game) {
  if (game === 'breakout') {
    initializeBreakout();
  } else {
    document.getElementById('game-container').innerHTML = '<p>選択されたゲームは利用できません。</p>';
  }
}

function getQueryParam(param) {
  const searchParams = new URLSearchParams(window.location.search);
  return searchParams.get(param);
}

window.onload = function() {
  const game = getQueryParam('game');
  loadGame(game);
};
