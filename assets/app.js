
(function(){
var d=document.documentElement;
function setLang(l){d.lang=l;try{localStorage.setItem('lang',l)}catch(e){}
 document.querySelectorAll('[data-setlang]').forEach(function(b){b.setAttribute('aria-pressed',b.dataset.setlang===l)});}
var saved=null;try{saved=localStorage.getItem('lang')}catch(e){}
setLang(saved||'ru');
document.querySelectorAll('[data-setlang]').forEach(function(b){b.addEventListener('click',function(){setLang(b.dataset.setlang)})});
var th=document.getElementById('theme');
if(th){var st=null;try{st=localStorage.getItem('theme')}catch(e){}
 if(st)d.setAttribute('data-theme',st);
 th.addEventListener('click',function(){var dark=d.getAttribute('data-theme')?d.getAttribute('data-theme')==='dark':matchMedia('(prefers-color-scheme:dark)').matches;
  var n=dark?'light':'dark';d.setAttribute('data-theme',n);try{localStorage.setItem('theme',n)}catch(e){}})}
var m=document.getElementById('menu'),a=document.querySelector('aside');
if(m)m.addEventListener('click',function(){a.classList.toggle('open')});
document.querySelectorAll('[data-toggle]').forEach(function(b){b.addEventListener('click',function(){var box=b.closest('.codebox');box.classList.toggle('open');b.setAttribute('aria-expanded',box.classList.contains('open'))})});
var cur=document.querySelector('aside a.cur');if(cur&&cur.scrollIntoView){cur.scrollIntoView({block:'center'})}
var only=document.getElementById('mine');
if(only){only.addEventListener('change',function(){document.querySelectorAll('aside a[data-owner]').forEach(function(x){x.style.display=(only.checked&&x.dataset.owner!=='R')?'none':''})})}
})();
