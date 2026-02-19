function scroll2(id){document.getElementById(id).scrollIntoView({behavior:'smooth'})}
const nb=document.getElementById('nb');
window.addEventListener('scroll',()=>nb.classList.toggle('sc',scrollY>60));
document.getElementById('hbg').addEventListener('click',()=>document.getElementById('mn').classList.toggle('open'));
function cm(){document.getElementById('mn').classList.remove('open')}
function tFaq(btn){
  const item=btn.parentElement,ans=item.querySelector('.faq-ans'),open=item.classList.contains('active');
  document.querySelectorAll('.faq-item').forEach(i=>{i.classList.remove('active');i.querySelector('.faq-ans').classList.remove('open')});
  if(!open){item.classList.add('active');ans.classList.add('open')}
}
function fSub(btn){
  btn.textContent='Inquiry Submitted ✓';btn.style.background='#1a6b3a';btn.style.borderColor='#1a6b3a';btn.disabled=true;
  setTimeout(()=>{btn.textContent='Submit Another Inquiry →';btn.style.background='';btn.style.borderColor='';btn.disabled=false},4000)
}
const obs=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting)x.target.classList.add('up')}),{threshold:.08,rootMargin:'0px 0px -40px 0px'});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
setTimeout(()=>document.querySelectorAll('.reveal').forEach(el=>{if(el.getBoundingClientRect().top<innerHeight)el.classList.add('up')}),100);
