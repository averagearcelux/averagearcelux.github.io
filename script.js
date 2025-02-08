// Fetch the current visit count from CountAPI

console.log("sdds")

document.body.classList.toggle("blurred");
document.body.classList.toggle("glow");

document.getElementById("toggle-effects").addEventListener("change", function() {
        // Toggle blur effect on body
    document.body.classList.toggle("blurred");
    
        // Toggle low glow effect on certain elements
    document.body.classList.toggle("glow");
});

fetch("https://api.countapi.xyz/hit/gnarpgnab/visit-count")
  .then(response => response.json())
  .then(data => {
    document.getElementById("visit-count").innerText = data.value; // Show the count
    console.log(data.value)
  })
  .catch(err => console.log('Error fetching visit count:', err));

// Music Toggle Functionality

// Toggle blur and glow effect