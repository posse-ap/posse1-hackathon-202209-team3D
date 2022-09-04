const imageTotalNumber = 6,
mainImageElement = document.getElementById('mainImage')
imageListElement = document.getElementById('imagelist')
prevImageElement = document.getElementById('prevImage'),
nextImageElement = document.getElementById('nextImage')


let currentSlideNumber = 1

mainImageElement.setAttribute('src', '../img/img-1.jpg')

function changeSlideStatus() {
  if (currentSlideNumber === 1) {
    prevImageElement.classList.add('inActive')
  } else {
    prevImageElement.classList.remove('inActive')
  }
  
  if (currentSlideNumber === imageTotalNumber) {
    nextImageElement.classList.add('inActive')
  } else {
    nextImageElement.classList.remove('inActive')
  }

  document.getElementById('currentSlideNumber').textContent = `${currentSlideNumber} / ${imageTotalNumber}`
}
changeSlideStatus()

for (let i = 0; i < imageTotalNumber; i++) {
  const liElement = document.createElement('li')
  liElement.style.backgroundImage = `url(../img/img-${i + 1}.jpg)`

  liElement.addEventListener('click', () => {
    mainImageElement.setAttribute('src', `../img/img-${i + 1}.jpg`)
    currentSlideNumber = i + 1
    changeSlideStatus()
  })

  imageListElement.appendChild(liElement)
}

prevImageElement.addEventListener('click', () => {
  if (currentSlideNumber !== 1) {
    currentSlideNumber--
    mainImageElement.setAttribute('src', `../img/img-${currentSlideNumber}.jpg`)
    changeSlideStatus()
  }
})

nextImageElement.addEventListener('click', () => {
  if (currentSlideNumber !== imageTotalNumber) {
    currentSlideNumber++
    mainImageElement.setAttribute('src', `../img/img-${currentSlideNumber}.jpg`)
    changeSlideStatus()
  }
})