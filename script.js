const header=document.getElementById('header'),progress=document.getElementById('progress');
window.addEventListener('scroll',()=>{header?.classList.toggle('scrolled',scrollY>30);const h=document.documentElement.scrollHeight-innerHeight;if(progress)progress.style.width=(h>0?(scrollY/h)*100:0)+'%';},{passive:true});
const menu=document.getElementById('menu'),mobile=document.getElementById('mobileNav');
menu?.addEventListener('click',()=>mobile?.classList.toggle('open'));
mobile?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>mobile.classList.remove('open')));
const ro=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');ro.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(x=>ro.observe(x));
const vo=new IntersectionObserver(es=>es.forEach(e=>{const v=e.target;if(e.isIntersecting)v.play().catch(()=>{});else v.pause()}),{threshold:.42,rootMargin:'80px'});
document.querySelectorAll('.media video,.cinema-media video,.device video').forEach(v=>vo.observe(v));
const modal=document.getElementById('modal'),mv=document.getElementById('modalVideo');
if(modal&&mv){
  document.querySelectorAll('[data-video]').forEach(card=>card.addEventListener('click',()=>{mv.src=card.dataset.video;modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';mv.play().catch(()=>{})}));
  function closeModal(){mv.pause();mv.removeAttribute('src');mv.load();modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow=''}
  document.getElementById('close')?.addEventListener('click',closeModal);
  modal.addEventListener('click',e=>{if(e.target===modal)closeModal()});
  document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
}
const contactForm=document.getElementById('contactForm');
contactForm?.addEventListener('submit',e=>{e.preventDefault();const msg=document.getElementById('formMsg');if(msg)msg.textContent='Vielen Dank! Das Formular ist bereit für die Verbindung mit der Kunden-Mail bzw. dem gewünschten Form-Endpoint.';contactForm.reset()});
