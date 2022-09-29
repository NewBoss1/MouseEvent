const colortext = document.querySelector("div.text-form:first-child h1");

function handTitleClick() {
  colortext.innerText = "Mouse is click";
  colortext.style.color = "aquamarine";
}

function handmousedown() {
  colortext.innerText = "Mouse is right click";
  colortext.style.color = "pink";
}

function handMouseEnter() {
  colortext.innerText = "Mouse is here!!";
  colortext.style.color = "tomato";
}

function handMouseLeave() {
  colortext.innerText = "Mouse is gone!!";
  colortext.style.color = "blue";
}

function handleWindowRisize() {
  colortext.innerText = "Window just resize!";
  colortext.style.color = "chartreuse";
}

colortext.addEventListener("click", handTitleClick);
colortext.addEventListener("mousedown", handmousedown);
colortext.addEventListener("mouseenter", handMouseEnter);
colortext.addEventListener("mouseleave", handMouseLeave);

window.addEventListener("resize", handleWindowRisize);
