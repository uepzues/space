const body = document.querySelector('body')

const location = document.URL.split('/').pop()

switch (location) {
  case '':
    body.style.backgroundImage = `url(/src/assets/images/home/background-home-desktop.jpg)`
    break
  case 'Destination':
    body.style.backgroundImage = `url(/src/assets/images/destination/background-destination-desktop.jpg)`
    break
  case 'Crew':
    body.style.backgroundImage = `url(/src/assets/images/crew/background-crew-desktop.jpg)`
    break
  case 'Technology':
    body.style.backgroundImage = `url(/src/assets/images/technology/background-technology-desktop.jpg)`
    break
  default:
    body.style.backgroundImage = `url(/src/assets/images/home/background-home-desktop.jpg)`
}
