// Buttons
const closeButton = document.querySelector(".close-button")
const homeButton = document.querySelector(".home-button")
const githubButton = document.querySelector(".github-button")
const aboutButton = document.querySelector(".about-button")

githubButton.addEventListener("click", () => {
  const link = "https://github.com/jpvergaralb  "
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
    handleVisits()
    const visitorCount = localStorage.getItem("visitorCount")
    visitorText.textContent = "#" + visitorCount
  } catch(error){
      // lul do nothing
      console.log(error)
  }
})

// Free bitcoin
try {
const freeBitcoinGif = document.querySelector(".free-bitcoin")
freeBitcoinGif.addEventListener("click", () => {
  const link = "https://99bitcoins.com/bitcoin-obituaries/"
  window.location = link
})} catch(error){console.log(error)}

// Check country guess
const guessButton = document.getElementById("country-submit")
const countryAnswer = document.getElementById("country-answer")

try{
guessButton.addEventListener("click", () => {
  handleCountryGuess(countryAnswer.value)
})} catch(error){console.log(error)}

document.addEventListener("keydown", (e) => {
  if (e.key == "Enter"){
    handleCountryGuess(countryAnswer.value)
  }
})

// Guesss
// if (!bestStreak > 0){ localStorage.setItem("best-streak", "0"); console.log("entre aca") }
if (isNaN(bestStreak)){
  localStorage.setItem("best-streak", "0");
}
const countryElementName = document.querySelector("#country-element-name")
const messageFeedback = document.querySelector("#message-feedback")
const countryGuessAnswer = document.querySelector("#country-answer")
const streakElement = document.querySelector("#message-streak")
const guessInfo = document.querySelector("#guess-info")
var bestStreak = localStorage.getItem("best-streak")
guessInfo.textContent = "guess the country - best guess: " + parseInt(bestStreak)
var currentStreak = 0;

const handleCountryGuess = (guess) => {
  const countryInfoRetrieved = localStorage.getItem("countryInfoJson")
  const countryInfo = JSON.parse(countryInfoRetrieved)
  const countryName = countryInfo.name.common
  console.log(countryInfo)
  countryElementName.hidden = false; 
  if (countryName.toLowerCase() == guess.toLowerCase()){  
    messageFeedback.textContent = "correct"; messageFeedback.style.color = "green"; messageFeedback.hidden = false;
    handleStreak(true)
  } 
  else {
    if (guess.toLowerCase() == "lol"){
      messageFeedback.textContent = "lol"; messageFeedback.style.color = "black"; messageFeedback.hidden = false;
    } 
    else if (guess.toLowerCase() == "idk"){
      messageFeedback.textContent = "fair enough"; messageFeedback.style.color = "black"; messageFeedback.hidden = false;
    }  
    else {
    messageFeedback.textContent = "incorrect"; messageFeedback.style.color = "red"; messageFeedback.hidden = false;
    }
    handleStreak(false)
  } 
  setTimeout(() =>  
  {
    messageFeedback.hidden = true
    countryGuessAnswer.value = ''
  }, 1500)
  setTimeout(() =>  
  {
    countryNames()
  }, 1000)
}

const handleStreak = (isItCorrect) => {
  if (isItCorrect){
    currentStreak++
    if (parseInt(bestStreak) <= currentStreak){
      localStorage.setItem("best-streak", currentStreak.toString())
      guessInfo.textContent = "guess the country - best guess: " + parseInt(currentStreak)
      console.log(bestStreak)
    }
  } else {
    currentStreak = 0;
  }
  
  streakElement.textContent = "Current streak: " + currentStreak
  return
}