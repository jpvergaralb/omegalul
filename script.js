
// Buttons
const closeButton = document.querySelector(".close-button")
const homeButton = document.querySelector(".home-button")
const githubButton = document.querySelector(".github-button")
const spotifyButton = document.querySelector(".spotify-button")
const catsButton = document.querySelector(".cats-button")
const snakeButton = document.querySelector(".snake-button")
const aboutButton = document.querySelector(".about-button")

githubButton.addEventListener("click", () => {
  const link = "/#/"
  window.location = link
})

spotifyButton.addEventListener("click", () => {
  const link = "http://localhost:8000/"
  window.location = link
})

catsButton.addEventListener("click", () => {
  const link = "http://localhost:8000/"
  window.location = link
})

snakeButton.addEventListener("click", () => {
  const link = "/#/views/snake.html"
  window.location = link
})

aboutButton.addEventListener("click", () => {
  const link = "http://localhost:8000/views/about.html"
  window.location = link
})

closeButton.addEventListener("click", () => {
  const link = "https://www.youtube.com/watch?v=ncWgoD2MDnQ"
  window.location = link
})
homeButton.addEventListener("click", () => {
  const link = "http://localhost:8000/"
  window.location = link
})

// Buttons