document.addEventListener("DOMContentLoaded", function () {
  var currentLocation = window.location.pathname; // Get the current page path
  var links = document.querySelectorAll("nav ul li a");

  // Loop through each link and check if it matches the current page path
  links.forEach(function (link) {
    if (link.getAttribute("href") === currentLocation) {
      link.classList.add("active"); // Add "active" class to the current page link
    }
  });
});

function toggleTopic(topicId) {
  const topicsButtons = document.querySelectorAll("#topics button");
  const contentSections = document.querySelectorAll("#content .content");

  topicsButtons.forEach((button) => {
    button.classList.remove("selected");
  });

  contentSections.forEach((section) => {
    section.classList.remove("selected");
  });

  const clickedButton = document.getElementById(topicId);
  const topicContent = document.getElementById(topicId + "-content");

  if (clickedButton && topicContent) {
    clickedButton.classList.toggle("selected");
    topicContent.classList.toggle("selected");
  }
}

(function () {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init({
    publicKey: 'Bm0FX4d_zr8Dzyvdp',
  });
})();

window.onload = function () {
  document
    .getElementById('contact-form')
    .addEventListener('submit', function (event) {
      const btn = document.getElementById('submit-btn');
      btn.value = 'Sending...';

      event.preventDefault();
      // these IDs from the previous steps
      emailjs.sendForm('default_service', 'template_m9mwws6', this).then(
        () => {
          console.log('SUCCESS!');
          btn.value = 'Send';
        },
        (error) => {
          console.log('FAILED...', error);
        }
      );
    });
};
