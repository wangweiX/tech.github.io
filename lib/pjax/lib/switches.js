var on=require("./events/on");module.exports={outerHTML:function(a,e){a.outerHTML=e.outerHTML,this.onSwitch()},innerHTML:function(a,e){a.innerHTML=e.innerHTML,""===e.className&&a.removeAttribute("class"),this.onSwitch()},switchElementsAlt:function(a,e){if(a.innerHTML=e.innerHTML,e.hasAttributes())for(var s=e.attributes,t=0;t<s.length;t++)a.attributes.setNamedItem(s[t].cloneNode());this.onSwitch()},replaceNode:function(a,e){a.parentNode.replaceChild(e,a),this.onSwitch()},sideBySide:function(a,e,s,t){var c=Array.prototype.forEach,n=[],l=[],i=document.createDocumentFragment(),r="animationend webkitAnimationEnd MSAnimationEnd oanimationend",o=0,d=function(a){a.target===a.currentTarget&&--o<=0&&n&&(n.forEach(function(a){a.parentNode&&a.parentNode.removeChild(a)}),l.forEach(function(a){a.className=a.className.replace(a.getAttribute("data-pjax-classes"),""),a.removeAttribute("data-pjax-classes")}),l=null,n=null,this.onSwitch())}.bind(this);t=t||{},c.call(a.childNodes,function(a){n.push(a),a.classList&&!a.classList.contains("js-Pjax-remove")&&(a.hasAttribute("data-pjax-classes")&&(a.className=a.className.replace(a.getAttribute("data-pjax-classes"),""),a.removeAttribute("data-pjax-classes")),a.classList.add("js-Pjax-remove"),t.callbacks&&t.callbacks.removeElement&&t.callbacks.removeElement(a),t.classNames&&(a.className+=" "+t.classNames.remove+" "+(s.backward?t.classNames.backward:t.classNames.forward)),o++,on(a,r,d,!0))}),c.call(e.childNodes,function(a){if(a.classList){var e="";t.classNames&&(e=" js-Pjax-add "+t.classNames.add+" "+(s.backward?t.classNames.forward:t.classNames.backward)),t.callbacks&&t.callbacks.addElement&&t.callbacks.addElement(a),a.className+=e,a.setAttribute("data-pjax-classes",e),l.push(a),i.appendChild(a),o++,on(a,r,d,!0)}}),a.className=e.className,a.appendChild(i)}};