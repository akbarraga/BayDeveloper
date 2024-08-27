window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Navbar toggler
  document.addEventListener('DOMContentLoaded', function() {
    const navbarToggle = document.querySelector('.navbar-toggler');
    
    navbarToggle.addEventListener('click', function() {
        this.classList.toggle('open');
    });
});

// balik keatas
document.addEventListener('DOMContentLoaded', function () {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  tooltipTriggerList.forEach(tooltipTriggerEl => {
    new bootstrap.Tooltip(tooltipTriggerEl);
  });
});

//balik keatas halaman
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Pesan footer
document.getElementById('newsletter-form').addEventListener('submit', function(event) {
  var emailInput = document.getElementById('email');
  var errorElement = document.getElementById('email-error');
  var successMessage = document.getElementById('success-message');

  successMessage.style.display = 'none';

  if (!emailInput.value) {
      errorElement.style.display = 'block';
      event.preventDefault();
  } else {
      errorElement.style.display = 'none';

      event.preventDefault();
      successMessage.style.display = 'block';
      
      setTimeout(function() {
          successMessage.style.display = 'none';
      }, 3000);
  }

  // Reset form
  document.getElementById('newsletter-form').reset();

});

// Login Navbar
document.addEventListener('DOMContentLoaded', function () {
  const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
  const loginLink = document.getElementById('login-link');
  const registerLink = document.getElementById('register-link');
  const logoutLink = document.getElementById('logout-link');

  if (isLoggedIn) {
      // Hide login and register links if logged in
      if (loginLink) loginLink.style.display = 'none';
      if (registerLink) registerLink.style.display = 'none';
  } else {
      // Show login and register links if not logged in
      if (loginLink) loginLink.style.display = 'block';
      if (registerLink) registerLink.style.display = 'block';
  }

  // Add event listener for logout
  if (logoutLink) {
      logoutLink.addEventListener('click', function (e) {
          e.preventDefault();
          sessionStorage.removeItem('isLoggedIn');
          alert('You have been logged out.');
          // Redirect to home page or login page
          window.location.href = 'index.html'; 
      });
  }
});