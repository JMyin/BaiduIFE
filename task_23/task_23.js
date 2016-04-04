function $(id)
{
    return document.getElementById(id);
}

function drawArc()
{
    var canvas=$('canvas');
    var cans=canvas.getContext('2d');
    cans.arc(400,300,100,0,Math.PI*2);
    cans.fillStyle = 'blue';
    cans.fill();
}

function drawPlane(num)
{

}


drawArc();

function addEvent(element,type,handler){
    if(element.addEventListener) {
        element.addEventListener(type,handler,false);
    }
    else if(element.attachEvent)
    {
        element.attachEvent("on"+type,handler                          );
    }
    else
        element["on" + type]=handler;
}
