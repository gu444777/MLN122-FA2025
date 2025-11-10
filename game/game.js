const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Nhân vật
let player = { x: 300, y: 200, size: 30, speed: 5 };

// Đồng xu
let coin = {
  x: Math.random() * (canvas.width - 20),
  y: Math.random() * (canvas.height - 20),
  size: 20
};

let score = 0;

// Điều khiển
let keys = {};
document.addEventListener("keydown", (e) => keys[e.key] = true);
document.addEventListener("keyup", (e) => keys[e.key] = false);

// Hàm cập nhật vị trí
function update() {
  if (keys["ArrowUp"]) player.y -= player.speed;
  if (keys["ArrowDown"]) player.y += player.speed;
  if (keys["ArrowLeft"]) player.x -= player.speed;
  if (keys["ArrowRight"]) player.x += player.speed;

  // Giữ nhân vật trong khung
  player.x = Math.max(0, Math.min(canvas.width - player.size, player.x));
  player.y = Math.max(0, Math.min(canvas.height - player.size, player.y));

  // Va chạm coin
  if (Math.abs(player.x - coin.x) < 25 && Math.abs(player.y - coin.y) < 25) {
    score++;
    coin.x = Math.random() * (canvas.width - 20);
    coin.y = Math.random() * (canvas.height - 20);
  }
}

// Vẽ nhân vật và coin
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Vẽ người chơi
  ctx.fillStyle = "cyan";
  ctx.fillRect(player.x, player.y, player.size, player.size);

  // Vẽ coin
  ctx.fillStyle = "gold";
  ctx.beginPath();
  ctx.arc(coin.x, coin.y, coin.size / 2, 0, Math.PI * 2);
  ctx.fill();

  // Điểm
  ctx.fillStyle = "white";
  ctx.font = "20px Arial";
  ctx.fillText("Điểm: " + score, 10, 30);
}

// Game loop
function gameLoop() {
  update();
  draw();
  requestAnimationFrame(gameLoop);
}
gameLoop();



