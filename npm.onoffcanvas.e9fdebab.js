(window.webpackJsonp=window.webpackJsonp||[]).push([[4],[,function(t,e,n){t.exports=function(){"use strict";var t=function(){return(t=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},e={HIDE:"hide.onoffcanvas",SHOW:"show.onoffcanvas"},n="is-open",i='[data-toggle="onoffcanvas"]',r={createDrawer:!0,hideByEsc:!0};function s(t){var e=t.getAttribute("data-target");e&&"#"!==e||(e=t.getAttribute("href")||"");try{return document.querySelectorAll(e).length>0?e:null}catch(t){throw new Error("Target Not Found!")}}return function(){function o(e,n){var s=this;this.element=function(t){return Boolean(t.classList)}(e)?e:document.querySelector(e),this.config=t(t({},r),n),this.triggerElements=[].slice.call(document.querySelectorAll(i+'[href="#'+this.element.id+'"],\n      '+i+'[data-target="#'+this.element.id+'"]')),this.addAriaExpanded(this.triggerElements),this.triggerElements.forEach((function(t){t.addEventListener("click",(function(t){var e=t.target;e&&"A"===e.tagName&&t.preventDefault(),s.toggle()}))})),this.drawer=document.createElement("div"),this.drawer.classList.add("onoffcanvas-drawer"),document.documentElement.appendChild(this.drawer)}return o.attachTo=function(t,e){return new o(t,e)},o.autoinit=function(t){void 0===t&&(t=r);for(var e=document.querySelectorAll(""+i),n=function(t){for(var e=[],n=0,i=t;n<i.length;n++){var r=s(i[n]);e.push(r)}return e}([].slice.call(e)),a=0,c=n.filter((function(t,e,n){return e===n.indexOf(t)}));a<c.length;a++){var d=c[a];o.attachTo(d,t)}},o.prototype.on=function(t,e){return this.listen(t,e),this},o.prototype.toggle=function(){this.element.classList.contains(n)?this.hide():this.show()},o.prototype.show=function(){var t=this;this.element.classList.contains(n)||(this.element.classList.add(n),this.addAriaExpanded(this.triggerElements),this.emit(e.SHOW,this.element),this.config.createDrawer&&(this.drawer.classList.add("is-open"),this.drawer.addEventListener("click",this.hide.bind(this))),this.config.hideByEsc&&window.addEventListener("keydown",(function(e){27===e.keyCode&&t.hide()})))},o.prototype.hide=function(){this.element.classList.contains(n)&&(this.config.createDrawer&&(this.drawer.classList.remove("is-open"),this.drawer.removeEventListener("click",this.hide.bind(this))),this.element.classList.remove(n),this.addAriaExpanded(this.triggerElements),this.emit(e.HIDE,this.element))},o.prototype.listen=function(t,e){return this.element.addEventListener(t,e,!1),this},o.prototype.emit=function(t,e,n){var i;return void 0===n&&(n=!1),"function"==typeof CustomEvent?i=new CustomEvent(t,{bubbles:n}):(i=document.createEvent("CustomEvent")).initCustomEvent(t,n,!1,e),this.element.dispatchEvent(i),this},o.prototype.addAriaExpanded=function(t){var e=this.element.classList.contains(n);Array.prototype.forEach.call(t,(function(t,n){t.setAttribute("aria-expanded",e?"true":"false")}))},o}()}()}]]);