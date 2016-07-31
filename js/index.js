window.onload=function(){
	//鼠标滑过弹出
   $(function () 
      { $("[data-toggle='popover']").popover();
      });

   //图片跟随鼠标移动
    var mask=$(".mask");
    var thiB=$(".thi-box");
    var maskW=mask.width();
    var maskH=mask.height();
    var thiBW=thiB.width();
    var thiBH=thiB.height();
    var maskCenterX=maskW/2;
    var maskCenterY=maskH/2;
    mask.mousemove(function(e){
        e.stopPropagation();
        var maskX= e.offsetX;
        var maskY= e.offsetY;
        var moveX=maskCenterX-maskX;
        var moveY=maskCenterY-maskY;
        var rateX=moveX/maskCenterX;
        var rateY=moveY/maskCenterY;
        var moveXX=(thiBW/2-maskW/2)*rateX;
        var moveYY=(thiBH/2-maskH/2)*rateY;
        thiB.css({transform:"translate("+moveXX+"px,"+moveYY+"px)"});
    });



//拖拽
 var oDiv = document.getElementById('div1');
        var disx = 0;
        var disy = 0;

        oDiv.onmousedown = function (ev)
        {
            
            var oEvent = ev||event;
            disx = oEvent.clientX - oDiv.offsetLeft;
            disy = oEvent.clientY - oDiv.offsetTop;

            document.onmousemove = function (ev)
            {
                var oEvent = ev||event;
                var l = oEvent.clientX - disx;
                var t = oEvent.clientY - disy;
                if(l<0)
                {
                    l = 0;
                }else if(l>document.documentElement.clientWidth - oDiv.offsetWidth)
                {
                    l = document.documentElement.clientWidth - oDiv.offsetWidth;
                }

                if(t<0)
                {
                    t = 0;
                }else if(t>document.documentElement.clientHeight - oDiv.offsetHeight)
                {
                    t = document.documentElement.clientHeight - oDiv.offsetHeight;
                }

                oDiv.style.left = l + 'px';
                oDiv.style.top = t + 'px';
            }

            document.onmouseup = function () 
            {
                document.onmousemove = null;
                document.onmouseup = null;
            }

        }
}