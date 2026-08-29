
(()=>{
 const bank=window.PL300_QUESTIONS||[], root=document.querySelector('[data-mock-root]'); if(!root)return;
 const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
 const eq=(a,b)=>JSON.stringify(a)===JSON.stringify(b);
 let exam=[],answers={},timer=null,remaining=6000;
 const shuffle=a=>[...a].sort(()=>Math.random()-.5);
 function get(q,el){
   if(q.type==='single'){const x=el.querySelector('input[type=radio]:checked');return x?Number(x.value):null}
   if(q.type==='multi')return [...el.querySelectorAll('input[type=checkbox]:checked')].map(x=>Number(x.value)).sort((a,b)=>a-b);
   if(q.type==='yesno')return q.statements.map((_,i)=>{const x=el.querySelector(`[name="${q.id}_${i}"]:checked`);return x?x.value==='true':null});
   if(q.type==='matching')return q.prompts.map((_,i)=>Number(el.querySelector(`[name="${q.id}_${i}"]`).value));
   if(q.type==='ordering')return q.items.map((_,i)=>Number(el.querySelector(`[name="${q.id}_${i}"]`).value));
 }
 function complete(q,a){if(q.type==='single')return a!==null;if(q.type==='multi')return a.length>0;return Array.isArray(a)&&a.every(v=>v!==null&&v!==-1)}
 function render(q,i){
   let b=q.case?`<div class="case-box"><strong>Case study</strong><br>${esc(q.case)}</div>`:'';
   b+=`<p class="question-stem">${i+1}. ${esc(q.stem)}</p>`;
   if(q.type==='single')b+=`<div class="options">${q.options.map((o,j)=>`<label class="option"><input type="radio" name="${q.id}" value="${j}"><span>${String.fromCharCode(65+j)}. ${esc(o)}</span></label>`).join('')}</div>`;
   if(q.type==='multi')b+=`<div class="options">${q.options.map((o,j)=>`<label class="option"><input type="checkbox" value="${j}"><span>${String.fromCharCode(65+j)}. ${esc(o)}</span></label>`).join('')}<span class="small">Select all that apply.</span></div>`;
   if(q.type==='yesno')b+=q.statements.map((s,j)=>`<div class="yesno-row"><span>${esc(s)}</span><span><label><input type="radio" name="${q.id}_${j}" value="true"> Yes</label> &nbsp; <label><input type="radio" name="${q.id}_${j}" value="false"> No</label></span></div>`).join('');
   if(q.type==='matching')b+=q.prompts.map((p,j)=>`<div class="match-row"><span>${esc(p)}</span><select name="${q.id}_${j}"><option value="-1">Choose…</option>${q.choices.map((c,k)=>`<option value="${k}">${esc(c)}</option>`).join('')}</select></div>`).join('');
   if(q.type==='ordering')b+=q.items.map((it,j)=>`<div class="order-row"><select name="${q.id}_${j}"><option value="-1">Position…</option>${q.items.map((_,k)=>`<option value="${k}">${k+1}</option>`).join('')}</select><span>${esc(it)}</span></div>`).join('');
   return `<section class="concept" data-qid="${q.id}">${b}</section>`;
 }
 function drawTime(){const e=root.querySelector('[data-timer]');if(!e)return;const m=Math.floor(remaining/60),s=remaining%60;e.textContent=`${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`}
 function start(){
   const count=Math.min(Number(document.querySelector('[data-mock-count]').value||50),bank.length);
   exam=shuffle(bank).slice(0,count);answers={};remaining=6000;
   root.innerHTML=`<div class="mock-top"><div><b>Mock exam</b><div class="small"><span data-answered>0</span>/${exam.length} answered</div></div><div class="timer" data-timer>100:00</div><button class="btn" data-finish>Finish exam</button></div><div data-exam-list>${exam.map(render).join('')}</div>`;
   root.querySelectorAll('[data-qid]').forEach(el=>el.addEventListener('change',()=>{
      const q=exam.find(x=>x.id===el.dataset.qid),a=get(q,el);
      if(complete(q,a))answers[q.id]=a;else delete answers[q.id];
      root.querySelector('[data-answered]').textContent=Object.keys(answers).length;
   }));
   root.querySelector('[data-finish]').onclick=finish;clearInterval(timer);timer=setInterval(()=>{remaining--;drawTime();if(remaining<=0)finish()},1000);drawTime();scrollTo({top:0,behavior:'smooth'});
 }
 function formatCorrect(q){
   if(q.type==='single')return `${String.fromCharCode(65+q.correct)}. ${q.options[q.correct]}`;
   if(q.type==='multi')return q.correct.map(i=>`${String.fromCharCode(65+i)}. ${q.options[i]}`).join(' + ');
   if(q.type==='yesno')return q.correct.map((v,i)=>`${i+1}: ${v?'Yes':'No'}`).join(', ');
   if(q.type==='matching')return q.prompts.map((p,i)=>`${p} → ${q.choices[q.correct[i]]}`).join('; ');
   if(q.type==='ordering')return q.correct.map(i=>q.items[i]).join(' → ');
 }
 function finish(){
   if(!exam.length)return;clearInterval(timer);
   let n=0;const wrong=[];
   exam.forEach((q,i)=>{const ok=eq(answers[q.id],q.correct);if(ok)n++;else wrong.push({q,i})});
   const pct=Math.round(n/exam.length*100), hist=JSON.parse(localStorage.getItem('pl300MockHistoryV1')||'[]');
   hist.unshift({date:new Date().toISOString(),correct:n,total:exam.length,pct});localStorage.setItem('pl300MockHistoryV1',JSON.stringify(hist.slice(0,20)));
   root.innerHTML=`<div class="card"><span class="eyebrow">Mock result</span><div class="result-score">${pct}%</div><p><b>${n}/${exam.length}</b> correct. This raw percentage is a study metric only; Microsoft's certification result uses scaled scoring and a passing score of 700.</p><button class="btn" data-restart>Start another mock</button></div><h2>Review incorrect answers (${wrong.length})</h2>${wrong.length?wrong.map(({q,i})=>`<section class="concept"><h3>${i+1}. ${esc(q.stem)}</h3><p><b>Correct answer:</b> ${esc(formatCorrect(q))}</p><p>${esc(q.explanation)}</p>${q.optionNotes&&q.options?`<ul class="answer-notes">${q.options.map((o,j)=>`<li><b>${String.fromCharCode(65+j)}.</b> ${esc(q.optionNotes[j]||'')}</li>`).join('')}</ul>`:''}</section>`).join(''):'<div class="notice">Excellent — no incorrect answers to review.</div>'}`;
   root.querySelector('[data-restart]').onclick=start;scrollTo({top:0,behavior:'smooth'});showHistory();
 }
 function showHistory(){
   const box=document.querySelector('[data-mock-history]');if(!box)return;
   const h=JSON.parse(localStorage.getItem('pl300MockHistoryV1')||'[]');
   box.innerHTML=h.length?`<h3>Recent attempts</h3><div class="small">${h.slice(0,5).map(x=>`${new Date(x.date).toLocaleDateString()}: ${x.correct}/${x.total} (${x.pct}%)`).join('<br>')}</div>`:'<span class="small">No mock attempts saved on this browser yet.</span>';
 }
 document.querySelector('[data-start-mock]').addEventListener('click',start);showHistory();
})();
