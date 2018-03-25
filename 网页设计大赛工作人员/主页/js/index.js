
$(document).ready(function(){
        	var a,b,c;
        	a=$(window).height();
        	$(window).scroll(function(){
        		var b=$(this).scrollTop();
        		$(".move").each(function(){
        			c=$(this).offset().top;
        			if(a+b>c){
        				$(this).addClass("button");
                $(this).addClass("mokey");
                $(this).addClass("mokeys");
                $(this).addClass("buttons");
                $(this).addClass("faces");
                $(this).addClass("face");
                $(this).addClass("hand");
                $(this).addClass("mokeyss");
                $(this).addClass("facss");
                $(this).addClass("facs");
                $(this).addClass("hands");
        			}
        			else{
        				$(this).removeClass("button");
                $(this).removeClass("mokey");
                $(this).addClass("mokeys");
                $(this).addClass("bottons");
                $(this).addClass("faces");
                $(this).addClass("face");
                $(this).addClass("hand");

        			}
        		});
        	});

        });




function getStyle(obj,sName){
//获取样式函数
        return (obj.currentStyle||getComputedStyle(obj,false))[sName];
}
function move(obj,json,options){
//自定义move函数 类似jquery animation
        options = options||{};
//放运动完成执行函数 这里用不到
        options.duration = options.duration||700;
//函数执行的时间
        options.easing = options.easing||'ease-out';
//设置默认运动类型(默认先快后慢)
        var start = {};
        var dis = {};
        for(var name in json){
                start[name] = parseFloat(getStyle(obj,name));
                dis[name] = json[name]-start[name];
        }
//start表示运动开始样式的状态(数值),dis表示完成动画需要执行的样式数值
        var count = Math.floor(options.duration/30);
//整个运动在700毫秒内分多少步(帧)
        var n = 0;
//帧数
        clearInterval(obj.timer);
        obj.timer = setInterval(function(){
                n++;
                for(var name in json){
                        switch(options.easing){
                                case 'linear':
//线性运动函数
                                        var cur = start[name]+dis[name]*n/count;
                                        break;
                                case 'ease-in':
//加速运动
                                        var a = n/count;
                                        var cur = start[name]+dis[name]*Math.pow(a,3);
                                        break;
                                case 'ease-out':
//减速运动
                                        var a = 1-n/count;
                                        var cur = start[name]+dis[name]*(1-Math.pow(a,3));
                                        break;
                        }
                        if(name=='opacity'){
//透明度的运算
                                obj.style.opacity = cur;
                                obj.style.filter = 'alpha(opacity:'+cur*100+')';
                        }else{
                                obj.style[name] = cur+'px';
                        }
                }
                if(n==count){
//完成时清除定时器并且运行传入函数
                        clearInterval(obj.timer);
                        options.complete&&options.complete();
                }
        },30);
}
function a2d(n){
//弧度转换为角度
        return n*180/Math.PI;
}
function hoverDir(ev,obj){
//判断鼠标位于每个方形区域的角度（相对于方形中心）
        var a = ev.clientX-obj.offsetLeft-obj.offsetWidth/2;
        var b = obj.offsetTop+obj.offsetHeight/2-ev.clientY;

        return Math.round((a2d(Math.atan2(b,a))+180)/90)%4;
}
function through(obj){
//穿墙函数
        var oS = obj.children[0];
        obj.onmouseenter = function(ev){
                var oEvent = ev||event;
                var dir = hoverDir(oEvent,obj);
//鼠标进入区域时判断鼠标进入的方向
                switch(dir){
                        case 0:
                                //左
                                oS.style.left = '-250px';
                                oS.style.top = 0;
                                break;
                        case 1:
                                //下
                                oS.style.left = 0;
                                oS.style.top = '243px';
                                break;
                        case 2:
                                //右
                                oS.style.left = '250px';
                                oS.style.top = 0;
                                break;
                        case 3:
                                //上
                                oS.style.left = 0;
                                oS.style.top = '-243px';
                                break;
                }
                move(oS,{left:0,top:0});
//将隐藏的穿墙块(红色方块)移动到0,0位置
        };
        obj.onmouseleave = function(ev){
                var oEvent = ev||event;
                var dir = hoverDir(oEvent,obj);
//同上，判断好方向后移动到相应方向的相应位置
                switch(dir){
                        case 0:
                                move(oS,{left:-250,top:0});
                                break;
                        case 1:
                                move(oS,{left:0,top:243});
                                break;
                        case 2:
                                move(oS,{left:250,top:0});
                                break;
                        case 3:
                                move(oS,{left:0,top:-243});
                                break;
                }
        };
}
window.onload = function(){
        var aLi = document.getElementsByTagName('li');
        for(var i=0;i<aLi.length;i++){
                through(aLi[i]);
        }
};



