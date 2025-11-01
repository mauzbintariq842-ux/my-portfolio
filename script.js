// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    e.preventDefault();
    const t=document.querySelector(a.getAttribute('href'));
    if(t) t.scrollIntoView({behavior:'smooth',block:'start'});
  });
});

// Form validation
const form=document.getElementById('contactForm');
const msg=document.getElementById('formMsg');
if(form){
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const name=document.getElementById('name').value.trim();
    const email=document.getElementById('email').value.trim();
    const message=document.getElementById('message').value.trim();
    if(!name||!email||!message){msg.textContent='Please fill all fields.';return;}
    const pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!pattern.test(email)){msg.textContent='Enter a valid email.';return;}
    msg.textContent='Message sent successfully!';form.reset();
  });
}
