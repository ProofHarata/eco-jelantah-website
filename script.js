feather.replace();

// animasi scroll pakai IntersectionObserver
const slideObs = new IntersectionObserver((items) => {
    items.forEach(item => {
        if (item.isIntersecting) {
            item.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

// ambil elemen slide-up
document.querySelectorAll('.slide-up').forEach(el => {
    slideObs.observe(el);
});

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav .navMenu ul li a');
    
    function setActiveLink(activeLink) {
        document.querySelectorAll('nav .navMenu ul li').forEach(li => {
        li.classList.remove('light');
        });
        if (activeLink) {
        activeLink.parentElement.classList.add('light');
        }
    }
    
    // klik link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
        setActiveLink(this);
        });
    });
    
    // observer buat deteksi section saat scroll
    const sections = document.querySelectorAll('section[id]');
    const obsOpts = {
        root: null,
        rootMargin: '0px',
        rootMargin: '0px',
        threshold: 0.5
    };
    
    const navObs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            const activeLink = document.querySelector(`nav .navMenu ul li a[href="#${id}"]`);
            setActiveLink(activeLink);
        }
        });
    }, obsOpts);
    
    // observe sections
    sections.forEach(section => {
        navObs.observe(section);
    });
    
    // toggle mobile menu
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.querySelector('nav .navMenu');
    mobileToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        // toggle hamburger
        this.classList.toggle('active');
    });
    
    // close menu saat klik link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
        navMenu.classList.remove('active');
        mobileToggle.classList.remove('active');
        });
    });
});

// Ambil elemen-elemen
const videoBtn = document.querySelector('.video-button');
const tampilan = document.getElementById('video-tampilan');
const closeBtn = document.querySelector('.close');

// Fungsi untuk membuka tampilan
videoBtn.addEventListener('click', () => {
    tampilan.style.display = 'block';
});

// Fungsi untuk menutup tampilan
closeBtn.addEventListener('click', () => {
    tampilan.style.display = 'none';
});

// Tutup tampilan jika klik di luar konten
window.addEventListener('click', (event) => {
    if (event.target === tampilan) {
        tampilan.style.display = 'none';
    }
});
