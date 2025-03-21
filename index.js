import{i as c,S as u}from"./assets/vendor-DEu1ZBVp.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const g=({webformatURL:o,largeImageURL:r,tags:i,likes:n,views:e,comments:t,downloads:s})=>`
<li class="gallery-item">
  <a class="gallery-link" href="${r}">
    <img
      class="gallery-image"
      src="${o}"
      alt="${i}"
      width="360"
      height="200"
    />
  </a>
  <ul>
    <li>
        <h3>Likes</h3>
        <p>${n}</p>
    </li>
    <li>
        <h3>Views</h3>
        <p>${e}</p>
    </li>
    <li>
        <h3>Comments</h3>
        <p>${t}</p>
    </li>
    <li>
        <h3>Downloads</h3>
        <p>${s}</p>
    </li>
  </ul>
</li>
`;function m(o){const r=document.getElementById("gallery"),i=o.map(g).join("");r.insertAdjacentHTML("afterbegin",i)}const p="Something went wrong with your request. Please try again.";function d(o){return fetch(o).then(r=>r.json()).catch(()=>{c.error({message:p,position:"topRight"})})}const h="49464671-8ab53a49f1e625c6669932451",f="Sorry, there are no images matching your search query. Please try again!",a=document.querySelector("form"),y=document.getElementById("gallery"),l=document.querySelector(".loader"),L=new u("#gallery a",{captions:!0,captionType:"attr",captionDelay:250,showCounter:!1,captionsData:"alt"});a.addEventListener("submit",o=>{o.preventDefault();const i=o.target.querySelector("input").value,n=`https://pixabay.com/api/?key=${h}&q=${encodeURI(i)}&image_type=photo&orientation=horizontal&safesearch=true`;y.innerHTML="",l.classList.add("loading"),a.reset(),d(n).then(e=>{if(l.classList.remove("loading"),!e.hits.length)return c.error({message:f,position:"topRight"});m(e.hits),L.refresh()})});console.log(void 0);
//# sourceMappingURL=index.js.map
