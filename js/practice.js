
(()=>{
 const bank=window.PL300_QUESTIONS||[];
 const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
 const eq=(a,b)=>JSON.stringify(a)===JSON.stringify(b);
 function answer(q,el){
   if(q.type==='single'){const x=el.querySelector('input[type=radio]:checked');return x?Number(x.value):null}
   if(q.type==='multi')return [...el.querySelectorAll('input[type=checkbox]:checked')].map(x=>Number(x.value)).sort((a,b)=>a-b);
   if(q.type==='yesno')return q.statements.map((_,i)=>{const x=el.querySelector(`[name="${q.id}_${i}"]:checked`);return x?x.value==='true':null});
   if(q.type==='matching')return q.prompts.map((_,i)=>Number(el.querySelector(`[name="${q.id}_${i}"]`).value));
   if(q.type==='ordering')return q.items.map((_,i)=>Number(el.querySelector(`[name="${q.id}_${i}"]`).value));
 }
 function complete(q,a){
   if(q.type==='single')return a!==null;
   if(q.type==='multi')return a.length>0;
   return Array.isArray(a)&&a.every(v=>v!==null&&v!==-1);
 }
 function render(q){
   let body=q.case?`<div class="case-box"><strong>Case study</strong><br>${esc(q.case)}</div>`:'';
   body+=`<p class="question-stem">${esc(q.stem)}</p>`;
   if(q.type==='single')body+=`<div class="options">${q.options.map((o,i)=>`<label class="option"><input type="radio" name="${q.id}" value="${i}"><span><b>${String.fromCharCode(65+i)}.</b> ${esc(o)}</span></label>`).join('')}</div>`;
   if(q.type==='multi')body+=`<div class="options">${q.options.map((o,i)=>`<label class="option"><input type="checkbox" value="${i}"><span><b>${String.fromCharCode(65+i)}.</b> ${esc(o)}</span></label>`).join('')}<span class="small">Select all that apply.</span></div>`;
   if(q.type==='yesno')body+=q.statements.map((s,i)=>`<div class="yesno-row"><span>${esc(s)}</span><span><label><input type="radio" name="${q.id}_${i}" value="true"> Yes</label> &nbsp; <label><input type="radio" name="${q.id}_${i}" value="false"> No</label></span></div>`).join('');
   if(q.type==='matching')body+=q.prompts.map((p,i)=>`<div class="match-row"><span>${esc(p)}</span><select name="${q.id}_${i}"><option value="-1">Choose…</option>${q.choices.map((c,j)=>`<option value="${j}">${esc(c)}</option>`).join('')}</select></div>`).join('');
   if(q.type==='ordering')body+=q.items.map((it,i)=>`<div class="order-row"><select name="${q.id}_${i}"><option value="-1">Position…</option>${q.items.map((_,j)=>`<option value="${j}">${j+1}</option>`).join('')}</select><span>${esc(it)}</span></div>`).join('');
   return `<div class="question" data-qid="${q.id}">${body}<button type="button" class="btn quiz-submit">Check answer</button><div class="feedback" role="status"></div></div>`;
 }
 function feedback(q,ok){
   let out=`<strong>${ok?'Correct':'Not quite'}.</strong> ${esc(q.explanation)}`;
   if(q.optionNotes&&q.options)out+=`<ul class="answer-notes">${q.options.map((o,i)=>`<li><b>${String.fromCharCode(65+i)}.</b> ${esc(q.optionNotes[i]||'')}</li>`).join('')}</ul>`;
   if(q.type==='matching')out+=`<p class="small"><b>Correct matches:</b> ${q.prompts.map((p,i)=>`${esc(p)} → ${esc(q.choices[q.correct[i]])}`).join('; ')}</p>`;
   if(q.type==='ordering')out+=`<p class="small"><b>Correct order:</b> ${q.correct.map(i=>esc(q.items[i])).join(' → ')}</p>`;
   if(q.type==='yesno')out+=`<p class="small"><b>Answers:</b> ${q.correct.map((v,i)=>`${i+1}: ${v?'Yes':'No'}`).join(', ')}</p>`;
   return out;
 }
 function update(c){
   const p=PL300.progress(), els=[...c.querySelectorAll('.question')], done=els.filter(e=>p[e.dataset.qid]).length;
   const correct=els.filter(e=>p[e.dataset.qid]?.correct).length;
   c.querySelectorAll('[data-local-count]').forEach(e=>e.textContent=`${done}/${els.length} completed • ${correct} correct`);
   c.querySelectorAll('.progress span').forEach(e=>e.style.width=(els.length?done/els.length*100:0)+'%');
 }
 function wire(c){
   c.querySelectorAll('.question').forEach(el=>{
      const q=bank.find(x=>x.id===el.dataset.qid);
      el.querySelector('.quiz-submit').addEventListener('click',()=>{
        const a=answer(q,el); if(!complete(q,a)){alert('Choose an answer for every required part first.');return}
        const ok=eq(a,q.correct), f=el.querySelector('.feedback'); f.className=`feedback show ${ok?'correct':'wrong'}`;f.innerHTML=feedback(q,ok);
        const p=PL300.progress();p[q.id]={correct:ok,at:Date.now()};PL300.save(p);update(c);
      });
   }); update(c);
 }
 function inline(){
   document.querySelectorAll('.inline-quiz[data-topic]').forEach(c=>{
     const list=bank.filter(q=>q.topic===c.dataset.topic).slice(0,Number(c.dataset.limit||5));
     c.innerHTML=`<div class="quiz-head"><strong>Exam check</strong><span class="small" data-local-count></span></div><div class="progress"><span></span></div>${list.map(render).join('')}`;
     wire(c);
   });
 }
 function practice(){
   const root=document.querySelector('[data-practice-root]');if(!root)return;
   const sel=document.querySelector('[data-topic-filter]');
   const labels=window.PL300_TOPIC_LABELS||{};
   const topics=[...new Set(bank.map(q=>q.topic))];
   sel.innerHTML='<option value="all">All topics (160 questions)</option>'+topics.map(t=>`<option value="${t}">${esc(labels[t]||t.replaceAll('_',' '))}</option>`).join('');
   if(topics.length) sel.value=topics[0];
   const draw=()=>{
      const list=sel.value==='all'?bank:bank.filter(q=>q.topic===sel.value);
      root.innerHTML=`<div class="quiz-head"><strong>${list.length} practice questions</strong><span class="small" data-local-count></span></div><div class="progress"><span></span></div>${list.map(render).join('')}`;wire(root);
   };
   sel.addEventListener('change',draw);draw();
 }
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>{inline();practice()});else{inline();practice()}
})();
