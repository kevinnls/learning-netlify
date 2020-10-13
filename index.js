window.onkeyup = (event) => {
  if (event.keyCode === 13 && event.target.nodeName === "BODY") {
    disco();
  } else if (
    event.keyCode === 27 &&
    document.getElementById("modal").style.display === "block"
  ) {
    info();
  } else if (event.key === "i") {
    info();
  } else true;
};

window.onclick = (event) => {
  const modal = document.getElementById("modal");
  console.log(event.composedPath());
  if (
    event.target.nodeName === "BUTTON" ||
    event.target.classname === /.*button.*/
  ) {
    event.target.blur();
  } else if (event.target === modal) {
    info();
  } else return true;
};
function disco() {
  console.log("discooo!");
  let clr = { r: 0, g: 0, b: 0 };
  for (color in clr) {
    clr[color] = Math.floor(Math.random() * 256);
  }
  document.body.style.backgroundColor = `rgb(${clr.r},${clr.g},${clr.b})`;
}
function info() {
  document.getElementById("modal").style.display =
    document.getElementById("modal").style.display === "flex" ? "none" : "flex";
}