(function() {
function k(a, b, c) {
if (a.addEventListener) a.addEventListener(b, c, false);
else a.attachEvent && a.attachEvent("on" + b, c)
}
function g(a) {
if (typeof window.onload != "function") window.onload = a;
else {
var b = window.onload;
window.onload = function() {
b();
a()
}
}
}
function h() {
var a = {};
for (type in {
Top: "",
Left: ""
}) {
var b = type == "Top" ? "Y": "X";
if (typeof window["page" + b + "Offset"] != "undefined")
a[type.toLowerCase()] = window["page" + b + "Offset"];
else {
b = document.documentElement.clientHeight ? document.documentElement: document.body;
a[type.toLowerCase()] = b["scroll" + type]
}
}
return a
}
function l() {
var a = document.body,
b;
if (window.innerHeight) b = window.innerHeight;
else if (a.parentElement.clientHeight) b = a.parentElement.clientHeight;
else if (a && a.clientHeight) b = a.clientHeight;
return b
}
function i(a) {
this.parent = document.body;
this.createEl(this.parent, a);
this.size = Math.random() * 5 + 5;
this.el.style.width = Math.round(this.size) + "px";
this.el.style.height = Math.round(this.size) + "px";
this.maxLeft = document.body.offsetWidth - this.size;
this.maxTop = document.body.offsetHeight - this.size;
this.left = Math.random() * this.maxLeft;
this.top = h().top + 1;
this.angle = 1.4 + 0.2 * Math.random();
this.minAngle = 1.4;
this.maxAngle = 1.6;
this.angleDelta = 0.01 * Math.random();
this.speed = 2 + Math.random()
}
var j = false;
g(function() {
j = true
});
var f = true;
window.createSnow = function(a, b) {
if (j) {
var c = [],
m = setInterval(function() {
f && b > c.length && Math.random()
< b * 0.0025 && c.push(new i(a)); ! f && !c.length && clearInterval(m);
for (var e = h().top, n = l(), d = c.length - 1; d >= 0; d--)
if (c[d]) if (c[d].top < e || c[d].top + c[d].size + 1 > e + n) {
c[d].remove();
c[d] = null;
c.splice(d, 1)
} else {
c[d].move();
c[d].draw()
}
},
40);
k(window, "scroll",
function() {
for (var e = c.length - 1; e >= 0; e--) c[e].draw()
})
} else g(function() {
createSnow(a, b)
})
};
window.removeSnow = function() {
f = false
};
i.prototype = {
createEl: function(a, b) {
this.el = document.createElement("img");
this.el.setAttribute
("src", b + "images/4.png");
this.el.style.position = "absolute";
this.el.style.display = "block";
this.el.style.zIndex = "99999";
this.parent.appendChild(this.el)
},
move: function() {
if (this.angle < this.minAngle || this.angle > this.maxAngle)
this.angleDelta = -this.angleDelta;
this.angle += this.angleDelta;
this.left += this.speed * Math.cos(this.angle * Math.PI);
this.top -= this.speed * Math.sin(this.angle * Math.PI);
if (this.left < 0) this.left = this.maxLeft;
else if (this.left > this.maxLeft) this.left = 0
},
draw: function() {
this.el.style.top = Math.round(this.top) + "px";
this.el.style.left = Math.round(this.left) + "px"
},
remove: function() {
this.parent.removeChild(this.el);
this.parent = this.el = null
}
}
})();
createSnow("", 40);
