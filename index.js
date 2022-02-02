let canvas,context,width,height;
const boxsize = 50;

var count=0;
let printCount = () => {
  count++;
  console.log(count);
}

let move = (e) => {
  printCount();
  context.clearRect(e.pageX-boxsize/2,e.pageY-boxsize/2,boxsize,boxsize);
}

window.onload = function() {
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");
	width = canvas.width = window.innerWidth;
	height = canvas.height = window.innerHeight;
	for(var i = 0; i < 10; i += 1) {
    const r1 = Math.random();
    const r2 = Math.random();
    context.strokeRect(r1*width,r2*height,50,50);
	}
  canvas.addEventListener('mousemove',move,false);
};

