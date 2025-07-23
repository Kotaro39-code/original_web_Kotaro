<script>
    function showSlide(index) {
    const total = slides.length;
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
    }
    function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
    }

    showSlide(currentIndex);
  setInterval(nextSlide, 4000); // 4秒ごとに切り替え
</script>