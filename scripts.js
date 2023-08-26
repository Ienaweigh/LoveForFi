var button1 = document.getElementById("button1");
var li;
var topLights = 'topD';
var bottomLights = 'bottomD';
let color = 0;
 

button1.onclick = function changeColor(){

    if (color == 0) {

        document.getElementById("button1").style.background = 'rgb(255, 31, 31)';

        document.body.style.background = '#1f0404';

        li = document.getElementById('iloveyou');
        li.style.color = 'rgb(248, 123, 123)';
    
        for (var i = 1; li = document.getElementById(topLights + i); i++){
            li.style.borderBottomColor = 'rgb(255, 31, 31)';
        }
    
        for (var l = 1; li = document.getElementById(bottomLights + l); l++){
            li.style.borderBottomColor = 'rgb(255, 66, 129)';
            console.log('test');
        }    

        color = 1;
        return null;
    }

    if (color == 1){

        document.getElementById("button1").style.background = 'rgb(245, 172, 29)';

        document.body.style.background = '#302103';
        
        li = document.getElementById('iloveyou');
        li.style.color = 'rgb(245, 199, 108)';
    
        for (var i = 1; li = document.getElementById(topLights + i); i++){
            li.style.borderBottomColor = 'rgb(245, 172, 29)';
        }
    
        for (var l = 1; li = document.getElementById(bottomLights + l); l++){
            li.style.borderBottomColor = 'rgb(255, 66, 129)';
            console.log('test');
        }    

        color = 2;
        return null;

    }

    if (color == 2) {

        document.getElementById("button1").style.background = 'rgb(17, 27, 184)';

        document.body.style.background = '#020424';

        li = document.getElementById('iloveyou');
        li.style.color = 'rgb(122, 130, 255)';
    
        for (var i = 1; li = document.getElementById(topLights + i); i++){
            li.style.borderBottomColor = 'rgb(17, 27, 184)';
        }
    
        for (var i = 1; li = document.getElementById('bottomD' + i); i++){
            li.style.borderBottomColor = 'rgb(17, 27, 184)';
        }

        color = 3;
        return null;

    }

    
    if (color == 3) {

        document.getElementById("button1").style.background = 'rgb(10, 130, 17)';

        document.body.style.background = '#022404';

        li = document.getElementById('iloveyou');
        li.style.color = 'rgb(99, 242, 108)';
    
  

        for (var i = 1; li = document.getElementById(topLights + i); i++){
            li.style.borderBottomColor = 'rgb(10, 130, 17)';
        }
    
        for (var i = 1; li = document.getElementById('bottomD' + i); i++){
            li.style.borderBottomColor = 'rgb(17, 27, 184)';
        }

        color = 4;

        return null;

    }
    

    if (color == 4) {

        document.getElementById("button1").style.background = 'rgb(184, 17, 172)';

        document.body.style.background = '#1f0416';

        li = document.getElementById('iloveyou');
        li.style.color = 'rgb(245, 192, 242)';
    
        for (var i = 1; li = document.getElementById(topLights + i); i++){
            li.style.borderBottomColor = 'rgb(184, 17, 172)';
        }
    
        for (var i = 1; li = document.getElementById(bottomLights + i); i++){
            li.style.borderBottomColor = 'rgb(184, 17, 172)';
        }    

        color = 0;

        return null;

    }


}
