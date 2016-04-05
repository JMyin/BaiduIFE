/**
 * Created by tongqi on 4/5/16.
 */
/*
 msg system:
 stop;start;drop;create;

 plane status:
 flying:1;
 stop:0;
 null:-1;
 */
function plane(num){
    var obj={
        no:num,
        flight:{
            start:function(){
                if(obj.power>0) {
                    obj.status = 1;
                    setInterval(function()
                    {
                        clearPlane(num);
                        planeList[num].angle+=4;
                        planeList[num].angle=planeList[num].angle%360;
                        planeType(num);
                    }, 50);
                }
            },
            stop:function(){
                obj.status=0;
            },
            drop:function(){
                obj.status=-1;
            }
        },
        energy:{
            charge:function() {
                obj.power += 2;
                if(obj.power >= 100)
                    obj.power = 100;
            },
            disCharge:function(){
                if(obj.status==1)
                    obj.power-=5;
                if(obj.power<=0) {
                    obj.power = 0;
                    obj.status=0;
                }
            },
            showCharge:function()
            {
                return obj.power;
            }
        },
        command:function(msg)
        {
            if(msg.num!=obj.no)
                return;
            switch(msg.cmd)
            {
                case 'stop':obj.flight.stop();break;
                case 'start':obj.flight.start();break;
                case 'drop':obj.flight.drop();break;
            }
        },
        power:100,
        status:0,
        angle:0
    }
    return obj;
}

