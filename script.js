// Buttons
const closeButton = document.querySelector(".close-button")
const homeButton = document.querySelector(".home-button")
const githubButton = document.querySelector(".github-button")
const snakeButton = document.querySelector(".snake-button")
const aboutButton = document.querySelector(".about-button")

githubButton.addEventListener("click", () => {
  const link = "https://github.com/jpvergaralb  "
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
new cursoreffects.rainbowCursor({length: 30, colors: ['red', 'orange', 'yellow', 'green', 'cyan', 'blue'], size: 3});
// new cursoreffects.fairyDustCursor({colors: ["#3131e6", "#1f2bdb", "#fd2146", "#ff3399", "#3131e6"]});
// new cursoreffects.fairyDustCursor({colors: ["purple"]});
// new cursoreffects.snowflakeCursor({colors: ["purple"]})
// new cursoreffects.trailingCursor({particles: 15});
// const targetElement = document.querySelector("#ghost")
// new cursoreffects.ghostCursor({element: targetElement});
// new cursoreffects.springyEmojiCursor({emoji: "🤷‍♂️"});

// Time
const timeNumber = document.querySelector("#random-number")
const currentTime = document.querySelector(".current-time")
const updateTime = () => {
  try {
    timeNumber.textContent++
    timeNumber.setAttribute("value", timeNumber.textContent)
  }
  catch(error){
    // console.log(error)
  }
  const now = new Date();
  if (now.getMinutes()<10){
    const currentHours = now.getHours() + ':' + "0" + now.getMinutes();
    currentTime.textContent = currentHours; return;
  } else {
    const currentHours = now.getHours() + ':' + now.getMinutes();
    currentTime.textContent = currentHours; return;
  }
  
}
setInterval(updateTime, 1000)


// Trying to get visitor count
const visitorText = document.querySelector("#visitor-number")
window.addEventListener("load", () => {
  try {  
    console.log("page fully loaded")
    handleVisits()
    const visitorCount = localStorage.getItem("visitorCount")
    visitorText.textContent = "#" + visitorCount
    console.log("count" + visitorCount, "text" + visitorText)
  } catch(error){
      // lul do nothing
      console.log(error)
  }
})


// Free bitcoin
const freeBitcoinGif = document.querySelector(".free-bitcoin")
freeBitcoinGif.addEventListener("click", () => {
  const link = "https://99bitcoins.com/bitcoin-obituaries/"
  window.location = link
})