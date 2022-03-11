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
  playAudio("../Frank Sinatra - New York, New York..mp3")
  document.querySelector('body').style.backgroundImage = "url(https://lh3.googleusercontent.com/kHZ4AkHEzxH1kRLyTmh3bNNHurRMiPvfiL_ZG3ZC3sOuj7Lf45_ntCtI8UzuED5aHUEiTyYP_blinizdMGCRrLFuxi7g9VonlGZdCnqVpMB7Wsjc7RbOyx60zRQBV4IQtcz63YRpW-NVROgwwBedKtjxhnTMrLFSlCxmLq0WoEAb9p0wFYeXPnXs4e6w1Ax-j6PnjPCeLY0qGmwxdfo88ZPlCVSaefMjOMWJlfSjDYsaZDxX62eLKpmRhZWnuSVoOdlHe6YlrX8TNkgUOc44BohwzK64LXAv9VStGp5Anqm_4uRLle531SDMZWhSFRcDmILPjPaXL47jmf-0r0GEd6xflzqWwOUd46ObBX55i8dDHVcyBdYjywl8GUXQ53jDyifsy4yGhP61l8fVwiJU-jVaWcmQZMGlgAC7Jwq0vcc36cKe7h5YuS2-dhueg4yqgr0YNmn6RHWdh58vm0mtLgnrAl3Ittt4nfZrdf8tW1qPnsXisKuVDRRj7prElFrh17PHCUK9fxaAUyWQtmG1Sfwss8ZnRT85G_l2F-Whh7v2WH35xFMoDwzC4L0nX4Eijz124ORsz6RAzKsqsb6hlbyFIhQwj3QxRLDYJKEqht02XZ0Gug1fkMVQEHTBLJ_i1EZhT-rjBotrlAbUN9VWtBwsYSLPSq-j0ezikhGCZkiTholSIK0gQn0cDwtrnnXP8qDLoSMUycZaKWgP3Z3ceadG=w764-h509-no?authuser=0)"
  document.querySelector('body').style.color = 'black'
  document.querySelector('body').style.fontFamily = "Arial";
	}

function vacationNo() {
  playAudio("../Louis Armstrong - What A Wonderful World (Original Spoken Intro Version) ABC Records 1967, 1970.mp3")
  document.querySelector('body').style.backgroundImage = "url()"IMG_7565.CR2.jpg
  document.querySelector('body').style.color = 'black'
  document.querySelector('body').style.fontFamily = "Arial";
	}

function vacationNm() {
  playAudio("../FKJ & Bas - Risk (Official Music Video).mp3")
  document.querySelector('body').style.backgroundImage = "url(IMG_4777.JPG)"
  document.querySelector('body').style.color = 'black'
  document.querySelector('body').style.fontFamily = "Arial";
	}

function vacationIt() {
  playAudio("../Dean Martin - That's Amore.mp3")
  document.querySelector('body').style.backgroundImage = "url(IMG_5873.JPG)"
  document.querySelector('body').style.color = 'black'
  document.querySelector('body').style.fontFamily = "Arial";
	}

function vacationAm() {
  playAudio("../M.I.A. - Paper Planes.mp3")
  document.querySelector('body').style.backgroundImage = "url(https://lh3.googleusercontent.com/BLOr_uNzBCxAfvQO8U5PRDA0MWprfSgxaU-5fq3Nzsus6GskH_EjE8i3kJS-kp65vq1E3ayI3zW0tl1CtcQPljoUGSTito3pBM6IydXPyy0-FGP9NPbNzX1D-0DqlY94QXzYoXLy0D4U0z8QZUeb5dEAz1sB2LSpfyNOIPII1n8M1ZGFs2JVyJ71Em6TXCPz0Z6zFzvl45xFa-CVKLmPfBQNpf0frqoWEn0mnwUDMr2eEZI_zjQOWslsU7cDhnJZwcP7-8kXhBUDeLdiHtVZZ4Gwkg76pAyetb6kk4DQs2Uw62c9DuTQo96UwCgGuH5D_trda5EoulSogcfrHlQ4sPOGEzWotVE4_cOlcFLoPrhVkcBlqF0zQcI2WAJ5nIRB1SpursqicevkdDA6SRjSyZAT7ga_zY9J8AFr519NaWdHnsN-7TSsNjXjk_wcqwlvQYJ2ow1uM1SF-3E69jZL5ol4Z2qGUX3ujxM2q-NukazSKhYwDFrqHUTxVk1vWCX_wD6sLRMlDkMzs-N-JB05ZwUiFEv0MRkP8B3ekdBRhoMlvT5MS8mktOsDSCioiMtXfUO9jrmMb6sG4GWdjHC9TOvO4Okqa9UyU7rZu-TevcSxDycpgtZDvHt5lC1tc0LtlxvORtbvdfdHhLVpAfH4Me6m-zER7tlaNi42ofeRKhlHex2UwTlWeWo3jN5LIUpIrci_MfEnHUn1UG0H8cayNTC9MA=w764-h509-no?authuser=0)"
  document.querySelector('body').style.color = 'black'
  document.querySelector('body').style.fontFamily = "Arial";
	}

function vacationJm() {
  playAudio("../Damian Marley - Welcome To Jamrock.mp3")
  document.querySelector('body').style.backgroundImage = "url(IMG_0417.JPG)"
  document.querySelector('body').style.color = 'black'
  document.querySelector('body').style.fontFamily = "Arial";
	}

function vacationSe() {
  playAudio("../Sol - 2020 (Official Video).mp3")
  document.querySelector('body').style.backgroundImage = "url(IMG_4886.JPG)"
  document.querySelector('body').style.color = 'black'
  document.querySelector('body').style.fontFamily = "Arial";
	}
	
