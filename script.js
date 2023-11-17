function updateTime() {
  const currentDate = new Date();

  const dateElement = document.getElementById('date');
  const timeElement = document.getElementById('time');

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dateString = currentDate.toLocaleDateString('en-US', options);
  const timeString = currentDate.toLocaleTimeString('en-US');

  dateElement.textContent = dateString;
  timeElement.textContent = timeString;
}

updateTime();
setInterval(updateTime, 1000);


function updateCountdown() {
  const currentDate = new Date();
  const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  const endOfYear = new Date(currentDate.getFullYear() + 1, 0, 0);
  
  const daysLeftInMonth = Math.ceil((endOfMonth - currentDate) / (1000 * 60 * 60 * 24));
  const daysLeftInYear = Math.ceil((endOfYear - currentDate) / (1000 * 60 * 60 * 24));
  
  document.getElementById('countdown-month').innerText = daysLeftInMonth + " days";
  document.getElementById('countdown-year').innerText = daysLeftInYear + " days";
}

updateCountdown();
setInterval(updateCountdown, 1000);
