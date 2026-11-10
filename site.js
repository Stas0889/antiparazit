/* Page-local interaction adapter. No LP trackers, form delivery or payment SDKs. */
(()=>{'use strict';const root=document.getElementById('vlp-ap3192214-f8c29a-root');if(!root)return;
root.addEventListener('submit',event=>event.preventDefault());
const prefix='vlp-ap3192214-f8c29a-';
root.querySelectorAll('[data-action="modal"]').forEach(button=>{
 const widget=button.closest('.'+prefix+'widget-button');const modal=widget?.querySelector('.'+prefix+'modal');if(!modal)return;
 const close=()=>{modal.removeAttribute('data-open');modal.style.display='none';button.focus();};
 button.addEventListener('click',()=>{modal.setAttribute('data-open','true');modal.style.display='block';modal.querySelector('button')?.focus();});
 modal.querySelectorAll('.'+prefix+'close').forEach(b=>b.addEventListener('click',close));
 modal.addEventListener('click',event=>{if(event.target===modal)close();});modal.addEventListener('keydown',event=>{if(event.key==='Escape')close();});
});
root.querySelectorAll('.'+prefix+'spoiler2-header').forEach(header=>{
 const panel=header.parentElement.querySelector('.'+prefix+'spoiler2-container');if(!panel)return;
 header.setAttribute('role','button');header.setAttribute('tabindex','0');header.setAttribute('aria-expanded',String(getComputedStyle(panel).display!=='none'));
 function toggle(){const open=header.getAttribute('aria-expanded')!=='true';header.setAttribute('aria-expanded',String(open));panel.style.display=open?'block':'none';}
 header.addEventListener('click',toggle);header.addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();toggle();}});
});
})();
