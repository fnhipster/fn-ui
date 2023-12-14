var a=Object.defineProperty;var h=(i,e,t)=>e in i?a(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var n=(i,e,t)=>(h(i,typeof e!="symbol"?e+"":e,t),t);const r="fn-binary";class o extends HTMLElement{constructor(){super();n(this,"playing");n(this,"current",0);n(this,"binary",[]);n(this,"intersectionObserver",new IntersectionObserver(t=>{t.forEach(s=>{s.isIntersecting?this.play():this.stop()})}));n(this,"mutationObserver",new MutationObserver(t=>{t.forEach(s=>{s.type==="childList"&&s.target===this&&this.initialize()})}));this.attachShadow({mode:"open"})}connectedCallback(){this.initialize(),this.mutationObserver.observe(this,{childList:!0,subtree:!0}),this.intersectionObserver.observe(this),this.addEventListener("mouseenter",this.stop),this.addEventListener("mouseleave",this.play)}disconnectedCallback(){this.stop(),this.mutationObserver.disconnect(),this.intersectionObserver.unobserve(this),this.removeEventListener("mouseenter",this.stop),this.removeEventListener("mouseleave",this.play)}initialize(){const t=this.textContent.trim();this.binary=t.split("").map(s=>s.charCodeAt(0).toString(2).padStart(8,"0"))}play(){if(this.playing)return;const t=this.binary.length-1;this.render(this.binary[this.current]),this.playing=setInterval(()=>{this.current===t?this.current=0:this.current+=1,this.render(this.binary[this.current])},2e3)}stop(){clearInterval(this.playing),this.playing=void 0}render(t){t&&(this.shadowRoot.innerHTML=t)}}customElements.get(r)||customElements.define(r,o);