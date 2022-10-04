function DoAnimation() {
    var boomDiv = document.getElementById("boom");
    var body = document.getElementById("body");

    boomDiv.style.animationPlayState = "running"
    body.style.animationPlayState = "running"

  }

document.addEventListener("mousemove", (e) => {

  const mouseX = e.clientX;
  const mouseY =e.clientY;

  if(mouseY < 260){
    return
  }
  console.log(mouseY);
  const anchor = document.getElementById("anchor");
  const rekt = anchor.getBoundingClientRect();

  const anchorX = rekt.left + rekt.width / 2;
  const anchorY = rekt.top + rekt.height / 2;

  const angleDeg = angle(mouseX,mouseY, anchorX, anchorY);
  const eyes = document.querySelectorAll(".eye");
  eyes.forEach(eye => {
    eye.style.transform = `rotate(${90 + angleDeg}deg`;
  })

})

function angle(cx, cy, ex, ey){
  const dy = ey - cy;
  const dx = ex - cx;

  const rad = Math.atan2(dy, dx) // range -pi to pi
  const deg = rad * 180/Math.PI;

  return deg;


}