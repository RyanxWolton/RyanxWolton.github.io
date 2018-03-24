var $ = require('jquery');

// window.addEventListener("load", function() {
//     var nodes = document.querySelectorAll("[data-parallax]");
//     for(var i=0; i<nodes.length; i++) {
//         var children = nodes[i].children;
//         for(var n=0; n<children.length; n++) {
//             children[n].setAttribute("data-index", n+2);
//         }
//         nodes[i].addEventListener("mousemove", function(e) {
//             var elms = this.children;
//             for(var c=0; c<elms.length; c++) {
//                 var divisor = parseInt(elms[c].getAttribute("data-index"));
//                 var startX = this.offsetWidth/4;
//                 var startY = this.offsetHeight/8;
//                 elms[c].style.left = startX-(((e.screenX/divisor)-e.clientY)/3)+"px";
//             }
//         })
//     }
// });
var speed = 4, _x = 0, _y = 0, endX = 0, endY = 0
var dot = $('#cursDot');
var circ = $('#cursCircle');

$(document).mousemove(e => {
    endX = e.pageX;
    endY = e.pageY;
    dot.css('top', endY - 6 + 'px');
    dot.css('left', endX - 6 + 'px');
})

animate = () => {
    requestAnimationFrame(animate);
    _x += (endX - _x) / speed;
    _y += (endY - _y) / speed;
    circ.css('top', _y - 33 + 'px');
    circ.css('left', _x - 33 + 'px');
}
animate();