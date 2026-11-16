import { initBook, jumpToPage } from './book-engine.js';

const drawer=document.querySelector('#chapter-drawer');
const open=document.querySelector('#index-button');
const close=document.querySelector('#close-drawer');
const backdrop=document.querySelector('#drawer-backdrop');

function showDrawer() {
  drawer.hidden=false;
  open.setAttribute('aria-expanded','true');
  close.focus();
}
function hideDrawer() {
  drawer.hidden=true;
  open.setAttribute('aria-expanded','false');
  open.focus();
}
open.addEventListener('click',showDrawer);
close.addEventListener('click',hideDrawer);
backdrop.addEventListener('click',hideDrawer);
drawer.addEventListener('click',e=>{
  const target=e.target.closest('[data-go]');
  if(!target) return;
  hideDrawer();
  jumpToPage(Number(target.dataset.go));
});
initBook();
