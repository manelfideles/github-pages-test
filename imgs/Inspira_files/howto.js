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


const accordionBtns = document.querySelectorAll(".accordion");

accordionBtns.forEach((accordion) => {
  accordion.onclick = function () {
    this.classList.toggle("is-open");

    let content = this.nextElementSibling;
    console.log(content);

    if (content.style.maxHeight) {
      //this is if the accordion is open
      content.style.maxHeight = null;
    } else {
      //if the accordion is currently closed
      content.style.maxHeight = content.scrollHeight + "px";
      console.log(content.style.maxHeight);
    }
  };
});

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