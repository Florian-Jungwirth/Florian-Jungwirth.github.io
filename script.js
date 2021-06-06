window.addEventListener("deviceorientation", handleOrientation, true);

function handleOrientation(event) {
    var absolute = event.absolute;
    var alpha    = event.alpha;
    var beta     = event.beta;
    var gamma    = event.gamma;
  
    document.body.innerHTML = `alpha: ${Math.round(alpha)}, beta: ${Math.round(beta)}, gamma: ${Math.round(gamma)}`;
  }