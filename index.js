window.onload = () => {
  const canvasCircle = document.getElementById("strangeCircle");
  const ctx = canvasCircle.getContext("2d");
  const circle = document.getElementById("circle");
  ctx.drawImage(circle, 0, 0);

  document.body.removeChild(circle);
};
