const resultContainer = document.querySelector(".result-container")
const resultContainer2 = document.querySelector(".result-container-2")

const bitcoinPrice = document.querySelector(".shitcoin-price")
const lastDayPerformance = document.querySelector(".last-day-performance")
const fromAth = document.querySelector(".percentage-from-ath")

// ----------- > Handles
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
}

const handleGecko = (response) => {
  const btc = response[0] //if this no longer represents btc --> omegalul
  const price = btc.current_price
  const from_ath = Math.round(btc.ath_change_percentage)
  bitcoinPrice.textContent = "$"+price
  fromAth.textContent = from_ath+"% from ath"
  const lastDay = Math.round(btc.price_change_percentage_24h)
  lastDayPerformance.textContent = lastDay+"% in the last 24hrs"
}

const handleCountryName = (response) => {
  const randomNumber = Math.round(Math.random() * (response.length))
  const country = response[randomNumber]
  const countryName = country.name.official
  const countryImg = country.flags.png

  const countryElementName = document.createElement("p")
  const countryElementImage = document.createElement("img")

  resultContainer2.append(countryElementName); resultContainer2.append(countryElementImage);
  countryElementName.textContent = countryName; countryElementImage.setAttribute("src", countryImg)
  console.log(countryImg)
}

// ----------- > Apis
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

const coinGecko = () => {
  const response = fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc`)
  .then(response => response.json())
  .then(responseJSON => handleGecko(responseJSON))
  .catch(error => {console.log(error)})
  
}

const countryNames = () => {
  const response = fetch(`https://restcountries.com/v3.1/all`)
  .then(response => response.json())
  .then(responseJSON => handleCountryName(responseJSON))
  .catch(error => {console.log(error)})
}

window.onload = () => {
  catImgAPI()
  catFactAPI()
  coinGecko()
  countryNames()
}



