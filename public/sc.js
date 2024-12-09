    function toggleMenu() {
        const nav = document.querySelector('nav');
        const menu = document.querySelector('.menu');
      
        // Toggle the active class for the nav
        nav.classList.toggle('active');
      
        // Show the menu with smooth transition
        if (nav.classList.contains('active')) {
          let items = menu.querySelectorAll('a');
          items.forEach((item, index) => {
            // Apply fade-in animation with delay
            item.style.animation = `fadeIn 0.5s ease forwards ${index * 0.2}s`;
          });
        } else {
          // Reset animation when menu is closed
          menu.querySelectorAll('a').forEach(item => {
            item.style.animation = 'none'; // Reset animation
          });
        }
      }

document.getElementById('getMotivasiBtn').addEventListener('click', async () => {
      const response = await fetch('/api/motivasi');
      const data = await response.json();
      document.getElementById('motivasiText').textContent = data.motivasi;
    });
