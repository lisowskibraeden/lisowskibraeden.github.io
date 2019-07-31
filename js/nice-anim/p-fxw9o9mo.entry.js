import{r as i,h as t,g as e}from"./p-3632de84.js";class s{constructor(t){i(this,t),this.direction="up",this.delay=0,this.duration=500,this.animationDistance="30%",this.triggerDistance="33%"}componentDidLoad(){this.addIntersectionObserver();const i="right"===this.direction||"down"===this.direction?"-"+this.animationDistance:this.animationDistance;this.el.querySelector(".nice-anim").style.setProperty("--distance",i)}addIntersectionObserver(){this.io=new IntersectionObserver(i=>{i[0].isIntersecting&&(this.el.querySelector(".nice-anim").classList.add(`slide-${this.direction}`),this.removeIntersectionObserver())},{threshold:parseFloat(this.triggerDistance)/100}),this.io.observe(this.el.querySelector(".nice-anim"))}removeIntersectionObserver(){this.io&&(this.io.disconnect(),this.io=null)}render(){return t("div",{class:"nice-anim",style:{animationDuration:`${this.duration}ms`,animationDelay:`${this.delay}ms`}},t("slot",null))}get el(){return e(this)}static get style(){return"\@-webkit-keyframes slide-up{0%{-webkit-transform:translateY(var(--distance));transform:translateY(var(--distance))}to{opacity:1}}\@keyframes slide-up{0%{-webkit-transform:translateY(var(--distance));transform:translateY(var(--distance))}to{opacity:1}}\@-webkit-keyframes slide-down{0%{-webkit-transform:translateY(var(--distance));transform:translateY(var(--distance))}to{opacity:1}}\@keyframes slide-down{0%{-webkit-transform:translateY(var(--distance));transform:translateY(var(--distance))}to{opacity:1}}\@-webkit-keyframes slide-right{0%{-webkit-transform:translateX(var(--distance));transform:translateX(var(--distance))}to{opacity:1}}\@keyframes slide-right{0%{-webkit-transform:translateX(var(--distance));transform:translateX(var(--distance))}to{opacity:1}}\@-webkit-keyframes slide-left{0%{-webkit-transform:translateX(var(--distance));transform:translateX(var(--distance))}to{opacity:1}}\@keyframes slide-left{0%{-webkit-transform:translateX(var(--distance));transform:translateX(var(--distance))}to{opacity:1}}.nice-anim{opacity:0;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-timing-function:ease;animation-timing-function:ease;-webkit-animation-duration:.5s;animation-duration:.5s}.slide-up{-webkit-animation-name:slide-up;animation-name:slide-up}.slide-down{-webkit-animation-name:slide-down;animation-name:slide-down}.slide-left,.slide-right{-webkit-animation-name:slide-right;animation-name:slide-right}"}}export{s as nice_anim};