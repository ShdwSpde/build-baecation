document.getElementById("newyork").onclick = vacationNy
document.getElementById("neworleans").onclick = vacationNo
document.getElementById("newmexico").onclick = vacationNm
document.getElementById("italy").onclick = vacationIt
document.getElementById("jamaica").onclick = vacationJm
document.getElementById("amsterdam").onclick = vacationAm
document.getElementById("seattle").onclick = vacationSe
			
function playAudio(url) {
  new Audio(url).play();
	}

function vacationNy() {
  document.querySelector('body').style.backgroundImage = "url(https://i.ibb.co/VmpMksg/IMG-2456.jpg)"
  document.querySelector('body').style.color = 'black'
  document.querySelector('body').style.fontFamily = "Arial";
  document.getElementById('body').style.backgroundSize = "400px 800px";
	}

function vacationNo() {
  document.querySelector('body').style.backgroundImage = "url(https://i.ibb.co/THjYXKB/IMG-7565-CR2.jpg)"
  document.querySelector('body').style.color = 'black'
  document.querySelector('body').style.fontFamily = "Arial";
  document.getElementById('body').style.backgroundSize = "400px 800px";
	}

function vacationNm() {
  document.querySelector('body').style.backgroundImage = "url(https://i.ibb.co/xGkt64B/IMG-4777.jpg)"
  document.querySelector('body').style.color = 'black'
  document.querySelector('body').style.fontFamily = "Arial";
  document.querySelector('body').style.backgroundSize = "400px 800px";
	}

function vacationIt() {
  document.querySelector('body').style.backgroundImage = "url(https://i.ibb.co/6XtFwpq/IMG-5992.jpg)"
  document.querySelector('body').style.color = 'black'
  document.querySelector('body').style.fontFamily = "Arial";
  document.querySelector('body').style.backgroundSize = "400px 800px";
	}

function vacationAm() {
  document.querySelector('body').style.backgroundImage = "url(https://i.ibb.co/K2sxhrN/20170316-141222-HDR.jpg)"
  document.querySelector('body').style.color = 'black'
  document.querySelector('body').style.fontFamily = "Arial";
  document.querySelector('body').style.backgroundSize = "400px 800px";
	}

function vacationJm() {
  document.querySelector('body').style.backgroundImage = "url(https://i.ibb.co/RT0bxTL/IMG-7482-CR2.jpg)"
  document.querySelector('body').style.color = 'black'
  document.querySelector('body').style.fontFamily = "Arial";
  document.querySelector('body').style.backgroundSize = "400px 800px";
	}

function vacationSe() {
  document.querySelector('body').style.backgroundImage = "url(https://i.ibb.co/kBC0Xcd/IMG-4886.jpg)"
  document.querySelector('body').style.color = 'black'
  document.querySelector('body').style.fontFamily = "Arial";
  document.querySelector('body').style.backgroundSize = "400px 800px";
	}
	
