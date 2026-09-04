const chips=document.querySelectorAll('.chip');
const cards=document.querySelectorAll('.op-card');
const search=document.getElementById('searchInput');
let activeFilter='all';
function filterCards(){const q=(search?.value||'').trim().toLowerCase();cards.forEach(card=>{const tags=card.dataset.tags||'';const tagOk=activeFilter==='all'||tags.includes(activeFilter);const textOk=!q||card.textContent.toLowerCase().includes(q);card.classList.toggle('hidden',!(tagOk&&textOk))})}
chips.forEach(ch=>ch.addEventListener('click',()=>{chips.forEach(c=>c.classList.remove('active'));ch.classList.add('active');activeFilter=ch.dataset.filter||'all';filterCards()}));
search?.addEventListener('input',filterCards);
