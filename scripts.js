document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert(
      "Thank you for contacting us, " +
        document.getElementById("name").value +
        "!"
    );
    // Here you can add code to send form data to the server
  });