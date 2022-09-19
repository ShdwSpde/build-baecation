document.getElementById("newyork").addEventListener('click', vacationNy)
document.getElementById("neworleans").addEventListener('click', vacationNo)
document.getElementById("newmexico").addEventListener('click', vacationNm)
document.getElementById("italy").addEventListener('click', vacationIt)
document.getElementById("jamaica").addEventListener('click', vacationJm)
document.getElementById("amsterdam").addEventListener('click', vacationAm)
document.getElementById("seattle").addEventListener('click', vacationSe)

let sound = document.getElementsByTagName("audio"); 



function pauseAudio() { 
  sound.pause(); 
}

function vacationNy() {
  document.querySelector('body').style.backgroundImage = "url('https://media.istockphoto.com/photos/new-york-city-nyc-usa-picture-id615398376?k=20&m=615398376&s=612x612&w=0&h=5PVCORPJEjAxSy_Hei_hSK3OtNJMz8SHDicMN2R4X60=')"
  document.querySelector('body').style.backgroundRepeat = 'no-repeat'
  document.querySelector('body').style.backgroundPosition = 'center'
  document.querySelector('body').style.backgroundSize = 'cover'
  document.querySelector('h1').style.color = 'white'
  document.querySelector('#frank').style.display = 'block'
  document.querySelector('#damian').style.display = 'none'
  document.querySelector('#amore').style.display = 'none'
  document.querySelector('#bas').style.display = 'none'
  document.querySelector('#louis').style.display = 'none'
  document.querySelector('#mia').style.display = 'none'
  document.querySelector('#sol').style.display = 'none'
	}
function vacationNo() {
  document.querySelector('body').style.backgroundImage = "url(https://i.ibb.co/THjYXKB/IMG-7565-CR2.jpg)"
  document.querySelector('body').style.backgroundRepeat = 'no-repeat'
  document.querySelector('body').style.backgroundPosition = 'center'
  document.querySelector('body').style.backgroundSize = 'cover'
  document.querySelector('h1').style.color = 'white'
   document.querySelector('#frank').style.display = 'none'
  document.querySelector('#damian').style.display = 'none'
  document.querySelector('#amore').style.display = 'none'
  document.querySelector('#bas').style.display = 'none'
  document.querySelector('#louis').style.display = 'block'
  document.querySelector('#mia').style.display = 'none'
  document.querySelector('#sol').style.display = 'none'
	}

function vacationNm() {
  document.querySelector('body').style.backgroundImage = "url(https://i.ibb.co/xGkt64B/IMG-4777.jpg)"
  document.querySelector('body').style.backgroundRepeat = 'no-repeat'
  document.querySelector('body').style.backgroundPosition = 'center'
  document.querySelector('body').style.backgroundSize = 'cover'
  document.querySelector('h1').style.color = 'white'
   document.querySelector('#frank').style.display = 'none'
  document.querySelector('#damian').style.display = 'none'
  document.querySelector('#amore').style.display = 'none'
  document.querySelector('#bas').style.display = 'block'
  document.querySelector('#louis').style.display = 'none'
  document.querySelector('#mia').style.display = 'none'
  document.querySelector('#sol').style.display = 'none'
}

function vacationIt() {
  document.querySelector('body').style.backgroundImage = "url(https://i.ibb.co/6XtFwpq/IMG-5992.jpg)"
  document.querySelector('body').style.backgroundRepeat = 'no-repeat'
  document.querySelector('body').style.backgroundPosition = 'center'
  document.querySelector('body').style.backgroundSize = 'cover'
  document.querySelector('h1').style.color = 'white'
   document.querySelector('#frank').style.display = 'none'
  document.querySelector('#damian').style.display = 'none'
  document.querySelector('#amore').style.display = 'block'
  document.querySelector('#bas').style.display = 'none'
  document.querySelector('#louis').style.display = 'none'
  document.querySelector('#mia').style.display = 'none'
  document.querySelector('#sol').style.display = 'none'
	}

function vacationAm() {
  document.querySelector('body').style.backgroundImage = "url(https://i.ibb.co/K2sxhrN/20170316-141222-HDR.jpg)"
  document.querySelector('body').style.backgroundRepeat = 'no-repeat'
  document.querySelector('body').style.backgroundPosition = 'center'
  document.querySelector('body').style.backgroundSize = 'cover'
  document.querySelector('h1').style.color = 'black'
  document.querySelector('#frank').style.display = 'none'
  document.querySelector('#damian').style.display = 'none'
  document.querySelector('#amore').style.display = 'none'
  document.querySelector('#bas').style.display = 'none'
  document.querySelector('#louis').style.display = 'none'
  document.querySelector('#mia').style.display = 'block'
  document.querySelector('#sol').style.display = 'none'
	}

function vacationJm() {
  document.querySelector('body').style.backgroundImage = "url(https://i.ibb.co/RT0bxTL/IMG-7482-CR2.jpg)"
  document.querySelector('body').style.backgroundRepeat = 'no-repeat'
  document.querySelector('body').style.backgroundPosition = 'center'
  document.querySelector('body').style.backgroundSize = 'cover'
  document.querySelector('h1').style.color = 'white'
  document.querySelector('#frank').style.display = 'none'
  document.querySelector('#damian').style.display = 'block'
  document.querySelector('#amore').style.display = 'none'
  document.querySelector('#bas').style.display = 'none'
  document.querySelector('#louis').style.display = 'none'
  document.querySelector('#mia').style.display = 'none'
  document.querySelector('#sol').style.display = 'none'
	}

function vacationSe() {
  document.querySelector('body').style.backgroundImage = "url(https://i.ibb.co/kBC0Xcd/IMG-4886.jpg)"
  document.querySelector('body').style.backgroundRepeat = 'no-repeat'
  document.querySelector('body').style.backgroundPosition = 'center'
  document.querySelector('body').style.backgroundSize = 'cover'
  document.querySelector('h1').style.color = 'black'
  document.querySelector('#frank').style.display = 'none'
  document.querySelector('#damian').style.display = 'none'
  document.querySelector('#amore').style.display = 'none'
  document.querySelector('#bas').style.display = 'none'
  document.querySelector('#louis').style.display = 'none'
  document.querySelector('#mia').style.display = 'none'
  document.querySelector('#sol').style.display = 'block'
	}
	
