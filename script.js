window.addEventListener("deviceorientation", handleOrientation, true);
let box = document.querySelector('#box')

function handleOrientation(event) {
  var absolute = event.absolute;
  var alpha = event.alpha; 
  var beta = event.beta;
  var gamma = event.gamma;

  box.innerHTML = `alpha: ${Math.round(alpha)}, beta: ${Math.round(beta)}, gamma: ${Math.round(gamma)}`;

  box.style.transform = `rotateZ(${gamma}deg)`;
}