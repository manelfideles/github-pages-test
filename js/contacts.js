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
  