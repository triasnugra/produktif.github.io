// Function to display current date and time
function showDateTime() {
  const now = new Date();
  const dateTimeElement = document.getElementById('date-time');
  dateTimeElement.textContent = now.toLocaleString();
}

// Function to calculate monthly countdown
function calculateMonthlyCountdown() {
  const now = new Date();
  const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
  const daysLeft = Math.ceil((endOfMonth - now) / (1000 * 60 * 60 * 24));
  document.querySelector('.teal').textContent = `Days left this month: ${daysLeft}`;
}

// Function to calculate yearly countdown
function calculateYearlyCountdown() {
  const now = new Date();
  const endOfYear = new Date(now.getFullYear() + 1, 0, 0);
  const daysLeft = Math.ceil((endOfYear - now) / (1000 * 60 * 60 * 24));
  document.querySelector('.steelblue').textContent = `Days left this year: ${daysLeft}`;
}

// Array of motivational quotes
const quotes = [
  "Quote 1",
  "Quote 2",
  "Quote 3",
  // Add more quotes as needed
];

// Function to display random quote every 5 seconds
function displayRandomQuote() {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  document.querySelector('.monospace').textContent = randomQuote;
}

// Initial function calls
showDateTime();
calculateMonthlyCountdown();
calculateYearlyCountdown();
displayRandomQuote();

// Update time and quotes at intervals
setInterval(showDateTime, 1000);
setInterval(displayRandomQuote, 5000);
