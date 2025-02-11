let cont = 1;
document.getElementById("r1").checked = true;

setInterval(function(){
    nextImage();
}, 2000)

function nextImage(){
    cont++;
    if(cont>4){
        cont = 1;
    }

    document.getElementById("r"+cont).checked = true;

}