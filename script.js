// Function to display current date and time
function showDateTime() {
  const now = new Date();
  const dateTime = now.toLocaleString();
  document.getElementById('currentDateTime').textContent = dateTime;
}

// Function to calculate and display countdowns
function showCountdowns() {
  // Implement countdown logic for months and years here
  // Example:
  const countdownMonth = 15; // Replace with calculated days
  const countdownYear = 150; // Replace with calculated days
  document.getElementById('countdownMonth').textContent = `Sisa hari bulan ini: ${countdownMonth}`;
  document.getElementById('countdownYear').textContent = `Sisa hari tahun ini: ${countdownYear}`;
}

// Function to display inspirational quotes
function showQuotes() {
  const quotes = ["Quote 1", "Quote 2", "Quote 3"]; // Replace with actual quotes
  let index = 0;

  setInterval(() => {
    document.getElementById('quote').textContent = quotes[index];
    index = (index + 1) % quotes.length;
  }, 5000);
}

// Function to input productivity
function inputProductivity(points) {
  const password = prompt("Masukkan password:");
  if (password === '4sgr4irene') {
    // Implement logic to record productivity points
    // You can store this data in an array or use a database
    // Example: Store points in an array
    // Replace this with actual logic to store data
    const productivityData = []; 
    productivityData.push(Number(points));
    console.log(`Produktivitas hari ini: ${points} poin`);
  } else {
    alert("Password salah!");
  }
}

// Function calls
showDateTime();
showCountdowns();
showQuotes();
