const canvas = document.getElementById("scope");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

const CENTER_Y = canvas.height / 2;
let phase = 0;

function drawGrid() {
  ctx.strokeStyle = "#003300";
  ctx.lineWidth = 1;

  for (let x = 0; x < canvas.width; x += 50) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.stroke();
  }

  for (let y = 0; y < canvas.height; y += 50) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    ctx.stroke();
  }
}

function drawWave() {
  ctx.beginPath();
  ctx.strokeStyle = "#00ff88";
  ctx.lineWidth = 2;
  ctx.shadowBlur = 12;
  ctx.shadowColor = "#00ff88";

  for (let x = 0; x < canvas.width; x++) {
    const t = (x / canvas.width) * Math.PI * 8;
    const y =
      CENTER_Y +
      Math.sin(t + phase) * 60 *
      (x > canvas.width * 0.25 && x < canvas.width * 0.75 ? 1 : 0.2);

    ctx.lineTo(x, y);
  }

  ctx.stroke();
  ctx.shadowBlur = 0;
}

function drawText() {
  ctx.font = "bold 120px monospace";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = "rgba(0,255,136,0.15)";
  ctx.fillText("Error 404", canvas.width / 2, CENTER_Y);
}

function animate() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  drawGrid();
  drawText();
  drawWave();

  phase += 0.03;
  requestAnimationFrame(animate);
}

animate();

// Click → back to home
document.body.addEventListener("click", () => {
  window.location.href = "index.html";
});