feather.replace();

    // JavaScript untuk animasi scroll menggunakan IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    // Ambil semua elemen dengan class slide-up
    document.querySelectorAll('.slide-up').forEach(el => {
        observer.observe(el);
    });

    document.addEventListener('DOMContentLoaded', function() {
        // Ambil semua link di dalam navbar
        const navLinks = document.querySelectorAll('nav .navigation ul li a');
        
        // Fungsi untuk menghapus class 'light' dari semua li dan menambahkannya ke yang aktif
        function setActiveLink(activeLink) {
            document.querySelectorAll('nav .navigation ul li').forEach(li => {
                li.classList.remove('light');
            });
            if (activeLink) {
                activeLink.parentElement.classList.add('light');
            }
        }
        
        // Event listener untuk klik pada link
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                setActiveLink(this);
            });
        });
        
        // Intersection Observer untuk mendeteksi bagian yang sedang terlihat saat scroll
        const sections = document.querySelectorAll('section[id]'); // Asumsikan section memiliki id yang cocok dengan href link
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5 // 50% dari section harus terlihat untuk dianggap aktif
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    const activeLink = document.querySelector(`nav .navigation ul li a[href="#${id}"]`);
                    setActiveLink(activeLink);
                }
            });
        }, observerOptions);
        
        // Observasi setiap section
        sections.forEach(section => {
            observer.observe(section);
        });
    });