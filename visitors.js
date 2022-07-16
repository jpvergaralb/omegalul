const handleVisits = () => {
  const visitorCount = localStorage.getItem(("visitorCount"))
  if (parseInt(visitorCount) > 0){
    let visitorCountInt =  parseInt(visitorCount)
    visitorCountInt++
    localStorage.setItem("visitorCount", visitorCountInt.toString())
    console.log(visitorCount); return;
  }
  else {
    const initialCount = "1";
    localStorage.setItem("visitorCount", initialCount); return;
  }
}

