let messageArray = ["I'm a Full Stack Web Developer."];
let textPosition = 0;
let speed = 50;

typewriter = () => {
  document.querySelector("#sub-header").
  innerHTML = messageArray[0].substring(0,
  textPosition);

  if(textPosition++ != messageArray[0].length)
    setTimeout(typewriter, speed);
}

window.addEventListener("load", typewriter);
