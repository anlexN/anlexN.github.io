(this["webpackJsonpreact-tutorial"]=this["webpackJsonpreact-tutorial"]||[]).push([[1],{212:function(t,n,e){"use strict";e.r(n),e.d(n,"startFocusVisible",(function(){return s}));var o=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp"],s=function(){var t=[],n=!0,e=document,s=function(n){t.forEach((function(t){return t.classList.remove("ion-focused")})),n.forEach((function(t){return t.classList.add("ion-focused")})),t=n},i=function(){n=!1,s([])};e.addEventListener("keydown",(function(t){(n=o.includes(t.key))||s([])})),e.addEventListener("focusin",(function(t){if(n&&t.composedPath){var e=t.composedPath().filter((function(t){return!!t.classList&&t.classList.contains("ion-focusable")}));s(e)}})),e.addEventListener("focusout",(function(){e.activeElement===e.body&&s([])})),e.addEventListener("touchstart",i),e.addEventListener("mousedown",i)}}}]);
//# sourceMappingURL=1.ffdb3072.chunk.js.map