window.PROF=(()=>{const L=localStorage,sim=L.sim||'1',p=JSON.parse(L['p'+sim]||'{}'),n=p.nama||L.nama||'Shanum';return{sim,nama:n,ortu:p.ortu||'Abba',say:p.say||n.replace(/sh/gi,'s'),logo:p.logo||'logo.svg'}})();
addEventListener('DOMContentLoaded',()=>{document.querySelectorAll('.nm').forEach(e=>e.textContent=PROF.nama);document.querySelectorAll('.ortu').forEach(e=>e.textContent=PROF.ortu);document.querySelectorAll('img.logo').forEach(e=>e.src=PROF.logo)});

(function(){if(PROF.logo==='logo.svg')return;const run=()=>{const i=new Image();i.onload=()=>{const mk=n=>{const c=document.createElement('canvas');c.width=c.height=n;c.getContext('2d').drawImage(i,0,0,n,n);return c.toDataURL('image/png')},a=mk(192),b=mk(512);
const mf={name:'Magic Kids Studio',short_name:'Magic Kids',start_url:new URL('index.html',location.href).href,scope:new URL('./',location.href).href,display:'standalone',background_color:'#ffe3f0',theme_color:'#ff6fa5',icons:[{src:a,sizes:'192x192',type:'image/png',purpose:'any'},{src:b,sizes:'512x512',type:'image/png',purpose:'any'}]};
let l=document.querySelector('link[rel=manifest]');if(!l){l=document.createElement('link');l.rel='manifest';document.head.append(l)}l.href=URL.createObjectURL(new Blob([JSON.stringify(mf)],{type:'application/manifest+json'}));
for(const r of['icon','apple-touch-icon']){let e=document.querySelector('link[rel="'+r+'"]');if(!e){e=document.createElement('link');e.rel=r;document.head.append(e)}e.href=a}};i.src=PROF.logo};
document.readyState=='loading'?addEventListener('DOMContentLoaded',run):run()})();
