// 스크롤 시 네비게이션 바 배경 변경
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = '#0a0b10';
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.5)';
    } else {
        header.style.background = 'transparent';
        header.style.boxShadow = 'none';
    }
});

// 부드러운 스크롤 이동
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});