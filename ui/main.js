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

var counter = 0;
var button = document.getElementById('counter');
button.onClick = function() {
    counter = counter + 1;
    var span = documnent.getElementById('count');
    span.innerHTML = counter.toString();
}

