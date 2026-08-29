(()=>{
 const root=document.documentElement, themeKey='pl300Theme';
 const saved=localStorage.getItem(themeKey);
 if(saved) root.dataset.theme=saved;
 else if(window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches) root.dataset.theme='dark';
 const storeKey='pl300ProgressV1';
 function progress(){try{return JSON.parse(localStorage.getItem(storeKey)||'{}')}catch{return {}}}
 function save(p){localStorage.setItem(storeKey,JSON.stringify(p));updateGlobal()}
 function updateGlobal(){
   const p=progress(), done=Object.keys(p).length, total=(window.PL300_QUESTIONS||[]).length||160;
   document.querySelectorAll('[data-global-progress]').forEach(e=>e.textContent=`${done}/${total} questions completed`);
 }
 function initFormulaSearch(){
   const input=document.querySelector('[data-formula-search]'); if(!input)return;
   const cards=[...document.querySelectorAll('[data-formula-card]')];
   input.addEventListener('input',()=>{
     const q=input.value.trim().toLowerCase();
     cards.forEach(c=>c.classList.toggle('hidden',q&&!c.textContent.toLowerCase().includes(q)));
   });
 }
 function init(){
   document.querySelectorAll('[data-theme-toggle]').forEach(b=>b.addEventListener('click',()=>{
      const next=root.dataset.theme==='dark'?'light':'dark'; root.dataset.theme=next; localStorage.setItem(themeKey,next);
   }));
   const m=document.querySelector('[data-menu]'), n=document.querySelector('.nav');
   if(m&&n)m.addEventListener('click',()=>n.classList.toggle('open'));
   document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>n?.classList.remove('open')));
   document.querySelectorAll('[data-year]').forEach(e=>e.textContent=new Date().getFullYear());
   document.querySelectorAll('[data-reset-progress]').forEach(b=>b.addEventListener('click',()=>{
      if(confirm('Reset all saved study progress and mock history on this browser?')){
        localStorage.removeItem(storeKey);localStorage.removeItem('pl300MockHistoryV1');updateGlobal();location.reload();
      }
   }));
   document.querySelectorAll('[data-print]').forEach(b=>b.addEventListener('click',()=>window.print()));
   initFormulaSearch();
   updateGlobal();
 }
 window.PL300={progress,save,updateGlobal};
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();