const resultContainer = document.querySelector(".result-container")

const handleImg = (response) => {
  const catImage = document.createElement("img")
  const imageURL = response.url
  resultContainer.append(catImage)
  catImage.setAttribute("src", imageURL)
}

const handleFact = (response) => {
  const catFact = document.createElement("p")
  const fact = response.data
  resultContainer.append(catFact)
  catFact.textContent = fact
  // console.log(response) 
}

const catImgAPI = () => {
  const response = fetch(`https://cataas.com/cat/gif`)
  .then(response => handleImg((response)))
  .catch(error => {console.log(error)})
}

const catFactAPI = () => {
  const response = fetch(`https://meowfacts.herokuapp.com`)
  .then(response => response.json())
  .then(responseJSON => handleFact(responseJSON))
  .catch(error => {console.log(error)})
}

window.onload = () => {
  catImgAPI()
  catFactAPI()
}
