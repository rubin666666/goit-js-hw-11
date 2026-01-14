import{a as h,S as y,i as n}from"./assets/vendor-BGjKfUOh.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const g="54194884-754619580cd53ed01628e79b9",v="https://pixabay.com/api/";async function L(i){try{return(await h.get(v,{params:{key:g,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}catch(r){throw console.error("Error fetching images:",r),r}}const d=document.querySelector(".gallery"),u=document.querySelector(".loader");let b=new y(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function P(i){const r=i.map(({webformatURL:o,largeImageURL:a,tags:e,likes:t,views:s,comments:m,downloads:p})=>`<li class="gallery-item">
          <a class="gallery-link" href="${a}">
            <img
              class="gallery-image"
              src="${o}"
              alt="${e}"
              title="${e}"
            />
          </a>
          <div class="gallery-info">
            <div class="info-item">
              <h3>Likes</h3>
              <p>${t}</p>
            </div>
            <div class="info-item">
              <h3>Views</h3>
              <p>${s}</p>
            </div>
            <div class="info-item">
              <h3>Comments</h3>
              <p>${m}</p>
            </div>
            <div class="info-item">
              <h3>Downloads</h3>
              <p>${p}</p>
            </div>
          </div>
        </li>`).join("");d.insertAdjacentHTML("beforeend",r),b.refresh()}function S(){d.innerHTML=""}function q(){u.classList.remove("hidden")}function c(){u.classList.add("hidden")}const f=document.querySelector(".form"),l=f.querySelector('input[name="search-text"]');f.addEventListener("submit",w);async function w(i){i.preventDefault();const r=l.value.trim();if(!r){n.error({title:"Error",message:"Please enter a search term.",position:"topRight"});return}S(),q();try{const o=await L(r);if(c(),o.hits.length===0){n.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}P(o.hits),l.value=""}catch(o){c(),n.error({title:"Error",message:"Failed to fetch images. Please try again later.",position:"topRight"}),console.error("Error:",o)}}
//# sourceMappingURL=index.js.map
