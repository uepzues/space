const body = document.querySelector('body')

const currentLocation = document.URL.split('/').pop()

switch (currentLocation) {
  case '':
    body.style.backgroundImage = `url(/assets/images/home/background-home-desktop.jpg)`
    break
  case 'Destination':
    body.style.backgroundImage = `url(/assets/images/destination/background-destination-desktop.jpg)`
    break
  case 'Crew':
    body.style.backgroundImage = `url(/assets/images/crew/background-crew-desktop.jpg)`
    break
  case 'Technology':
    body.style.backgroundImage = `url(/assets/images/technology/background-technology-desktop.jpg)`
    break
  default:
    body.style.backgroundImage = `url(/assets/images/home/background-home-desktop.jpg)`
}
