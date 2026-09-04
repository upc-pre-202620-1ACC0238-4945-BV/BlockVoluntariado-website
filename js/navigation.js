const header=document.getElementById('header');
const backTop=document.getElementById('backTop');
const menuBtn=document.getElementById('menuBtn');
const navLinks=document.getElementById('navLinks');
window.addEventListener('scroll',()=>{const y=scrollY;if(header)header.classList.toggle('scrolled',y>20);if(backTop)backTop.classList.toggle('show',y>500)});
backTop?.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));
menuBtn?.addEventListener('click',()=>{const open=navLinks?.classList.toggle('open');menuBtn.setAttribute('aria-expanded',String(Boolean(open)))});
navLinks?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{navLinks.classList.remove('open');menuBtn?.setAttribute('aria-expanded','false')}));
