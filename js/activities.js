let currentIndex = 0; // Keeps track of the current index of .more that is visible

function myFunction() {
  const moreSections = document.querySelectorAll(".more"); // Selects all .more sections
  const btnText = document.getElementById("seemore");

  if (currentIndex < moreSections.length) {
    moreSections[currentIndex].style.display = "grid"; // Show the next .more section
    currentIndex++; // Increase the index to prepare for the next button click
  }

  // Disable the button if there are no more sections to reveal
  if (currentIndex === moreSections.length) {
    btnText.disabled = true;
    btnText.classList.add('disabled'); // Optionally add a class for styling
  }
}