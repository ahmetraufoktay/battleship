// a nice ship moving experimental code
function mousedown(e) {
  const ship = e.target;
  ship.style.top = ship.offsetTop + "px";
  ship.style.left = ship.offsetLeft + "px";
  ship.style.position = "absolute";

  let startX = e.clientX;
  let startY = e.clientY;

  document.addEventListener("mousemove", mouseMove);
  document.addEventListener("mouseup", mouseUp);

  function mouseMove(e) {
    let newX = startX - e.clientX;
    let newY = startY - e.clientY;

    startX = e.clientX;
    startY = e.clientY;

    ship.style.top = ship.offsetTop - newY + "px";
    ship.style.left = ship.offsetLeft - newX + "px";
  }

  function mouseUp(e) {
    document.removeEventListener("mousemove", mouseMove);
  }
}
