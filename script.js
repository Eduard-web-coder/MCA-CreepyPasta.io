function showDetail(text, element=null){
  const article = document.getElementById('detail-article');

  document.querySelectorAll('.item').forEach(el=>el.classList.remove('selected'));
  if(element) element.classList.add('selected');

  article.classList.remove('active');
  setTimeout(()=>{
    article.innerHTML=`
      <div class="entry">
        <div class="entry-title">Детали</div>
        <div class="entry-meta">Подробнее о выбранной теме</div>
        <div class="detail"><p>${text}</p></div>
      </div>
    `;
    article.classList.add('active');
  }, 100);
}

window.addEventListener('load',()=>{
  document.querySelector('nav.panel').classList.add('active');
  document.getElementById('detail-article').classList.add('active');
});
