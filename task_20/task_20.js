var left_in = document.getElementById("left-in");
var right_in = document.getElementById("right-in");
var left_out = document.getElementById("left-out");
var right_out = document.getElementById("right-out");
var content = document.getElementById("wrap");
var queue=new Array();

var EventUtil = {
    addHandler: function(element,type,handler){
        if(element.addEventListener){
            element.addEventListener(type,handler,false);
        }else if(element.attachEvent) {
            element.attachEvent("on" + type, handler);
        } else {
            element["on" + type]=handler;
        }
    }
};
function isNumber(input)
{
    if( /^\d+$/.test(input))
    return true;
    else
    {
        return false;
    }
}

function myInput(input)
{
    //var inputArr=input.split(/[\n\t\r\s,，;；、]+/g,"");
    var inputArr=input.split(/[\n\r\t\s,，、;；]+/g);
    console.log(inputArr);
    return inputArr;
}
function render()
{
    var str="";
    for(x in queue)
    {
        str+="<div class='content'>"+queue[x]+"</div>"
    }
    content.innerHTML=str;
}

function leftin()
{
    var text = document.getElementById("input").value;
    if(isNumber(text)) {
        queue.unshift(text);
        render();
    }
    else
    {
        var tmpArr=new Array();
        tmpArr=myInput(text);
        for(x in tmpArr)
        {
            queue.unshift(tmpArr[x]);
        }
        render();
    }
}

function rightin()
{
    var text = document.getElementById("input").value;
    if(isNumber(text)) {
        queue.push(text);
        render();
    }
    else
    {
        var tmpArr=new Array();
        tmpArr=myInput(text);
        for(x in tmpArr)
        {
            queue.push(tmpArr[x]);
        }
        render();
    }
}

function leftout()
{
    var text = document.getElementById("input").value;
        queue.shift(text);
        render();
}
function rightout()
{
    var text = document.getElementById("input").value;
        queue.pop(text);
        render();
}
EventUtil.addHandler(left_in,'click',leftin);
EventUtil.addHandler(right_in,'click',rightin);
EventUtil.addHandler(left_out,'click',leftout);
EventUtil.addHandler(right_out,'click',rightout);

