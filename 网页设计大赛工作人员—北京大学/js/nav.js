window.onload = function (){
       var container = document.getElementById('container');
         var list = document.getElementById('list');
         var buttons = document.getElementById('buttons').getElementsByTagName('span');
         var prev = document.getElementById('prev');
         var next = document.getElementById('next');
   var index = 1;
   var animated = false;
   var timer;

         function showButton(){
     for (var i = 0;i< buttons.length ; i++)
     {
       if (buttons[i].className == 'on')
         {
         buttons[i].className = '';
             break;
         }
     }
     buttons[index - 1].className = 'on';
     }

   function animate(offset){
     animated = true;
     var newLeft = parseInt(list.style.left) + offset;
     var time = 90;
     var interval = 3;
     var speed = offset/(time/interval);

   function go(){
     if ( (speed < 0) && (parseInt(list.style.left) > newLeft ) || (speed> 0) && (parseInt (list.style.left) < newLeft) )
     {
     list.style.left = parseInt(list.style.left) + speed + 'px';
     setTimeout(go, interval);

       }
       else {
       animated = false;
                list.style.left = newLeft + 'px';
                if (newLeft > -1380){
                  list.style.left = -8280 + 'px';
                          }
     if(newLeft < -8280){
                  list.style.left = -1380 + 'px';
                      }
           }
      }
       go();
            }
             function play(){
       timer = setInterval(function(){
         next.onclick();
       },3000);

   }
   function stop () {
     clearInterval(timer);
   }



   next.onclick = function () {
     if(index == 6){
       index = 1;
     }
     else {
       index += 1;
          }

     showButton();
             if(animated == false ){
     animate(-1380);
     }

   }
         prev.onclick = function () {
            if(index == 1){
       index = 6;
     }
     else {
       index -= 1;
     }
     showButton();
     if(animated==false ){
     animate(1380);
     }
   }

   for (var i = 0;i<buttons.length ;i++ ){
   if (this.className == 'on')
       {
         return;
       }
       buttons[i].onclick=function () {
       var myIndex = parseInt(this.getAttribute('index'));
       var offset = -1380 * (myIndex - index);


       index = myIndex;
       showButton();
       if (animated == false){
         animate(offset);
       }
     }
   }
   container.onmouseover = stop;
         container.onmouseout = play;

   play();
      }
