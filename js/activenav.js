document.addEventListener("DOMContentLoaded", function() {
    // Set the initial state where "nav1" is active and has a blue background
    var initialActiveNavId = "nav1";
    var initialActiveNavElement = document.getElementById(initialActiveNavId);
    if (initialActiveNavElement) {
        initialActiveNavElement.classList.add("active");
        initialActiveNavElement.style.backgroundColor = "#272a4e";
    }
});

function modifyLiClass(event, navId) {
    event.preventDefault();

    var liElement = document.getElementById(navId);
    if (liElement) {
        var activeElement = document.querySelector("li.active");
        if (activeElement) {
            activeElement.classList.remove("active");
            activeElement.style.backgroundColor = "";
        }

        liElement.classList.add("active");
        liElement.style.backgroundColor = "#272a4e";
    }
}
