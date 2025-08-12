
function smoothNav(){
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',e=>{
      const id=a.getAttribute('href').slice(1), el=document.getElementById(id);
      if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth'}); }
    });
  });
}
function faqToggle(){
  document.querySelectorAll('.faq .q').forEach(q=>{
    q.addEventListener('click',()=>{
      const a=q.nextElementSibling;
      a.style.display = a.style.display==='block' ? 'none':'block';
    });
  });
}
document.addEventListener('DOMContentLoaded',()=>{smoothNav();faqToggle();});
