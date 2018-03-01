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


var button = document.getElementById('counter');
var counter = 0;
button.onClick = function() {
    counter = counter + 1;
    var span = documnent.getElementById('count');
    span.innerHTML = counter.toString();
};

