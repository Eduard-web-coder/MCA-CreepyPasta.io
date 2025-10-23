function showDetail(text) {
  const article = document.getElementById('detail-article');
  article.innerHTML = `<div class="entry">
    <div class="entry-title">Детали</div>
    <div class="entry-meta">Подробнее о выбранной теме</div>
    <div class="detail"><p>${text}</p></div>
  </div>`;
}
