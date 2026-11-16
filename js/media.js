/* Drop your own credited images into assets/images; no HTML edits needed. */
const mediaByPage = {
  'princesa-mia':['mia-antes.jpg'],
  'transformacion':['mia-antes.jpg','mia-despues.jpg'],
  'valiente':['valiente.jpg'],
  'dove':['dove-curls.jpg'],
  'encanto':['encanto.jpg'],
  'anne':['anne-entrevista.jpg'],
  'clean-girl':['clean-girl.jpg']
};
const personalByPage = {
  'mis-fotos-antes':'yo-alisada.jpg',
  'yo-hoy':'yo-crespos.jpg'
};
const imgCache = new Map();

function loadImage(path, callback) {
  if (imgCache.has(path)) {
    const ok = imgCache.get(path);
    if (ok !== 'loading') callback(ok);
    return;
  }
  imgCache.set(path,'loading');
  const image = new Image();
  image.onload=()=>{imgCache.set(path,true); callback(true);};
  image.onerror=()=>{imgCache.set(path,false); callback(false);};
  image.src=path;
}
export function hydrateMedia(root) {
  if (!root) return;
  for (const pageElement of root.querySelectorAll('[data-page-id]')) {
    const id=pageElement.dataset.pageId;
    const art=pageElement.querySelectorAll('.story-portrait, .media-duo img, .social-card img');
    (mediaByPage[id]||[]).forEach((filename,index)=>{
      if (!art[index]) return;
      const path='assets/images/'+filename;
      loadImage(path,ok=>{
        if (!ok || !art[index].isConnected) return;
        art[index].src=path;
        art[index].alt='Material visual de '+id+'; consultar el crédito de la fuente en las notas del cuento';
        pageElement.classList.add('has-real-media');
      });
    });
    if (personalByPage[id]) {
      const placeholder=pageElement.querySelector('.photo-hole');
      if (!placeholder) continue;
      const path='assets/images/'+personalByPage[id];
      loadImage(path,ok=>{
        if (!ok || !placeholder.isConnected) return;
        const image=document.createElement('img');
        image.src=path;
        image.className='personal-insert';
        image.alt='Fotografía personal: '+(id==='yo-hoy'?'cabello crespo natural':'cabello alisado');
        placeholder.replaceChildren(image);
        placeholder.classList.add('photo-hole--loaded');
      });
    }
  }
}
