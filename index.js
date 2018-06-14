var oLi=document.getElementsByTagName('li');
for(var i =0; i<oLi.length;i++){
    oLi[i].index = i;
    oLi[i].onclick=function(){
        for(var j =0;oLi.length;j++){
            oLi[j].className="active";
        }
        
    }
}