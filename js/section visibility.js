// Get all section buttons
const sectionButtons = document.querySelectorAll(".section-button");

// Add click event listener to each button
sectionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Get the target section ID from the data attribute
    const targetSectionId = button.dataset.target;

    // Get all sections
    const sections = document.querySelectorAll(".section");

    // Hide all sections
    sections.forEach((section) => {
      section.classList.remove("visible");
    });

    // Get the target section element
    const targetSection = document.getElementById(targetSectionId);

    // Show the target section
    targetSection.classList.add("visible");
  });
});

// Show section 1 initially
document.getElementById("section1").classList.add("visible");
