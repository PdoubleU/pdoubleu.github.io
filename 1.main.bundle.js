(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{338:function(e,t,i){"use strict";function s(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}i.r(t),i.d(t,"slider",(function(){return n}));var n=new(function(){function e(t,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);this.options=Object.assign({},{pauseTime:8e3,generatePrevNext:!0,noOfAvailableOffers:5},i),this.sliderSelector=t,this.currentSlide=0,this.time=null,this.slider=null,this.slidesLng=this.options.noOfAvailableOffers,this.slides=null,this.language=window.localStorage.getItem("language"),this.prev=null,this.next=null,this.loadData(this.generateListOfSlides),this.generateSlider(),this.changeSlide(this.currentSlide)}var t,i,n;return t=e,(i=[{key:"loadData",value:function(e){var t=new XMLHttpRequest,i="polish"==this.language?"./json/offer-pl.json":"./json/offer-en.json",s=this.sliderSelector,n=this.slidesLng;t.open("GET",i,!1),t.onload=function(){if(200===t.status){var i=JSON.parse(t.responseText);return e(i,s,n)}},t.send(null)}},{key:"generateListOfSlides",value:function(e,t,i){for(var s,n,l=["poland","germany","czechia"],r=document.querySelector(t),a=0;a<i;a++){var d=l[(s=0,n=2,s=Math.ceil(s),n=Math.floor(n),Math.floor(Math.random()*(n-s+1))+s)],o=e[d][a].title,h=window.innerWidth>820?e[d][a].frame_img:e[d][a].frame_img_mobile,c=document.createElement("article");c.classList.add("sliderBox_cnt_slide"),c.style.backgroundImage="url(".concat(h.replace("..","."),")");var u=document.createElement("a"),p=document.createElement("span"),v=document.createElement("span");v.classList.add("txt"),u.href="subpages/"+d+".html",u.classList.add("sliderBox_cnt_slide--link");var m=document.createTextNode(o);v.appendChild(m),p.appendChild(v),u.appendChild(p),c.appendChild(u),r.appendChild(c)}}},{key:"generateSlider",value:function(){this.slider=document.querySelector(this.sliderSelector),this.slider.classList.add("sliderBox");var e=document.createElement("div");for(e.classList.add("sliderBox_cnt"),this.slides=this.slider.children;this.slides.length;)e.appendChild(this.slides[0]);this.slides=e.querySelectorAll(".sliderBox_cnt_slide"),this.slider.appendChild(e),this.options.generatePrevNext&&this.createPrevNext()}},{key:"slidePrev",value:function(){this.currentSlide--,this.currentSlide<0&&(this.currentSlide=this.slides.length-1),this.changeSlide(this.currentSlide)}},{key:"slideNext",value:function(){this.currentSlide++,this.currentSlide>this.slides.length-1&&(this.currentSlide=0),this.changeSlide(this.currentSlide)}},{key:"changeSlide",value:function(e){var t=this;this.slides.forEach((function(e){e.classList.remove("active"),e.children[0].classList.remove("active"),e.setAttribute("aria-hidden",!0)})),this.slides[e].classList.add("active"),this.slides[e].children[0].classList.add("active"),this.slides[e].setAttribute("aria-hidden",!1),this.currentSlide=e,0!==this.options.pauseTime&&(clearInterval(this.time),this.time=setTimeout((function(){return t.slideNext()}),this.options.pauseTime))}},{key:"createPrevNext",value:function(){this.innerTop=document.createElement("div"),this.innerBottom=document.createElement("div"),this.innerTop.classList.add("arrowBox--top"),this.innerBottom.classList.add("arrowBox--bottom"),this.cpyTopOne=this.innerTop.cloneNode(!0),this.cpyBottomOne=this.innerBottom.cloneNode(!0),this.cpyTopTwo=this.innerTop.cloneNode(!0),this.cpyBottomTwo=this.innerBottom.cloneNode(!0),this.prev=document.createElement("button"),this.prev.type="button",this.prev.classList.add("sliderBox_nav_button--prev","arrowBox"),this.prev.appendChild(this.cpyTopTwo),this.prev.appendChild(this.cpyBottomTwo),this.prev.addEventListener("click",this.slidePrev.bind(this)),this.next=document.createElement("button"),this.next.type="button",this.next.classList.add("sliderBox_nav_button--next","arrowBox"),this.next.appendChild(this.cpyTopOne),this.next.appendChild(this.cpyBottomOne),this.next.addEventListener("click",this.slideNext.bind(this));var e=document.createElement("div");e.classList.add("sliderBox_nav"),e.setAttribute("aria-label","Slider buttons left and right"),e.appendChild(this.prev),e.appendChild(this.next),this.slider.appendChild(e)}}])&&s(t.prototype,i),n&&s(t,n),e}())("#slider")}}]);