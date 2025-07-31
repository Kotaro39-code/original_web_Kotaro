

// スライド移動関数
function showSlide(i) {
  if (isMoving) return; // 移動中なら無視
  isMoving = true;
  index = i;
  slides.style.transition = 'transform 0.5s ease';
  slides.style.transform = `translateX(-${index * 100}%)`;

  // 最後のクローンに来たらリセット（ループ）
  if (index === slideCount - 1) {
    setTimeout(() => {
      slides.style.transition = 'none';
      slides.style.transform = 'translateX(0)';
      index = 0;
      isMoving = false;
    }, 500); // アニメーションと同じ
  } else {
    setTimeout(() => {
      isMoving = false;
    }, 500);
  }
}

// 自動スライド
const interval = setInterval(() => {
  showSlide(index + 1);
}, 4000);

// ▶ 矢印で左右に動かす
document.getElementById('next').addEventListener('click', () => {
  clearInterval(interval); // 自動停止したいならこれ
  showSlide(index + 1);
});

document.getElementById('prev').addEventListener('click', () => {
  clearInterval(interval); // 自動停止したいならこれ

  if (index === 0) {
    // 左に戻るときだけ特殊対応（最後→3にジャンプ）
    index = slideCount - 2;
    slides.style.transition = 'none';
    slides.style.transform = `translateX(-${index * 100}%)`;
    setTimeout(() => {
      showSlide(index - 1);
    }, 20);
  } else {
    showSlide(index - 1);
  }
});