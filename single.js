document.getElementById("gifButton").addEventListener("click", function() {
    // Hide the button
    this.style.display = "none";
    
    // Show the GIF
    const gifImage = document.getElementById("gifImage");
    gifImage.style.display = "block";
});