console.log('Loaded!');
var img = document.getElementById('img');

img.onclick = function(){
    var interval = setInterval(moveRight, 50);
};

var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft + 5;
    img.style.marginLeft = marginLeft + 'px';
}


