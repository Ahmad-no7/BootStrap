// Fungsi untuk mereset form dan menampilkan popup
function resetFormAndShowPopup(event) {
    event.preventDefault(); // Mencegah form dikirimkan

    // Menampilkan popup
    document.getElementById('popup').style.display = 'block';

    // Reset form
    document.getElementById('contactForm').reset();
  }

  // Fungsi tutup popup
  function closePopup() {
    document.getElementById('popup').style.display = 'none';
  }

  // Menambahkan event listener untuk tombol submit
  document.getElementById('contactForm').addEventListener('submit', resetFormAndShowPopup);

  // Menambahkan smooth scrolling ke navbar
  const navbarLinks = document.querySelectorAll('nav ul li a');

  navbarLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      
      event.preventDefault();

      // Mendapatkan ID section target
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      // Scroll ke target section dengan offset
      window.scrollTo({
        top: targetSection.offsetTop - 100,
        behavior: 'smooth'
      });
    });
  });