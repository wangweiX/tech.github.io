class Circle{constructor(t,i){this.x=t,this.y=i,this.r=14*Math.random()+1,this._mx=2*Math.random()-1,this._my=2*Math.random()-1}drawCircle(t){t.beginPath(),t.arc(this.x,this.y,this.r,0,360),t.closePath(),t.fillStyle="rgba(204, 204, 204, 0.2)",t.fill()}drawLine(t,i){let e=this.x-i.x,r=this.y-i.y;Math.sqrt(e*e+r*r)<150&&(t.beginPath(),t.moveTo(this.x,this.y),t.lineTo(i.x,i.y),t.closePath(),t.strokeStyle="rgba(204, 204, 204, 0.1)",t.stroke())}move(t,i){this._mx=this.x<t&&this.x>0?this._mx:-this._mx,this._my=this.y<i&&this.y>0?this._my:-this._my,this.x+=this._mx/2,this.y+=this._my/2}}class currentCircle extends Circle{constructor(t,i){super(t,i)}drawCircle(t){t.beginPath(),this.r=this.r<14&&this.r>1?this.r+(2*Math.random()-1):2,t.arc(this.x,this.y,this.r,0,360),t.closePath(),t.fillStyle="rgba(45, 120, 244, "+parseInt(100*Math.random())/100+")",t.fill()}}window.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;let canvas=document.querySelector("#canvas"),ctx=canvas.getContext("2d"),w=canvas.width=canvas.offsetWidth,h=canvas.height=canvas.offsetHeight,circles=[],current_circle=new currentCircle(0,0),draw=function(){ctx.clearRect(0,0,w,h);for(let t=0;t<circles.length;t++)for(circles[t].move(w,h),circles[t].drawCircle(ctx),j=t+1;j<circles.length;j++)circles[t].drawLine(ctx,circles[j]);if(current_circle.x){current_circle.drawCircle(ctx);for(var t=1;t<circles.length;t++)current_circle.drawLine(ctx,circles[t])}requestAnimationFrame(draw)},init=function(t){for(var i=0;i<t;i++)circles.push(new Circle(Math.random()*w,Math.random()*h));draw()};window.addEventListener("load",init(80)),window.onmousemove=function(t){t=t||window.event,current_circle.x=t.clientX,current_circle.y=t.clientY},window.onmouseout=function(){current_circle.x=null,current_circle.y=null};