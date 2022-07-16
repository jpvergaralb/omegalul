
// Buttons
const closeButton = document.querySelector(".close-button")
const homeButton = document.querySelector(".home-button")
const githubButton = document.querySelector(".github-button")
const spotifyButton = document.querySelector(".spotify-button")
const catsButton = document.querySelector(".cats-button")
const snakeButton = document.querySelector(".snake-button")
const aboutButton = document.querySelector(".about-button")

githubButton.addEventListener("click", () => {
  const link = "http://localhost:8000/"
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
  const link = "http://localhost:8000/views/snake.html"
  window.location = link
})

aboutButton.addEventListener("click", () => {
  const link = "http://localhost:8000/views/about.html"
  window.location = link
})

closeButton.addEventListener("click", () => {
  const link = "https://www.youtube.com/watch?v=DFB4Iw7BHoU"
  window.location = link
})
homeButton.addEventListener("click", () => {
  const link = "http://localhost:8000/"
  window.location = link
})

// Cursor: https://github.com/tholman/cursor-effects
// new cursoreffects.rainbowCursor({length: 30, colors: ['magenta', 'red', 'purple', 'blue'], size: 4});
// new cursoreffects.fairyDustCursor({colors: ["#3131e6", "#1f2bdb", "#fd2146", "#ff3399", "#3131e6"]});
// new cursoreffects.fairyDustCursor({colors: ["purple"]});
// new cursoreffects.snowflakeCursor({colors: ["purple"]})
// new cursoreffects.trailingCursor({particles: 150});
// const targetElement = document.querySelector("#ghost")
// new cursoreffects.ghostCursor({element: targetElement});
// new cursoreffects.springyEmojiCursor({emoji: "🤷‍♂️"});