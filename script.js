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
