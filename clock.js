function updateTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    // var seconds = currentTime.getSeconds();
    var year = currentTime.getFullYear();
    let date = new Date().toLocaleDateString()

    show.innerHTML = `${date}`
    // Determine AM or PM
    var meridiem = hours >= 12 ? "PM" : "AM";

    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12;
  
    // Add leading zeros if the time component is less than 10
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    // seconds = (seconds < 10 ? "0" : "") + seconds;

  
    var timeString = hours + ":" + minutes + ":" + meridiem;
    document.getElementById("time").textContent = timeString;
  }
  
  // Update the time every second
  setInterval(updateTime, 1000);